"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight, ArrowRight, BracketsCurly, Browser, CalendarBlank,
  Buildings, ChartLineUp, CheckCircle, Cloud, Code, Database, DeviceMobile, Factory, Flask,
  GraduationCap, Heartbeat, Lightning, List, Moon, Robot, ShieldCheck, Storefront, Sun,
  UsersThree, Wrench, X,
} from "@phosphor-icons/react";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (name: string) => `${base}/assets/${name}`;

const ideas = [
  "I want an AI assistant that answers questions from our company documents.",
  "I want to automate a browser workflow my team repeats every morning.",
  "I have a product idea and need a working MVP.",
];

const architectures = [
  { icon: Database, label: "Documents", detail: "Source material" },
  { icon: BracketsCurly, label: "Embeddings", detail: "Meaning encoded" },
  { icon: Lightning, label: "Vector search", detail: "Relevant context" },
  { icon: Robot, label: "AI assistant", detail: "Useful answers" },
  { icon: Browser, label: "Web app", detail: "Simple interface" },
];

const services = [
  ["01", "AI & intelligence", "Turn information into answers and decisions with RAG, AI agents, LLM applications, computer vision and machine learning."],
  ["02", "Product engineering", "Launch a product people enjoy using, from SaaS and web applications to MVPs, dashboards and internal tools."],
  ["03", "Automation & integration", "Remove repetitive work by connecting workflows, browser automation, APIs and existing business systems."],
  ["04", "Experimental engineering", "Test ambitious ideas through research prototypes, extensions, distributed systems and unusual technical experiments."],
];

const outcomes = [
  ["Company knowledge is scattered across documents.", "AI knowledge assistant"],
  ["Customers wait too long for routine answers.", "Customer support AI"],
  ["Your team repeats the same browser task every day.", "Browser automation"],
  ["A new business idea needs a real first version.", "Startup MVP"],
  ["Operations live in spreadsheets and disconnected tools.", "Business dashboard"],
  ["Images or video need to be inspected at scale.", "Computer vision system"],
];

const strengths = [
  [Code, "Custom & scalable solutions", "Tailored to your goals, built to grow."],
  [Lightning, "User-friendly interface", "Beautiful, intuitive and easy to use."],
  [ShieldCheck, "High performance & security", "Reliable, secure and built for scale."],
  [UsersThree, "Agile development process", "Flexible, transparent and collaborative."],
  [Database, "Cost-effective development", "Maximize value and minimize time to market."],
  [Browser, "Cross-platform compatibility", "Web, mobile and cloud, all in sync."],
  [Robot, "Support & maintenance", "We are here when you need us."],
  [ChartLineUp, "Strategic technology partner", "More than a vendor, a long-term partner."],
];

const industries = [
  [Storefront, "Startups"], [UsersThree, "Small businesses"], [Flask, "Research teams"],
  [Browser, "Creators"], [Buildings, "Agencies"], [Lightning, "Internal teams"], [Robot, "Founders"],
];

const technologies = [
  ["Frontend", "React, Next.js, Angular and TypeScript", "Fast interfaces that work beautifully across devices."],
  ["Backend", "Node.js, Python, Java, PHP and Laravel", "Reliable application logic, APIs and business systems."],
  ["Data", "MongoDB and MySQL", "Structured foundations for products, reporting and intelligent search."],
  ["Cloud", "AWS, integrations and automation", "Connected systems that can grow with the business."],
];

const projects = [
  { no: "01", name: "VSFeed", type: "VS Code extension · Shipped", copy: "A context-aware social feed for idle moments in development, designed to reduce context switching and make returning to work easier.", href: "https://marketplace.visualstudio.com/items?itemName=PrathameshNikam.vsfeed", className: "project-vsfeed", proof: "Available on VS Marketplace" },
  { no: "02", name: "CanIPlay", type: "Network intelligence · Open source", copy: "A network feasibility and latency analysis tool that helps players understand whether an online game will work well on their connection.", href: "https://github.com/Prathmesh333/CanIPlay", className: "project-caniplay", proof: "Explore the repository" },
  { no: "03", name: "Distributed AI research", type: "Experimental engineering", copy: "Hands-on work across distributed machine learning, retrieval systems and AI infrastructure, translating research into working technical systems.", href: "https://github.com/Prathmesh333/ray", className: "project-research", proof: "View the research work" },
];

function Mark() {
  return <svg className="aira-mark" viewBox="0 0 44 44" aria-hidden="true"><path d="M7 35 20 7h6l12 28h-8l-2.7-6.5H17.8L15 35H7Zm13.5-13h4.2L22.6 16l-2.1 6Z" fill="currentColor"/><path d="M6 8h8v27H6z" fill="var(--blue)"/><circle cx="35" cy="9" r="3" fill="var(--blue)"/></svg>;
}

