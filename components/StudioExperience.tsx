"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight, ArrowRight, BracketsCurly, Browser, CalendarBlank,
  ChartLineUp, CheckCircle, Cube, Database, Lightning, List, Robot, X,
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

const projects = [
  { no: "01", name: "Aurora", type: "AI knowledge assistant", copy: "A calm workspace that turns scattered company knowledge into useful, cited answers.", image: "silk-surface.png", className: "project-light" },
  { no: "02", name: "Foundry", type: "Product operations platform", copy: "A focused command centre for launching and operating a growing digital product.", image: "dashboard-device.png", className: "project-dark" },
  { no: "03", name: "VisionGrid", type: "Computer vision system", copy: "A visual intelligence layer for monitoring complex industrial environments in real time.", image: "vision-system.png", className: "project-wide" },
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
  const [idea, setIdea] = useState(ideas[0]);
  const [activeIdea, setActiveIdea] = useState(ideas[0]);
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();
  const seed = useMemo(() => activeIdea.length % 3, [activeIdea]);

  function build(e: FormEvent) {
    e.preventDefault();
    if (idea.trim()) setActiveIdea(idea.trim());
  }

  return <main>
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="NexaForge Labs home"><Mark /><span>NexaForge Labs</span></a>
      <nav className={menu ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        <a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#services" onClick={() => setMenu(false)}>What we do</a><a href="#process" onClick={() => setMenu(false)}>Process</a><a href="#about" onClick={() => setMenu(false)}>About</a>
      </nav>
      <a className="nav-cta" href="#contact">Start a project <ArrowRight weight="bold" /></a>
      <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <List />}</button>
    </header>

    <section className="hero" id="top">
      <img className="hero-mountain" src={img("alpine-hero.png")} alt="Snow covered mountain peaks rising through cloud" />
      <motion.div className="orbit orbit-a" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      <div className="hero-copy">
        <p className="kicker">AI-native product studio</p>
        <h1>You imagine it.<br /><em>We build it.</em></h1>
        <p className="hero-lede">We turn ambitious ideas into AI products, web applications and intelligent systems that feel inevitable.</p>
        <div className="hero-actions"><a className="button primary" href="#contact">Start a project <ArrowRight /></a><a className="text-link" href="#work">See our work <ArrowDownRight /></a></div>
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
      <div className="service-art"><img src={img("alpine-orbit.png")} alt="Alpine peak framed by fine orbital lines" /></div>
      <div className="service-list">{services.map(([no, title, copy]) => <Reveal className="service-row" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p><ArrowDownRight /></Reveal>)}</div>
    </section>

    <section className="work" id="work">
      <Reveal className="work-heading"><p className="kicker">Selected work</p><h2>Products with a<br /><em>point of view.</em></h2><p>Three examples of how a clear idea becomes a useful, coherent experience.</p></Reveal>
      <div className="project-stack">{projects.map((project, index) => <Reveal className={`project ${project.className}`} key={project.name}>
        <img src={img(project.image)} alt="" />
        <div className="project-copy"><span>{project.no}</span><h3>{project.name}</h3><strong>{project.type}</strong><p>{project.copy}</p><a href="#contact" aria-label={`Discuss a project like ${project.name}`}><ArrowUpRight /></a></div>
      </Reveal>)}</div>
    </section>

    <section className="process" id="process">
      <Reveal className="process-heading"><p className="kicker">How we work</p><h2>A clear path through<br />uncertain territory.</h2></Reveal>
      <div className="process-line">{[
        ["01", "Discover", "We find the real problem and define the outcome."], ["02", "Shape", "We map the experience, system and smallest useful release."], ["03", "Build", "We design and engineer in tight, visible cycles."], ["04", "Launch", "We ship, learn and strengthen what matters."],
      ].map(([no, title, copy]) => <Reveal className="process-step" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </section>

    <section className="manifesto">
      <img src={img("system-map.png")} alt="A product system connected across AI, web, data and automation" />
      <Reveal className="manifesto-copy"><p className="kicker">One connected product</p><h2>Strategy, interface and intelligence belong in the same room.</h2><p>We design the whole system together. The result feels simpler because the complexity has been considered, not hidden.</p></Reveal>
    </section>

    <section className="contact" id="contact">
      <img src={img("alpine-panorama.png")} alt="A wide alpine range above the clouds" />
      <div className="contact-inner">
        <Reveal><p className="kicker">Let’s build what’s next</p><h2>Bring us the idea<br /><em>you cannot ignore.</em></h2><p>Share the rough version. We will help shape the rest.</p></Reveal>
        {submitted ? <div className="success"><CheckCircle weight="duotone" /><h3>Idea received.</h3><p>We will be in touch soon.</p></div> : <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <label>Name<input required name="name" autoComplete="name" /></label>
          <label>Email<input required type="email" name="email" autoComplete="email" /></label>
          <label>What are you imagining?<textarea required name="message" rows={3} /></label>
          <button className="button primary" type="submit">Send the idea <ArrowRight /></button>
        </form>}
      </div>
    </section>

    <footer><a className="brand" href="#top"><Mark /><span>NexaForge Labs</span></a><p>Building a more capable tomorrow.</p><div><a href="#work">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></div></footer>
  </main>;
}

function ArrowUpRight() { return <ArrowDownRight style={{ transform: "rotate(180deg)" }} />; }
