"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight, ArrowRight, BracketsCurly, Browser, CalendarBlank,
  ChartLineUp, CheckCircle, Code, Database, Factory, Flask, GraduationCap, Heartbeat,
  Lightning, List, Moon, Robot, ShieldCheck, Storefront, Sun, UsersThree, X,
} from "@phosphor-icons/react";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (name: string) => `${base}/assets/${name}`;

const ideas = [
  "A support copilot that learns from every resolved ticket",
  "A marketplace that matches climate founders with specialist talent",
  "A computer vision system for safer industrial sites",
];

const architectures = [
  { icon: Robot, label: "AI agent", detail: "Reasoning layer" },
  { icon: Browser, label: "Web product", detail: "Customer interface" },
  { icon: Lightning, label: "Automation", detail: "Workflow engine" },
  { icon: Database, label: "Knowledge", detail: "Data and retrieval" },
  { icon: BracketsCurly, label: "Integrations", detail: "APIs and tools" },
  { icon: ChartLineUp, label: "Insights", detail: "Signals and outcomes" },
];

const services = [
  ["01", "AI products", "Useful AI experiences with clear roles for models, people and data."],
  ["02", "Web applications", "Fast, expressive products engineered for real users and real scale."],
  ["03", "Internal systems", "Purpose-built software that removes friction from the way your team works."],
  ["04", "Automation", "Reliable workflows that connect tools, decisions and human review."],
];

const outcomes = [
  ["Your documents are impossible to search.", "AI knowledge assistant"],
  ["Your team repeats the same task every day.", "Workflow automation"],
  ["You have an idea but no development team.", "Startup MVP"],
  ["Your operations live in spreadsheets.", "Internal operations platform"],
  ["You inspect images or video manually.", "Computer vision system"],
];

const strengths = [
  [ShieldCheck, "Built for the real world", "Secure foundations, clear failure states and systems your team can operate."],
  [UsersThree, "A product partner", "We challenge assumptions, explain tradeoffs and stay close to the business problem."],
  [Lightning, "Fast without the mess", "Small releases, visible progress and an architecture that can grow after launch."],
  [Code, "One connected team", "Product, interface, AI and backend decisions happen together."],
];

const industries = [
  [Storefront, "Commerce"], [Heartbeat, "Healthcare tools"], [GraduationCap, "Education"],
  [Factory, "Operations"], [Code, "Developer tools"], [Flask, "Research"],
];

const technologies = [
  ["AI", "Python, LLMs, RAG and computer vision", "Products that understand text, images and business context."],
  ["Web", "React, Next.js and TypeScript", "Fast interfaces that work beautifully across devices."],
  ["Systems", "APIs, databases and cloud infrastructure", "Reliable foundations that connect your product and tools."],
  ["Automation", "Agents, workflows and integrations", "Less repetitive work and fewer disconnected systems."],
];

const projects = [
  { no: "01", name: "Aurora", type: "AI knowledge assistant", copy: "A calm workspace that turns scattered company knowledge into useful, cited answers.", image: "silk-surface.png", darkImage: "dark-silk.png", className: "project-light" },
  { no: "02", name: "Foundry", type: "Product operations platform", copy: "A focused command centre for launching and operating a growing digital product.", image: "dashboard-device.png", darkImage: "dark-dashboard.png", className: "project-dark" },
  { no: "03", name: "VisionGrid", type: "Computer vision system", copy: "A visual intelligence layer for monitoring complex industrial environments in real time.", image: "vision-system.png", darkImage: "dark-vision.png", className: "project-wide" },
];

