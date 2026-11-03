
/* ==================================================================
   >>> EDIT YOUR CONTENT HERE <<<
   Everything on the page — and the Ask bot's answers — comes from this block.
   ================================================================== */
const PORTFOLIO = {

  name:        "Harvey Benedict Parente",
  headline:    "Harvey Parente.",
  intro:       "Computer Science student, specializing in Data Science, at Far Eastern University – Institute of Technology in Manila. Open to internships.",
  availability:"Open to internships",
  location:    "Manila, Philippines",
  resume:      "Parente_Resume.pdf",          // keep this file next to index.html

  email:       "harveyparente@gmail.com",
  linkedin:    "https://www.linkedin.com/in/harvey-parente-377b66266/",
  linkedinLabel:"linkedin.com/in/harvey-parente-377b66266",
  github:      "https://github.com/harveybenedict",                            // your GitHub profile

  /* the four short facts under the headline */
  facts: [
    { lead:"Studying",   text:"BS Computer Science, specialized in Data Science, at Far Eastern University – Institute of Technology. Expected September 2027." },
    { lead:"Experience", text:"Data Science Intern at the Institute for Data and Statistical Analysis. Chapter Leader in the National Service Reserve Corps." },
    { lead:"Latest project", text:"GeneScope, a logistic regression study of genetic testing utilization in the Philippines." },
    { lead:"Reach me",   mail:true }
  ],

  /* --- PROJECT --- */
  project: {
    name:   "GeneScope",
    url:    "https://genescope.online/login",
    image:  "assets/genescope.png",
    title:  "Predicting Genetic Testing Utilization in the Philippines Using Binary Logistic Regression",
    period: "Oct 2025 – Oct 2026",
    stack:  "Built with Python, scikit-learn, Flask, TanStack Start (React/TypeScript) and PostgreSQL; hosted on Netlify/Cloudflare, Render and Neon.",
    points: [
      "Developed a predictive system with a four-member team in partnership with an industry healthcare company to classify genetic test type (targeted vs. comprehensive) from clinical, geographic, and institutional factors, supporting equitable healthcare planning in the Philippines",
      "Engineered features from 447 de-identified patient records and tuned three models using GridSearchCV and 5-fold cross-validation, correcting a 3:1 class imbalance through class weighting",
      "Achieved 82.22% test accuracy and a 0.8275 cross-validated ROC-AUC with an interpretable Logistic Regression model",
      "Identified disease category as the strongest predictor (Pediatrics OR = 22.43) and quantified a Mindanao neurology access gap (OR = 0.46) to guide regional resource allocation"
    ],
    metrics: [
      { value:"82.22%", label:"test accuracy" },
      { value:"0.8275", label:"cross-validated ROC-AUC" },
      { value:"447",    label:"de-identified patient records" },
      { value:"3:1",    label:"class imbalance, corrected through class weighting" }
    ],
    figure: {
      title: "Two odds ratios from the model",
      sub:   "Odds ratio on a log scale. A bar to the right of 1 means higher odds, to the left means lower.",
      rows: [
        { label:"Pediatrics",                       value:22.43, read:"Pediatrics: odds ratio 22.43. Disease category was the strongest predictor of genetic testing utilization." },
        { label:"Neurology access gap in Mindanao", value:0.46,  read:"Neurology access gap in Mindanao: odds ratio 0.46. Below 1, so lower odds of access, which guides where to direct regional resources." }
      ]
    }
  },

  /* --- WORK EXPERIENCE --- */
  experience: [
    {
      title:"Data Science Intern",
      org:"Institute for Data and Statistical Analysis · Sta. Mesa, Manila, Philippines",
      period:"Feb – May 2023",
      points:[
        "Analyzed 82,000+ records using IBM SPSS and statistical modeling techniques to identify trends that informed institutional decision-making",
        "Cleaned and validated datasets in Microsoft Excel to ensure the accuracy and reliability of analysis results",
        "Collaborated with cross-functional teams by performing analytical work on departmental data, delivering insights that supported improved institutional outcomes",
        "Presented modeling results to department heads and directors through clear reports and presentations to support decision-making"
      ]
    }
  ],

  /* --- ACTIVITIES --- */
  activities: [
    {
      title:"Chapter Leader",
      org:"National Service Reserve Corps (NSRC) · Padre Paredes St, Sampaloc, Manila",
      period:"Nov 2024 – Apr 2025",
      points:[
        "Led an elected chapter leadership role, coordinating members and activities for disaster and humanitarian relief programs",
        "Partnered with the Philippine Coast Guard to organize water survival training that prepared participants for emergency response",
        "Directed community outreach in Agoncillo, Batangas, delivering aid to families affected by the Taal eruption",
        "Mobilized volunteers and resources to support relief operations"
      ]
    }
  ],

  /* --- EDUCATION --- */
  education: [
    {
      title:"Far Eastern University – Institute of Technology",
      org:"Bachelor of Science · Major in Computer Science, specialized in Data Science",
      period:"Expected Sep 2027",
      place:"Padre Paredes St, Sampaloc, Manila",
      coursework:"Object Oriented Programming, Data Structures and Algorithms, Database Systems, Modeling and Simulation, Data Visualization, Statistical Analysis and Modeling, Advanced Machine Learning, Large Language Models, Cybersecurity"
    }
  ],

  /* --- CERTIFICATE LINKS ---
     Put your PDFs in certifications/ and edit the href for each certificate.
     Example: { title:"Python", href:"certifications/python.pdf" }
     These are file paths ready for your PDFs; the actual PDFs are not included.
  */
  certificates: [
    { title:"Python", href:"certifications/python.pdf" },
    { title:"PMI Project Management Ready", href:"certifications/pmi-project-management-ready.pdf" },
    { title:"Android Development with Kotlin", href:"certifications/android-development-kotlin.pdf" },
    { title:"Linux Essentials", href:"certifications/linux-essentials.pdf" }
  ],

  /* --- SKILLS (the résumé's "Additional" section) --- */
  skills: [
    { label:"Technical skills",      items:["Advanced in Python","Proficient in SQL"] },
    { label:"Programming languages", items:["Java","C++","MATLAB","PHP","HTML/CSS","XML","Kotlin"], inline:true },
    { label:"Certifications",        items:["Python","PMI Project Management Ready","Android Development with Kotlin","Linux Essentials"] },
    { label:"Languages",             items:["Filipino (native)","English (fluent)","Mandarin (beginner)"] }
  ],

  /* --- WHAT KEEPS ME CURIOUS --- */
  passions: [
    { title:"AI & machine learning",
      blurb:"From classical models to transformers — I like understanding why a model works, not just that it does." },
    { title:"Finance & markets",
      blurb:"Crypto, equities, and the data behind them. My dream problems sit where quantitative finance meets ML." },
    { title:"Hackathons & building",
      blurb:"Nothing teaches faster than a 48-hour deadline. I join hackathons to ship rough ideas into working demos." }
  ],

  /* --- ASK MY DATA --- */
  askIntro:  "Hi, I’m Harvey’s portfolio guide. I can help you explore GeneScope, my experience, the tools I use, or how to get in touch. Where would you like to start?",
  askCap:    "The quickest way to get to know my work? Just ask.",
  askChips: [
    "What is GeneScope?",
    "What's his tech stack?",
    "Is he open to internships?",
    "Tell me about his experience",
    "What does he study?",
    "How do I contact him?"
  ],

  contactSay: "Good work starts with a conversation.",
  footer:     "Harvey Benedict Parente"
};
/* ==================================================================
   >>> END OF EDITABLE CONTENT <<<
   ================================================================== */