function Brand() { return <span className="aira-wordmark"><span>AI</span>RA</span>; }

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
    const saved = window.localStorage.getItem("aira-theme");
    const next = saved === "dark" || saved === "light" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(next);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    window.localStorage.setItem("aira-theme", next);
  }

  function build(e: FormEvent) {
    e.preventDefault();
    if (idea.trim()) setActiveIdea(idea.trim());
  }

  return <main data-theme={theme}>
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="AIRA home"><Mark /><Brand /></a>
      <nav className={menu ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        <a href="#services" onClick={() => setMenu(false)}>What we build</a><a href="#work" onClick={() => setMenu(false)}>Real work</a><a href="#capabilities" onClick={() => setMenu(false)}>Possibilities</a><a href="#process" onClick={() => setMenu(false)}>Process</a><a href="#about" onClick={() => setMenu(false)}>About</a>
      </nav>
      <div className="nav-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? <Moon weight="bold" /> : <Sun weight="bold" />}</button><a className="nav-cta" href="#contact">Tell us your idea <ArrowRight weight="bold" /></a></div>
      <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <List />}</button>
    </header>

    <section className="hero" id="top">
      <img className="hero-mountain" src={img(theme === "dark" ? "dark-alpine-hero.png" : "alpine-hero.png")} alt="Snow covered mountain peaks rising through cloud" />
      <motion.div className="orbit orbit-a" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      <div className="hero-copy">
        <p className="kicker">AIRA · Built for the AI era</p>
        <h1>You imagine it.<br /><em>We build it.</em></h1>
        <p className="hero-lede">AIRA is an AI-native product studio that turns ambitious ideas, repetitive workflows and business problems into software people can actually use.</p>
        <p className="hero-subline">AI products, software, automation and digital experiences built from idea to launch.</p>
        <div className="hero-actions"><a className="button primary" href="#contact">Tell us your idea <ArrowRight /></a><a className="text-link" href="#work">Explore our work <ArrowDownRight /></a></div>
        <p className="hero-note">No technical specification required. Bring us the idea.</p>
      </div>

      <div className="idea-machine" aria-label="Interactive idea builder">
        <div className="machine-heading"><span>Idea in</span><span>Architecture out</span></div>
        <form onSubmit={build}>
          <label htmlFor="idea">What do you want to build?</label>
          <div className="idea-input"><input id="idea" value={idea} onChange={(e) => setIdea(e.target.value)} /><button aria-label="Build architecture"><ArrowRight weight="bold" /></button></div>
        </form>
        <div className="architecture" key={activeIdea}>
          <div className="product-core"><Mark /><small>Your product</small></div>
          {architectures.map((item, index) => {
            const Icon = item.icon;
            return <motion.div className={`architecture-node node-${index + 1}`} key={item.label} initial={reduce ? false : { opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .08 * ((index + seed) % 6), type: "spring", stiffness: 160 }}><Icon weight="duotone" /><span><b>{item.label}</b><small>{item.detail}</small></span></motion.div>;
          })}
          <p className="idea-caption">Yep. We can build that.</p>
        </div>
      </div>
    </section>

    <section className="belief" id="about"><span>About AIRA</span><h2>Built for<br />the AI era.</h2><p>AIRA comes from a simple idea: we are entering an era where small teams can build things that previously required entire companies. We combine engineering, AI and rapid experimentation to turn ideas into useful products.</p></section>

    <section className="services" id="services">
      <Reveal className="section-intro"><p className="kicker">What we build</p><h2>Four capabilities.<br />One connected studio.</h2></Reveal>
      <div className="service-art"><img src={img(theme === "dark" ? "dark-orbit.png" : "alpine-orbit.png")} alt="Alpine peak framed by fine orbital lines" /></div>
      <div className="service-list">{services.map(([no, title, copy]) => <Reveal className="service-row" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p><ArrowDownRight /></Reveal>)}</div>
    </section>

    <section className="outcomes" id="capabilities">
      <Reveal className="outcome-intro"><p className="kicker">What could we build for you?</p><h2>Start with the problem, not a technical specification.</h2><p>Tell us what is slow, frustrating or still only an idea. We will translate it into the right product.</p></Reveal>
      <div className="outcome-list">{outcomes.map(([problem, answer], index) => <Reveal className="outcome-row" key={problem}><span>0{index + 1}</span><p>{problem}</p><ArrowRight /><strong>{answer}</strong></Reveal>)}</div>
    </section>

    <section className="work" id="work">
      <Reveal className="work-heading"><p className="kicker">What we have built</p><h2>Real work.<br /><em>Public proof.</em></h2><p>Shipped products, open-source tools and technical research you can inspect for yourself.</p></Reveal>
      <div className="project-stack">{projects.map((project, index) => <Reveal className={`project ${project.className}`} key={project.name}>
        <div className="project-signal" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="project-copy"><span>{project.no}</span><h3>{project.name}</h3><strong>{project.type}</strong><p>{project.copy}</p><a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.proof}: ${project.name}`}><ArrowUpRight /></a><small>{project.proof}</small></div>
      </Reveal>)}</div>
    </section>

    <section className="strengths">
      <Reveal className="strengths-heading"><p className="kicker">Why AIRA</p><h2>Small enough to move.<br /><em>Technical enough to deliver.</em></h2><p>We combine product judgment, careful interfaces and practical engineering to move from uncertainty to a useful first release.</p></Reveal>
      <div className="strength-list">{strengths.map(([Icon, title, copy]) => <Reveal className="strength" key={String(title)}><Icon weight="duotone" /><div><h3>{String(title)}</h3><p>{String(copy)}</p></div></Reveal>)}</div>
    </section>

    <section className="ecosystem" id="industries">
      <div className="industries"><p className="kicker">Who we build for</p><h3>Different teams. The same need to make progress.</h3><div>{industries.map(([Icon, label]) => <span key={String(label)}><Icon weight="duotone" />{String(label)}</span>)}</div></div>
      <div className="technology"><p className="kicker">Our technology stack</p><h3>Modern tools for modern solutions.</h3>{technologies.map(([category, stack, outcome]) => <details key={category}><summary><b>{category}</b><span>{stack}</span><ArrowDownRight /></summary><p>{outcome}</p></details>)}</div>
    </section>

    <section className="process" id="process">
      <Reveal className="process-heading"><p className="kicker">How we work</p><h2>A clear path through<br />uncertain territory.</h2></Reveal>
      <div className="process-line">{[
        ["01", "Discover", "We understand your goals, users and technical needs."], ["02", "Plan", "We define the solution, technology stack and roadmap."], ["03", "Build", "We design and develop with speed and quality."], ["04", "Launch", "We ship, iterate and help you scale."],
      ].map(([no, title, copy]) => <Reveal className="process-step" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </section>

    <section className="lab" id="lab">
      <div className="lab-visual"><img src={img(theme === "dark" ? "dark-vision.png" : "vision-system.png")} alt="A visual AI system observing a mountain landscape" /></div>
      <Reveal className="lab-copy"><p className="kicker">The Lab</p><h2>Where useful products often begin as strange ideas.</h2><p>We explore browser agents, visual AI, document intelligence, distributed machine learning and new ways for people to work with software.</p><div className="lab-topics"><span>RAG experiments</span><span>AI browser agents</span><span>Computer vision</span><span>Developer tools</span><span>Distributed ML</span></div><p className="lab-note">Got a weird idea? We like those.</p></Reveal>
    </section>

    <section className="manifesto">
      <img src={img(theme === "dark" ? "dark-silk.png" : "silk-surface.png")} alt="Flowing layers of light representing connected product systems" />
      <Reveal className="manifesto-copy"><p className="kicker">One connected product</p><h2>Strategy, interface and intelligence belong in the same room.</h2><p>We design the whole system together. The result feels simpler because the complexity has been considered, not hidden.</p></Reveal>
    </section>

    <section className="contact" id="contact">
      <img src={img(theme === "dark" ? "dark-panorama.png" : "alpine-panorama.png")} alt="A wide alpine range above the clouds" />
      <div className="contact-inner">
        <Reveal><p className="kicker">Tell us your idea</p><h2>Your idea is probably more buildable than you think.</h2><p>Bring us the rough version. We will help figure out the rest.</p><div className="direct-contact"><a href="mailto:Nexa.infotech@gmail.com"><span>Email</span><strong>Nexa.infotech@gmail.com</strong></a><a href="tel:+918978279915"><span>Phone</span><strong>+91 89782 79915</strong></a></div></Reveal>
        {submitted ? <div className="success"><CheckCircle weight="duotone" /><h3>Idea received.</h3><p>We will be in touch soon.</p></div> : <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <label><span>01&nbsp;&nbsp;Describe the idea</span><textarea required name="message" rows={3} placeholder="The rough version is enough." /></label>
          <fieldset><legend>02&nbsp;&nbsp;Where are you now?</legend><div className="choice-row"><label><input type="radio" name="stage" value="idea" defaultChecked /><span>Just an idea</span></label><label><input type="radio" name="stage" value="planning" /><span>Planning</span></label><label><input type="radio" name="stage" value="prototype" /><span>Prototype exists</span></label><label><input type="radio" name="stage" value="live" /><span>Product is live</span></label></div></fieldset>
          <fieldset><legend>03&nbsp;&nbsp;What help do you need?</legend><div className="choice-row"><label><input type="radio" name="help" value="everything" defaultChecked /><span>Build everything</span></label><label><input type="radio" name="help" value="ai" /><span>AI integration</span></label><label><input type="radio" name="help" value="automation" /><span>Automation</span></label><label><input type="radio" name="help" value="unsure" /><span>Not sure</span></label></div></fieldset>
          <div className="contact-details"><label><span>04&nbsp;&nbsp;Name</span><input required name="name" autoComplete="name" /></label><label><span>Email</span><input required type="email" name="email" autoComplete="email" /></label></div>
          <button className="button primary" type="submit">Tell us your idea <ArrowRight /></button>
        </form>}
      </div>
    </section>

    <footer><a className="brand footer-brand" href="#top"><Mark /><span><Brand /><small>AI &amp; Software Studio</small></span></a><p>Built for the AI era.</p><div><a href="#work">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></div></footer>
  </main>;
}

function ArrowUpRight() { return <ArrowDownRight style={{ transform: "rotate(180deg)" }} />; }
