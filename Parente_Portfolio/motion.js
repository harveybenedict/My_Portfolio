/* Small, dependency-free motion layer. Content and controls work without it. */
(() => {
  "use strict";
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  const root = document.documentElement;
  const ease = "cubic-bezier(.23,1,.32,1)";
  let keyboard = false;
  document.addEventListener("keydown", () => { keyboard = true; }, true);
  document.addEventListener("pointerdown", () => { keyboard = false; }, true);

  // Reveals use short local staggers, not a long cascade down the whole page.
  // The underlying CSS is always visible, including when JS or an observer fails.
  const words = [...document.querySelectorAll(".title-word")];
  const revealNodes = [...document.querySelectorAll(".rv")].filter(el =>
    el.id !== "heroTitle" && !el.parentElement.closest(".rv")
  );
  document.querySelectorAll(".facts, .metrics, .curious, .project-copy").forEach(group => {
    [...group.querySelectorAll(".rv")].forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${Math.min(index, 3) * 65}ms`);
    });
  });
  let revealObserver;
  if (!preference.matches && "IntersectionObserver" in window) {
    words.forEach((word, i) => {
      word.style.setProperty("--word-delay", `${i * 90}ms`);
      word.classList.add("title-arrive");
    });
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .08 });
    revealNodes.forEach(el => revealObserver.observe(el));
  }

  // Native <details> behavior is preserved for keyboard and reduced motion.
  // Pointer changes can reverse midway without jumping or queueing animations.
  const runningAccordions = new Set();
  document.querySelectorAll(".project-notes").forEach(details => {
    const summary = details.querySelector("summary");
    let animation = null;
    let destination = details.open;
    const finish = expanded => {
      details.open = expanded;
      details.style.height = "";
      details.style.overflow = "";
      details.removeAttribute("data-expanding");
      animation = null;
      runningAccordions.delete(details);
    };
    details.addEventListener("motion:finish", () => {
      if (animation) animation.cancel();
      finish(destination);
    });
    summary.addEventListener("click", event => {
      if (preference.matches || event.detail === 0 || !details.animate) {
        if (animation) {
          animation.cancel();
          finish(destination);
        }
        return;
      }
      event.preventDefault();
      const start = details.getBoundingClientRect().height;
      destination = animation ? !destination : !details.open;
      if (animation) animation.cancel();
      details.style.height = "";
      details.open = true;
      const styles = getComputedStyle(details);
      const collapsed = summary.getBoundingClientRect().height +
        parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
      const end = destination ? details.getBoundingClientRect().height : collapsed;
      details.style.height = `${start}px`;
      details.style.overflow = "hidden";
      details.dataset.expanding = String(destination);
      runningAccordions.add(details);
      animation = details.animate([{height:`${start}px`},{height:`${end}px`}],
        {duration:320,easing:ease});
      animation.onfinish = () => finish(destination);
    });
  });

  // One response enters as a whole. No artificial typing delay or moving data.
  const chat = document.getElementById("chatLog");
  if (chat && "MutationObserver" in window) {
    new MutationObserver(records => {
      if (keyboard || preference.matches || !Element.prototype.animate) return;
      records.flatMap(record => [...record.addedNodes]).forEach(node => {
        if (!(node instanceof HTMLElement) || !node.classList.contains("msg")) return;
        node.animate([{opacity:0,transform:"translateY(7px)"},{opacity:1,transform:"none"}],
          {duration:200,easing:ease});
      });
    }).observe(chat, {childList:true});
  }

  // The navigation follows the reading position; URLs and native anchors remain intact.
  const navLinks = [...document.querySelectorAll(".nav a")];
  let scrollFrame = 0;
  const updateNav = () => {
    scrollFrame = 0;
    let active = null;
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section && section.getBoundingClientRect().top < innerHeight * .45) active = link;
    });
    if (document.getElementById("curious").getBoundingClientRect().top < innerHeight * .45) active = null;
    navLinks.forEach(link => {
      link.classList.toggle("is-active", link === active);
      if (link === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  addEventListener("scroll", () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateNav);
  }, {passive:true});
  updateNav();

  // Ambient rays: rasterize a few soft cone textures once, then composite them.
  // Drawing is capped at 30fps (24 on phones) and paused in hidden tabs.
  const canvas = document.getElementById("lightRays");
  const ctx = canvas?.getContext("2d", {alpha:true});
  if (!ctx) return;
  let width=0, height=0, scale=1, raf=0, lastFrame=0, elapsed=0;
  let dark = root.dataset.theme === "dark";
  let pointerX=0, pointerY=0, targetX=0, targetY=0;
  let sprites=[];
  const beams = [
    {angle:.27,spread:.29,strength:.14,phase:0},
    {angle:.51,spread:.16,strength:.19,phase:1.7},
    {angle:.76,spread:.38,strength:.14,phase:3.2},
    {angle:1.02,spread:.18,strength:.13,phase:4.1},
    {angle:1.22,spread:.48,strength:.09,phase:5.4}
  ];
  const texture = rgb => {
    const image = document.createElement("canvas");
    image.width=96; image.height=384;
    const context=image.getContext("2d");
    const pixels=context.createImageData(image.width,image.height);
    for(let y=0;y<image.height;y++){
      const depth=y/(image.height-1), halfWidth=3+depth*43;
      for(let x=0;x<image.width;x++){
        const distance=(x-image.width/2)/halfWidth;
        const alpha=Math.exp(-distance*distance*4.5)*Math.pow(1-depth,1.5);
        const p=(y*image.width+x)*4;
        pixels.data[p]=rgb[0];pixels.data[p+1]=rgb[1];pixels.data[p+2]=rgb[2];
        pixels.data[p+3]=Math.round(alpha*255);
      }
    }
    context.putImageData(pixels,0,0);
    return image;
  };
  const prepare = () => {
    dark=root.dataset.theme === "dark";
    sprites=[texture(dark ? [164,180,170] : [13,42,28]),texture([246,224,22])];
  };
  const draw = time => {
    ctx.clearRect(0,0,width,height);
    const phone=width<600;
    const sourceX=width*(phone ? 1.14 : 1.02)+pointerX;
    const sourceY=-height*.23+pointerY;
    const length=Math.max(width,height)*(phone ? 1.9 : 1.65);
    const glow=ctx.createRadialGradient(width*.91,-height*.08,0,width*.91,-height*.08,Math.max(width,height)*.8);
    glow.addColorStop(0,dark ? "rgba(164,180,170,.12)" : "rgba(246,224,22,.055)");
    glow.addColorStop(1,"rgba(164,180,170,0)");
    ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    (phone ? beams.slice(0,3) : beams).forEach((beam,index) => {
      const drift=preference.matches ? 0 : Math.sin(time*.00012+beam.phase)*.045;
      ctx.save();ctx.translate(sourceX,sourceY);ctx.rotate(beam.angle+drift);
      ctx.globalAlpha=beam.strength*(dark ? 1 : .28);
      const breadth=width*beam.spread;
      ctx.drawImage(sprites[index===3 ? 1 : 0],-breadth/2,0,breadth,length);
      ctx.restore();
    });
  };
  const tick = timestamp => {
    raf=0;
    if(document.hidden || preference.matches) return;
    const interval=width<600 ? 1000/24 : 1000/30;
    if(timestamp-lastFrame>=interval){
      const delta=Math.min(timestamp-lastFrame,80);
      elapsed+=delta;lastFrame=timestamp;
      pointerX+=(targetX-pointerX)*.035;pointerY+=(targetY-pointerY)*.035;
      draw(elapsed);
    }
    raf=requestAnimationFrame(tick);
  };
  const start = () => {
    if(!document.hidden && !preference.matches && !raf){lastFrame=performance.now();raf=requestAnimationFrame(tick);}
  };
  const resize = () => {
    width=innerWidth;height=innerHeight;
    // At most one canvas pixel per CSS pixel; these intentionally soft rays need no retina buffer.
    scale=Math.min(1,1400/Math.max(width,height));
    canvas.width=Math.round(width*scale);canvas.height=Math.round(height*scale);
    ctx.setTransform(scale,0,0,scale,0,0);draw(elapsed);
  };
  let resizeFrame=0;
  addEventListener("resize",()=>{
    if(resizeFrame)cancelAnimationFrame(resizeFrame);
    resizeFrame=requestAnimationFrame(()=>{resizeFrame=0;resize();});
  },{passive:true});
  addEventListener("pointermove",event=>{
    if(!finePointer.matches || preference.matches) return;
    targetX=(event.clientX/Math.max(width,1)-.5)*36;
    targetY=(event.clientY/Math.max(height,1)-.5)*18;
  },{passive:true});
  document.addEventListener("pointerleave",()=>{targetX=0;targetY=0;});
  document.addEventListener("visibilitychange",()=>{
    if(document.hidden){cancelAnimationFrame(raf);raf=0;}else start();
  });
  new MutationObserver(()=>{prepare();draw(elapsed);}).observe(root,{attributes:true,attributeFilter:["data-theme"]});
  preference.addEventListener("change",()=>{
    if(preference.matches){
      cancelAnimationFrame(raf);raf=0;
      revealObserver?.disconnect();
      runningAccordions.forEach(el=>el.dispatchEvent(new Event("motion:finish")));
      document.getAnimations().forEach(animation=>animation.cancel());
      canvas.dataset.motion="static";
      pointerX=pointerY=targetX=targetY=0;draw(0);
    }else{canvas.dataset.motion="animated";start();}
  });
  prepare();resize();
  canvas.dataset.motion=preference.matches ? "static" : "animated";
  start();
})();