/* ================= HELPERS ================= */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mq = q => window.matchMedia ? matchMedia(q).matches : false;
const reduceMotion = mq("(prefers-reduced-motion:reduce)");
const P = PORTFOLIO;

/* ================= RENDER ================= */
$("heroTitle").innerHTML = P.headline.split(" ").map(word => `<span class="title-word">${esc(word)}</span>`).join(" ");
$("heroLead").textContent = P.intro;
const dlIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/></svg>`;
$("heroActions").innerHTML =
  `<a class="btn" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>` +
  `<a class="link" href="${esc(P.resume)}" download>Résumé ${dlIcon}</a>`;

$("facts").innerHTML = P.facts.map(f =>
  `<p class="rv${f.mail ? " fact-contact" : ""}"><strong>${esc(f.lead)}</strong>` +
  (f.mail ? `<a class="link" href="mailto:${esc(P.email)}">Send me an email ↗</a><span class="fact-location">${esc(P.location)}</span>` : esc(f.text)) +
  `</p>`).join("");

const points = pts => `<ul class="dash">${pts.map(t => `<li class="rv">${esc(t)}</li>`).join("")}</ul>`;
const entry = e => `
  <article class="entry">
    <div class="entry-head rv"><h3>${esc(e.title)}</h3><p class="when tab">${esc(e.period)}</p></div>
    ${e.org ? `<p class="org rv">${esc(e.org)}</p>` : ""}
    ${e.place ? `<p class="org rv">${esc(e.place)}</p>` : ""}
    ${e.coursework ? `<p class="note rv"><b>Relevant coursework.</b> ${esc(e.coursework)}.</p>` : ""}
    ${e.points ? points(e.points) : ""}
  </article>`;

const arrowIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>`;
/* project + the odds-ratio instrument */
(function(){
  const p = P.project, f = p.figure;
  const X = v => (Math.log10(v) + 1) / 3 * 100;        // log scale: 0.1 → 0%, 100 → 100%
  const ref = X(1);
  const rows = f.rows.map((r,i) => {
    const x = X(r.value), left = Math.min(x, ref), width = Math.abs(x - ref);
    const origin = r.value >= 1 ? "left" : "right";
    return `<button class="or-row" type="button" data-i="${i}" aria-pressed="${i===0}">
      <span class="or-label"><span>${esc(r.label)}</span><span class="tab">${r.value}</span></span>
      <span class="or-track"><span class="or-bar" style="left:${left}%;width:${width}%;transform-origin:${origin} center"></span><span class="or-ref" style="left:calc(${ref}% - 1px)"></span></span>
    </button>`;
  }).join("");
  $("projectBody").innerHTML = `
    <article class="entry">
      <div class="project-layout">
        <div class="project-copy">
          <h3 class="rv"><a class="project-title" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)} ${arrowIcon}</a></h3>
          <p class="project-summary rv">Making genetic testing data useful for better healthcare decisions.</p>
          <p class="project-description rv">A predictive system built with a four-member team, exploring how clinical, geographic, and institutional factors shape genetic testing in the Philippines.</p>
          <p class="when tab rv">${esc(p.period)}</p>
          <a class="project-visit rv" href="${esc(p.url)}" target="_blank" rel="noopener">Explore GeneScope ${arrowIcon}</a>
        </div>
        <a class="project-preview rv" href="${esc(p.url)}" target="_blank" rel="noopener" aria-label="Open GeneScope — view the live project">
          <img src="${esc(p.image)}" alt="GeneScope prediction interface with six patient indicators and an interpretable recommendation panel" width="1161" height="883" />
          <span class="preview-action">View live project ${arrowIcon}</span>
        </a>
      </div>
      <div class="metrics">${p.metrics.map(m => `<div class="metric rv"><b class="tab">${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}</div>
      <details class="project-notes rv"><summary>Behind the model</summary><div class="notes-content"><p class="note">${esc(p.title)}.</p><p class="note">${esc(p.stack)}</p>${points(p.points)}</div></details>
    </article>
    <figure class="fig rv">
      <figcaption class="fig-caption"><h4>${esc(f.title)}</h4><p class="sub">${esc(f.sub)}</p><p class="sub">Select a finding to read the interpretation.</p></figcaption>
      <div><div class="or-rows" id="orRows">${rows}</div>
      <div class="or-axis" aria-hidden="true"><span style="left:0">0.1</span><span style="left:${ref}%">1</span><span style="left:${X(10)}%">10</span><span style="left:100%">100</span></div>
      <p class="or-read" id="orRead" aria-live="polite">${esc(f.rows[0].read)}</p></div>
    </figure>`;
  const show = i => {
    document.querySelectorAll(".or-row").forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.i === i)));
    $("orRead").textContent = f.rows[i].read;
  };
  document.querySelectorAll(".or-row").forEach(b => {
    b.addEventListener("click", () => show(+b.dataset.i));
    b.addEventListener("mouseenter", () => show(+b.dataset.i));
    b.addEventListener("focus", () => show(+b.dataset.i));
  });
})();

$("expBody").innerHTML  = P.experience.map(entry).join("");
$("actBody").innerHTML  = P.activities.map(entry).join("");
$("eduBody").innerHTML  = P.education.map(entry).join("");
const skillIcons = {
  "Advanced in Python":["python","Python"], "Proficient in SQL":["sql","SQL"],
  "Java":["java","Java"], "C++":["cplusplus","C++"], "MATLAB":["matlab","MATLAB"],
  "PHP":["php","PHP"], "HTML/CSS":["html5","HTML5"], "XML":["xml","XML"], "Kotlin":["kotlin","Kotlin"]
};
const skillItem = item => {
  const icon = skillIcons[item];
  const image = icon ? `<img src="assets/icons/${icon[0]}.svg" alt="" width="25" height="25" loading="lazy" />` : "";
  const css = item === "HTML/CSS" ? '<img src="assets/icons/css3.svg" alt="" width="25" height="25" loading="lazy" />' : "";
  return `<li class="skill-item">${image}${css}<span>${esc(item)}</span></li>`;
};
$("skillBody").innerHTML = P.skills.map(s =>
  `<dt>${esc(s.label)}</dt><dd>${s.label === "Certifications"
    ? `<ul class="cert-list">${P.certificates.map(c => `<li><a class="cert-link" href="${esc(c.href)}" target="_blank" rel="noopener" aria-label="${esc(c.title)} certificate PDF">${esc(c.title)}${arrowIcon}</a></li>`).join("")}</ul>`
    : `<ul class="${s.label === "Languages" ? "" : "skill-list"}">${s.items.map(s.label === "Languages" ? i => `<li>${esc(i)}</li>` : skillItem).join("")}</ul>`}</dd>`).join("");
$("curiousBody").innerHTML = P.passions.map(p =>
  `<li class="rv"><h3>${esc(p.title)}</h3><p>${esc(p.blurb)}</p></li>`).join("");

/* contact */
$("contactSay").textContent = P.contactSay;
$("contactLinks").innerHTML =
  `<li><a class="link" href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>` +
  `<li><a class="link" href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>` +
  (P.github ? `<li><a class="link" href="${esc(P.github)}" target="_blank" rel="noopener">GitHub</a></li>` : "") +
  `<li><a class="link" href="${esc(P.resume)}" download>Résumé (PDF)</a></li>`;
$("footName").textContent = "© " + new Date().getFullYear() + " " + P.footer;
document.title = "Harvey Parente | Data Science Portfolio";

/* Page motion is progressively enhanced in motion.js. */

/* ================= CLOCK (Manila) ================= */
(function(){
  const cv = $("clockCanvas"), ctx = cv.getContext && cv.getContext("2d");
  if(!ctx) return;
  const S = 88, C = S/2, DPR = Math.min(devicePixelRatio || 1, 2);
  cv.width = S*DPR; cv.height = S*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
  const INK = "#0D2A1C";
  const fmt = new Intl.DateTimeFormat("en-US", { timeZone:"Asia/Manila", hour:"numeric", minute:"2-digit", hour12:true });
  const parts = new Intl.DateTimeFormat("en-US", { timeZone:"Asia/Manila", hour:"numeric", minute:"numeric", second:"numeric", hour12:false });
  function now(){
    const o = {}; parts.formatToParts(new Date()).forEach(p => o[p.type] = p.value);
    return { h:(+o.hour)%24, m:+o.minute, s:+o.second };
  }
  function hand(a, len, w){
    ctx.save(); ctx.translate(C,C); ctx.rotate(a); ctx.strokeStyle = INK; ctx.lineWidth = w; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-len); ctx.stroke(); ctx.restore();
  }
  function draw(){
    ctx.clearRect(0,0,S,S);
    for(let i=0;i<12;i++){
      const a = i*Math.PI/6, r1 = i%3===0 ? 32 : 36, r2 = 41;
      ctx.strokeStyle = INK; ctx.lineWidth = i%3===0 ? 2.4 : 1.4; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(C+Math.sin(a)*r1, C-Math.cos(a)*r1); ctx.lineTo(C+Math.sin(a)*r2, C-Math.cos(a)*r2); ctx.stroke();
    }
    const t = now(), m = t.m + t.s/60, h = (t.h%12) + m/60;
    hand(h*Math.PI/6, 20, 3.2);
    hand(m*Math.PI/30, 30, 2.2);
    hand(t.s*Math.PI/30, 33, 1);
    ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(C,C,2.6,0,7); ctx.fill();
    $("clockText").innerHTML = "<b style=\"font-weight:500\">" + esc(fmt.format(new Date())) + "</b><br>in Manila right now";
  }
  draw(); setInterval(draw, 1000);
})();

/* ================= ASK MY DATA ================= */
(function(){
  const log = $("chatLog"), input = $("askInput"), send = $("askSend");
  $("askCap").textContent = P.askCap;
  const stripTags = s => s.replace(/<[^>]+>/g, "");
  const list = items => `<ul class="msg-list">${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
  const pr = P.project;

  const INTENTS = [
    { k:["project","projects","genescope","gene","genetic","genetics","regression","logistic","odds","accuracy","roc","auc","model","models","built","build","portfolio","showcase","healthcare","predictor"],
      a:()=>`<b>${esc(pr.name)}</b> (${esc(pr.period)}): ${esc(pr.title)}.` +
        list([
          `${esc(pr.metrics[0].value)} ${esc(pr.metrics[0].label)} and a ${esc(pr.metrics[1].value)} ${esc(pr.metrics[1].label)}`,
          `Built on ${esc(pr.metrics[2].value)} ${esc(pr.metrics[2].label)}, with a ${esc(pr.metrics[3].value)} class imbalance corrected`,
          `Strongest predictor: disease category (Pediatrics OR = 22.43)`
        ]) + `<a class="link" href="${esc(pr.url)}" target="_blank" rel="noopener">Open GeneScope ↗</a>, or explore the findings under Projects.` },
    { k:["stack","tech","tool","tools","skill","skills","programming","python","sql","java","kotlin","matlab","php","framework","libraries","know","knows","scikit","flask","react","typescript","postgresql"],
      a:()=>`His toolkit:` + list(P.skills.filter(s => s.label !== "Languages").map(s => `<b>${esc(s.label)}:</b> ${s.items.map(esc).join(", ")}`)) +
        `On GeneScope he used ${esc(pr.stack.replace(/^Built with /,"").replace(/;.*$/,""))}.` },
    { k:["experience","job","jobs","intern","work history","worked","role","career","spss","excel","idsa","institute"],
      a:()=>`Work experience:` + list(P.experience.map(e => `<b>${esc(e.title)}</b> · ${esc(e.org.split(" · ")[0])} (${esc(e.period)}). ${esc(e.points[0])}.`)) },
    { k:["activities","activity","nsrc","reserve","volunteer","leadership","leader","chapter","taal","coast","relief","humanitarian","disaster"],
      a:()=>`Activities:` + list(P.activities.map(e => `<b>${esc(e.title)}</b> · ${esc(e.org.split(" · ")[0])} (${esc(e.period)}). ${esc(e.points[0])}.`)) },
    { k:["education","study","studies","school","university","college","degree","course","courses","coursework","feu","far eastern","graduate","graduation","major"],
      a:()=>list(P.education.map(e => `<b>${esc(e.title)}</b>. ${esc(e.org)}. ${esc(e.period)}. Coursework includes ${esc(e.coursework.split(", ").slice(0,5).join(", "))} and more.`)) },
    { k:["cert","certs","certificate","certification","certifications","credential","pmi","linux"],
      a:()=>`Certifications: ${esc(P.skills.find(s => s.label === "Certifications").items.join("; "))}.` },
    { k:["speak","spoken","filipino","english","mandarin","tagalog","fluent","fluency","bilingual","spoken languages"],
      a:()=>`Languages: ${esc(P.skills.find(s => s.label === "Languages").items.join("; "))}.` },
    { k:["passion","passionate","interest","interests","hobby","hobbies","curious","love","like"],
      a:()=>`What keeps him curious:` + list(P.passions.map(p => `<b>${esc(p.title)}</b>. ${esc(p.blurb)}`)) },
    { k:["internship","internships","open","available","availability","hire","hiring","opportunity","opportunities","looking"],
      a:()=>`Yes. <b>${esc(P.availability)}</b>. Email ${esc(P.email)} and he'll get back to you.` },
    { k:["contact","email","reach","linkedin","github","message","touch","connect"],
      a:()=>`Easiest ways to reach Harvey:` +
        list([`Email: <b>${esc(P.email)}</b>`, `LinkedIn: ${esc(P.linkedinLabel)}`].concat(P.github ? [`GitHub: ${esc(P.github)}`] : [])) +
        `<button class="msg-act" data-act="copy-email">Copy email</button>` },
    { k:["resume","résumé","cv","pdf","download"],
      a:()=>`His résumé is a one-page PDF.<a class="msg-act" href="${esc(P.resume)}" download>Download résumé</a>` },
    { k:["who is","about","yourself","introduce","bio","tell me about"],
      a:()=>esc(P.intro) },
    { k:["where","location","based","city","live","manila","philippines"],
      a:()=>`Harvey is based in <b>${esc(P.location)}</b>.` },
    { k:["bot","an ai","are you real","are you ai","chatbot","how do you work","gpt","claude","llm"],
      a:()=>`Honest answer: I'm not a cloud LLM. I'm a <b>keyword-scored retrieval function</b> over the data block that renders this page: tokenize the question, score each topic, return the best match. No network calls. Harvey wrote me.` },
    { k:["hello","hi","hey","yo","kumusta","greetings"],
      a:()=>`Hey! Ask me about Harvey's project, experience, skills, education, or how to reach him.` },
    { k:["thanks","thank","salamat","cool","nice","awesome","great"],
      a:()=>`Anytime! If you only look at one thing, make it <b>GeneScope</b> under Projects.` }
  ];

  function answer(q){
    const ql = " " + q.toLowerCase().replace(/[^a-z0-9À-ÿ\s]/g, " ") + " ";
    let best = null, bestScore = 0;
    for(const it of INTENTS){
      let s = 0;
      for(const kw of it.k){
        const k = " " + kw.toLowerCase();
        if(kw.length > 3 ? ql.includes(k) : ql.includes(k + " ")) s += kw.length;
      }
      if(s > bestScore){ bestScore = s; best = it; }
    }
    if(best && bestScore >= 2) return best.a();
    return `I couldn't match that to my data. Try asking about <b>GeneScope</b>, <b>skills</b>, <b>experience</b>, <b>education</b>, <b>activities</b>, <b>internships</b> or <b>contact</b>.`;
  }

  function addMsg(html, who){
    const el = document.createElement("div");
    el.className = "msg " + who;
    el.innerHTML = (who === "bot" ? '<span class="message-byline">Portfolio guide</span>' : '') + html;
    log.appendChild(el);
    if(who === "bot") $("askLive").textContent = stripTags(html.replace(/<\/li>/g, ". "));
    log.scrollTop = log.scrollHeight;
  }
  function ask(q){
    q = q.trim().slice(0,500); if(!q) return;
    addMsg(esc(q), "user"); input.value = "";
    addMsg(answer(q), "bot");
  }
  window.__ask = ask;
  $("askForm").addEventListener("submit", e => { e.preventDefault(); ask(input.value); });
  $("clearChat").addEventListener("click", () => { log.replaceChildren(); addMsg(esc(P.askIntro), "bot"); input.focus({preventScroll:true}); });
  log.addEventListener("click", e => {
    const btn = e.target.closest("[data-act=copy-email]");
    if(btn) copyEmail();
  });
  $("askChips").innerHTML = P.askChips.map(c => `<button type="button">${esc(c)}</button>`).join("");
  $("askChips").querySelectorAll("button").forEach(b => b.addEventListener("click", () => ask(b.textContent)));
  addMsg(esc(P.askIntro), "bot");
})();

/* ================= THEME ================= */
const htmlEl = document.documentElement, themeBtn = $("themeBtn");
function setThemeIcon(){
  const dark = htmlEl.getAttribute("data-theme") === "dark";
  $("themeIcon").innerHTML = dark
    ? `<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>`
    : `<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>`;
  themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
}
themeBtn.addEventListener("click", () => {
  const next = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
  htmlEl.setAttribute("data-theme", next);
  try{ localStorage.setItem("theme", next); }catch(_){}
  setThemeIcon();
  showToast(next === "dark" ? "Dark theme" : "Light theme");
});
setThemeIcon();

/* ================= TOAST + COPY ================= */
const toast = $("toast");
function showToast(msg){
  toast.textContent = msg; toast.classList.add("show");
  clearTimeout(showToast._t); showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}
function copyEmail(){
  (navigator.clipboard ? navigator.clipboard.writeText(P.email) : Promise.reject())
    .then(() => showToast("Email copied: " + P.email)).catch(() => showToast(P.email));
}

/* ================= COMMAND PALETTE ================= */
const overlay = $("palOverlay"), palInput = $("palInput"), palList = $("palList");
const IC = {
  assistant:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 7V4M9 12h.01M15 12h.01M9 16h6"/></svg>`,
  go:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  doc:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>`,
  moon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>`,
  mail:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
  ext:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>`
};
const goto = id => () => { location.hash = id; document.querySelector(id)?.scrollIntoView({behavior:reduceMotion ? "instant" : "smooth",block:"start"}); };
const GROUPS = [
  { label:"Featured", items:[ { ic:IC.assistant, label:"Ask Assistant", assistant:true } ] },
  { label:"Views", items:[
    { ic:IC.go, label:"Home",       key:"H", run:goto("#top") },
    { ic:IC.go, label:"Projects",   key:"P", run:goto("#projects") },
    { ic:IC.go, label:"Experience", key:"E", run:goto("#experience") },
    { ic:IC.go, label:"Activities", key:"A", run:goto("#activities") },
    { ic:IC.go, label:"Education",  key:"D", run:goto("#education") },
    { ic:IC.go, label:"Skills",     key:"S", run:goto("#skills") },
    { ic:IC.go, label:"Ask my data",key:"Q", run:goto("#ask") },
    { ic:IC.go, label:"Contact",    key:"C", run:goto("#contact") }
  ]},
  { label:"Actions", items:[
    { ic:IC.doc,  label:"Download résumé (PDF)", run:() => { const a = document.createElement("a"); a.href = P.resume; a.download = ""; document.body.appendChild(a); a.click(); a.remove(); } },
    { ic:IC.moon, label:"Toggle light / dark",   run:() => themeBtn.click() },
    { ic:IC.mail, label:"Copy email address",    run:copyEmail },
    { ic:IC.ext,  label:"Open LinkedIn",         run:() => window.open(P.linkedin, "_blank", "noopener") }
  ].concat(P.github ? [{ ic:IC.ext, label:"Open GitHub", run:() => window.open(P.github, "_blank", "noopener") }] : []) }
];
const ALL = GROUPS.flatMap(g => g.items);

function runItem(it){
  if(it.assistant){
    const q = palInput.value.trim();
    closePalette();
    location.hash = "#ask";
    setTimeout(() => window.__ask(q || "Tell me about Harvey"), 350);
    return;
  }
  closePalette();
  it.run && it.run();
}
let palSel = 0, palVisible = ALL;
function renderPalette(){
  const q = palInput.value.toLowerCase().trim();
  let html = "", idx = 0; palVisible = [];
  GROUPS.forEach(g => {
    const items = g.items.filter(it => it.assistant || it.label.toLowerCase().includes(q));
    if(!items.length) return;
    html += `<div class="pal-group"><div class="pal-label">${esc(g.label)}</div>`;
    items.forEach(it => {
      const i = idx++; palVisible.push(it);
      const label = it.assistant && q ? `Ask Assistant: "${esc(palInput.value.trim())}"` : esc(it.label);
      html += `<button class="pal-item${i===palSel?" sel":""}" data-i="${i}">${it.ic}<span class="l">${label}</span>${it.key ? `<span class="keycap">${it.key}</span>` : ""}</button>`;
    });
    html += `</div>`;
  });
  palList.innerHTML = html;
  palList.querySelectorAll(".pal-item").forEach(b => b.addEventListener("click", () => runItem(palVisible[+b.dataset.i])));
  const s = palList.querySelector(".sel"); if(s && s.scrollIntoView) s.scrollIntoView({ block:"nearest" });
}
function openPalette(){ openPalette._from = document.activeElement; overlay.classList.add("open"); overlay.setAttribute("aria-hidden","false"); document.querySelector("main").inert = true; document.querySelector("header").inert = true; document.querySelector("footer").inert = true; document.body.style.overflow="hidden"; palInput.value = ""; palSel = 0; renderPalette(); palInput.focus(); }
function closePalette(){
  if(!overlay.classList.contains("open")) return;
  overlay.classList.remove("open"); overlay.setAttribute("aria-hidden","true"); document.querySelectorAll("main,header,footer").forEach(el => el.inert=false); document.body.style.overflow="";
  const f = openPalette._from; if(f && f.focus && f !== document.body) f.focus({ preventScroll:true });
}
$("paletteBtn").addEventListener("click", openPalette);
overlay.addEventListener("click", e => { if(e.target === overlay) closePalette(); });
palInput.addEventListener("input", () => { palSel = 0; renderPalette(); });
addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"){ e.preventDefault(); overlay.classList.contains("open") ? closePalette() : openPalette(); return; }
  if(!overlay.classList.contains("open")){
    if(e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if(t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    const hit = ALL.find(it => it.key && it.key.toLowerCase() === e.key.toLowerCase());
    if(hit){ e.preventDefault(); hit.run(); }
    return;
  }
  if(e.key === "Escape") closePalette();
  if(e.key === "ArrowDown"){ e.preventDefault(); palSel = Math.min(palSel+1, palVisible.length-1); renderPalette(); }
  if(e.key === "ArrowUp"){ e.preventDefault(); palSel = Math.max(palSel-1, 0); renderPalette(); }
  if(e.key === "Enter"){ e.preventDefault(); if(palVisible[palSel]) runItem(palVisible[palSel]); }
});

// Keep keyboard navigation inside the open command dialog.
overlay.setAttribute("aria-hidden", "true");
overlay.addEventListener("keydown", e => {
  if(e.key !== "Tab") return;
  const controls = Array.from(overlay.querySelectorAll('input,button,a[href]')).filter(el => !el.disabled);
  const first=controls[0], last=controls[controls.length-1];
  if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
});