function Mark() {
  return <span className="mark" aria-hidden="true"><i /><i /><i /></span>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .7, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export default function StudioExperience() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [idea, setIdea] = useState(ideas[0]);
  const [activeIdea, setActiveIdea] = useState(ideas[0]);
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();
  const seed = useMemo(() => activeIdea.length % 3, [activeIdea]);

  useEffect(() => {
    const saved = window.localStorage.getItem("nexaforge-theme");
    const next = saved === "dark" || saved === "light" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(next);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    window.localStorage.setItem("nexaforge-theme", next);
  }

  function build(e: FormEvent) {
    e.preventDefault();
    if (idea.trim()) setActiveIdea(idea.trim());
  }

  return <main data-theme={theme}>
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="NexaForge Labs home"><Mark /><span>NexaForge Labs</span></a>
      <nav className={menu ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        <a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#services" onClick={() => setMenu(false)}>Services</a><a href="#capabilities" onClick={() => setMenu(false)}>Capabilities</a><a href="#process" onClick={() => setMenu(false)}>Process</a><a href="#lab" onClick={() => setMenu(false)}>Lab</a>
      </nav>
      <div className="nav-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? <Moon weight="bold" /> : <Sun weight="bold" />}</button><a className="nav-cta" href="#contact">Start a project <ArrowRight weight="bold" /></a></div>
      <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <List />}</button>
    </header>

    <section className="hero" id="top">
      <img className="hero-mountain" src={img(theme === "dark" ? "dark-alpine-hero.png" : "alpine-hero.png")} alt="Snow covered mountain peaks rising through cloud" />
      <motion.div className="orbit orbit-a" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      <div className="hero-copy">
        <p className="kicker">AI-native product studio</p>
        <h1>You imagine it.<br /><em>We build it.</em></h1>
        <p className="hero-lede">We turn ambitious ideas into AI products, web applications and intelligent systems that feel inevitable.</p>
        <div className="hero-actions"><a className="button primary" href="#contact">Start a project <ArrowRight /></a><a className="text-link" href="#work">Explore our work <ArrowDownRight /></a></div>
        <p className="hero-note">No technical specification required.</p>
      </div>

      <div className="idea-machine" aria-label="Interactive idea builder">
        <div className="machine-heading"><span>Idea in</span><span>Architecture out</span></div>
        <form onSubmit={build}>
          <label htmlFor="idea">Describe what you want to make</label>
          <div className="idea-input"><input id="idea" value={idea} onChange={(e) => setIdea(e.target.value)} /><button aria-label="Build architecture"><ArrowRight weight="bold" /></button></div>
        </form>
        <div className="architecture" key={activeIdea}>
          <div className="product-core"><Mark /><small>Your product</small></div>
          {architectures.map((item, index) => {
            const Icon = item.icon;
            return <motion.div className={`architecture-node node-${index + 1}`} key={item.label} initial={reduce ? false : { opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .08 * ((index + seed) % 6), type: "spring", stiffness: 160 }}><Icon weight="duotone" /><span><b>{item.label}</b><small>{item.detail}</small></span></motion.div>;
          })}
          <p className="idea-caption">A first shape for “{activeIdea}”</p>
        </div>
      </div>
    </section>

    <section className="belief" id="about"><span>Our belief</span><h2>Technology should amplify<br />human potential.</h2><p>We pair product thinking with careful engineering to turn bold ideas into capable tools for real people.</p></section>

    <section className="services" id="services">
      <Reveal className="section-intro"><p className="kicker">What we do</p><h2>From first thought<br />to working system.</h2></Reveal>
      <div className="service-art"><img src={img(theme === "dark" ? "dark-orbit.png" : "alpine-orbit.png")} alt="Alpine peak framed by fine orbital lines" /></div>
      <div className="service-list">{services.map(([no, title, copy]) => <Reveal className="service-row" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p><ArrowDownRight /></Reveal>)}</div>
    </section>

    <section className="outcomes" id="capabilities">
      <Reveal className="outcome-intro"><p className="kicker">Start with the problem</p><h2>You do not need to know what technology you need.</h2><p>Tell us what is slow, frustrating or still only an idea. We will translate it into the right product.</p></Reveal>
      <div className="outcome-list">{outcomes.map(([problem, answer], index) => <Reveal className="outcome-row" key={problem}><span>0{index + 1}</span><p>{problem}</p><ArrowRight /><strong>{answer}</strong></Reveal>)}</div>
    </section>

    <section className="work" id="work">
      <Reveal className="work-heading"><p className="kicker">Selected work</p><h2>Products with a<br /><em>point of view.</em></h2><p>Three examples of how a clear idea becomes a useful, coherent experience.</p></Reveal>
      <div className="project-stack">{projects.map((project, index) => <Reveal className={`project ${project.className}`} key={project.name}>
        <img src={img(theme === "dark" ? project.darkImage : project.image)} alt="" />
        <div className="project-copy"><span>{project.no}</span><h3>{project.name}</h3><strong>{project.type}</strong><p>{project.copy}</p><a href="#contact" aria-label={`Discuss a project like ${project.name}`}><ArrowUpRight /></a></div>
      </Reveal>)}</div>
    </section>

    <section className="strengths">
      <Reveal className="strengths-heading"><p className="kicker">Why NexaForge</p><h2>Serious engineering.<br /><em>Plain-language partnership.</em></h2><p>Bring the problem. We will figure out the stack.</p></Reveal>
      <div className="strength-list">{strengths.map(([Icon, title, copy]) => <Reveal className="strength" key={String(title)}><Icon weight="duotone" /><div><h3>{String(title)}</h3><p>{String(copy)}</p></div></Reveal>)}</div>
    </section>

    <section className="ecosystem">
      <div className="industries"><p className="kicker">Problems we can solve across</p><div>{industries.map(([Icon, label]) => <span key={String(label)}><Icon weight="duotone" />{String(label)}</span>)}</div></div>
      <div className="technology"><p className="kicker">Technology as supporting proof</p>{technologies.map(([category, stack, outcome]) => <details key={category}><summary><b>{category}</b><span>{stack}</span><ArrowDownRight /></summary><p>{outcome}</p></details>)}</div>
    </section>

    <section className="process" id="process">
      <Reveal className="process-heading"><p className="kicker">How we work</p><h2>A clear path through<br />uncertain territory.</h2></Reveal>
      <div className="process-line">{[
        ["01", "Tell us the problem", "The rough version is enough."], ["02", "Shape", "We decide what should exist and why."], ["03", "Prototype", "We test the riskiest ideas early."], ["04", "Build", "We design and engineer in visible cycles."], ["05", "Launch", "We put the product in real hands."], ["06", "Improve", "We learn from use and strengthen what matters."],
      ].map(([no, title, copy]) => <Reveal className="process-step" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </section>

    <section className="lab" id="lab">
      <div className="lab-visual"><img src={img(theme === "dark" ? "dark-vision.png" : "vision-system.png")} alt="A visual AI system observing a mountain landscape" /></div>
      <Reveal className="lab-copy"><p className="kicker">The Lab</p><h2>Where useful products often begin as strange ideas.</h2><p>We explore browser agents, visual AI, document intelligence, distributed machine learning and new ways for people to work with software.</p><div className="lab-topics"><span>RAG experiments</span><span>AI browser agents</span><span>Computer vision</span><span>Developer tools</span><span>Distributed ML</span></div><p className="lab-note">Got a weird idea? We like those.</p></Reveal>
    </section>

    <section className="manifesto">
      <img src={img(theme === "dark" ? "dark-system.png" : "system-map.png")} alt="A product system connected across AI, web, data and automation" />
      <Reveal className="manifesto-copy"><p className="kicker">One connected product</p><h2>Strategy, interface and intelligence belong in the same room.</h2><p>We design the whole system together. The result feels simpler because the complexity has been considered, not hidden.</p></Reveal>
    </section>

    <section className="contact" id="contact">
      <img src={img(theme === "dark" ? "dark-panorama.png" : "alpine-panorama.png")} alt="A wide alpine range above the clouds" />
      <div className="contact-inner">
        <Reveal><p className="kicker">Let’s build what’s next</p><h2>Bring us the idea<br /><em>you cannot ignore.</em></h2><p>Share the rough version. We will help shape the rest.</p></Reveal>
        {submitted ? <div className="success"><CheckCircle weight="duotone" /><h3>Idea received.</h3><p>We will be in touch soon.</p></div> : <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <label><span>01&nbsp;&nbsp;Describe the idea</span><textarea required name="message" rows={3} placeholder="The rough version is enough." /></label>
          <fieldset><legend>02&nbsp;&nbsp;Where are you now?</legend><div className="choice-row"><label><input type="radio" name="stage" value="idea" defaultChecked /><span>Just an idea</span></label><label><input type="radio" name="stage" value="planning" /><span>Planning</span></label><label><input type="radio" name="stage" value="prototype" /><span>Prototype exists</span></label><label><input type="radio" name="stage" value="live" /><span>Product is live</span></label></div></fieldset>
          <fieldset><legend>03&nbsp;&nbsp;What help do you need?</legend><div className="choice-row"><label><input type="radio" name="help" value="everything" defaultChecked /><span>Build everything</span></label><label><input type="radio" name="help" value="ai" /><span>AI integration</span></label><label><input type="radio" name="help" value="automation" /><span>Automation</span></label><label><input type="radio" name="help" value="unsure" /><span>Not sure</span></label></div></fieldset>
          <div className="contact-details"><label><span>04&nbsp;&nbsp;Name</span><input required name="name" autoComplete="name" /></label><label><span>Email</span><input required type="email" name="email" autoComplete="email" /></label></div>
          <button className="button primary" type="submit">Send the idea <ArrowRight /></button>
        </form>}
      </div>
    </section>

    <footer><a className="brand" href="#top"><Mark /><span>NexaForge Labs</span></a><p>Building a more capable tomorrow.</p><div><a href="#work">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></div></footer>
  </main>;
}

function ArrowUpRight() { return <ArrowDownRight style={{ transform: "rotate(180deg)" }} />; }
