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
  ["01", "AI applications", "Custom AI solutions powered by LLMs to automate, analyze and create real value."],
  ["02", "Web applications", "Modern, high-performance web apps tailored to your business goals."],
  ["03", "Automations", "Streamline operations with intelligent workflows and AI agents."],
  ["04", "Integrations & APIs", "Connect your tools and systems with robust integrations and custom APIs."],
  ["05", "MVP development", "Validate your idea quickly with a modern, scalable MVP."],
  ["06", "Internal tools", "Powerful internal systems that help your team move faster and operate smarter."],
];

const outcomes = [
  ["Your documents are impossible to search.", "AI knowledge assistant"],
  ["Your team repeats the same task every day.", "Workflow automation"],
  ["You have an idea but no development team.", "Startup MVP"],
  ["Your operations live in spreadsheets.", "Internal operations platform"],
  ["You inspect images or video manually.", "Computer vision system"],
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
  [Storefront, "Commerce"], [Heartbeat, "Healthcare tools"], [GraduationCap, "Education"],
  [Factory, "Manufacturing"], [Database, "Real estate"], [Lightning, "Logistics & banking"],
];

const technologies = [
  ["Frontend", "React, Next.js, Angular and TypeScript", "Fast interfaces that work beautifully across devices."],
  ["Backend", "Node.js, Python, Java, PHP and Laravel", "Reliable application logic, APIs and business systems."],
  ["Data", "MongoDB and MySQL", "Structured foundations for products, reporting and intelligent search."],
  ["Cloud", "AWS, integrations and automation", "Connected systems that can grow with the business."],
];

const deliveryCapabilities = [
  { icon: Code, title: "Custom software development", items: ["Web applications", "Mobile applications", "Enterprise solutions", "SaaS platforms"] },
  { icon: Cloud, title: "Cloud solutions", items: ["Cloud migration", "Cloud hosting", "DevOps and CI/CD", "Cloud security"] },
  { icon: Wrench, title: "IT consulting & support", items: ["System integration", "IT infrastructure", "Technical support", "Product modernization"] },
  { icon: DeviceMobile, title: "Web & mobile development", items: ["Custom web design", "Android and iOS apps", "UI/UX design", "Ongoing maintenance"] },
];

const projects = [
  { no: "01", name: "Modern E-Commerce", type: "E-commerce platform", copy: "A scalable online store with custom features, analytics and seamless integrations.", image: "silk-surface.png", darkImage: "dark-silk.png", className: "project-light" },
  { no: "02", name: "Healthcare Management", type: "Healthcare system", copy: "A complete patient management platform with scheduling, records and secure access.", image: "dashboard-device.png", darkImage: "dark-dashboard.png", className: "project-dark" },
  { no: "03", name: "Learning Management", type: "Education platform", copy: "A modern LMS with interactive courses, progress tracking and custom reporting.", image: "vision-system.png", darkImage: "dark-vision.png", className: "project-wide" },
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
        <a href="#services" onClick={() => setMenu(false)}>Services</a><a href="#work" onClick={() => setMenu(false)}>Our work</a><a href="#industries" onClick={() => setMenu(false)}>Industries</a><a href="#process" onClick={() => setMenu(false)}>Process</a><a href="#about" onClick={() => setMenu(false)}>About</a>
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
        <p className="hero-lede">NexaForge Labs is a software and AI product studio that turns ambitious ideas into real, scalable solutions, from AI applications and web platforms to internal tools, automations and custom software.</p>
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
      <Reveal className="section-intro"><p className="kicker">Our services</p><h2>End-to-end solutions<br />for a smarter tomorrow.</h2></Reveal>
      <div className="service-art"><img src={img(theme === "dark" ? "dark-orbit.png" : "alpine-orbit.png")} alt="Alpine peak framed by fine orbital lines" /></div>
      <div className="service-list">{services.map(([no, title, copy]) => <Reveal className="service-row" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p><ArrowDownRight /></Reveal>)}</div>
    </section>

    <section className="outcomes" id="capabilities">
      <Reveal className="outcome-intro"><p className="kicker">Start with the problem</p><h2>You do not need to know what technology you need.</h2><p>Tell us what is slow, frustrating or still only an idea. We will translate it into the right product.</p></Reveal>
      <div className="outcome-list">{outcomes.map(([problem, answer], index) => <Reveal className="outcome-row" key={problem}><span>0{index + 1}</span><p>{problem}</p><ArrowRight /><strong>{answer}</strong></Reveal>)}</div>
    </section>

    <section className="delivery-index">
      <Reveal className="delivery-heading"><p className="kicker">Software, web, mobile, cloud and consulting</p><h2>Everything needed to move from idea to a dependable product.</h2></Reveal>
      <div className="delivery-columns">{deliveryCapabilities.map(({ icon: Icon, title, items }, index) => <Reveal className="delivery-column" key={title}><span>0{index + 1}</span><Icon weight="duotone" /><h3>{title}</h3><ul>{items.map(item => <li key={item}><CheckCircle weight="fill" />{item}</li>)}</ul></Reveal>)}</div>
      <div className="solution-types"><span><Buildings />Business management software</span><span><Storefront />E-commerce platforms</span><span><Heartbeat />Healthcare solutions</span><span><GraduationCap />Education management</span><span><UsersThree />HR and payroll systems</span><span><DeviceMobile />Mobile app development</span></div>
    </section>

    <section className="work" id="work">
      <Reveal className="work-heading"><p className="kicker">Featured work</p><h2>Real solutions.<br /><em>Real impact.</em></h2><p>A selection of custom software solutions built for forward-thinking businesses.</p></Reveal>
      <div className="project-stack">{projects.map((project, index) => <Reveal className={`project ${project.className}`} key={project.name}>
        <img src={img(theme === "dark" ? project.darkImage : project.image)} alt="" />
        <div className="project-copy"><span>{project.no}</span><h3>{project.name}</h3><strong>{project.type}</strong><p>{project.copy}</p><a href="#contact" aria-label={`Discuss a project like ${project.name}`}><ArrowUpRight /></a></div>
      </Reveal>)}</div>
    </section>

    <section className="strengths">
      <Reveal className="strengths-heading"><p className="kicker">Why choose NexaForge</p><h2>Built for ambitious<br /><em>teams and real results.</em></h2><p>We combine deep technical expertise with a product-first mindset to turn your vision into scalable, high-impact solutions.</p></Reveal>
      <div className="strength-list">{strengths.map(([Icon, title, copy]) => <Reveal className="strength" key={String(title)}><Icon weight="duotone" /><div><h3>{String(title)}</h3><p>{String(copy)}</p></div></Reveal>)}</div>
    </section>

    <section className="ecosystem" id="industries">
      <div className="industries"><p className="kicker">Industries we serve</p><h3>Technology that empowers real-world industries.</h3><div>{industries.map(([Icon, label]) => <span key={String(label)}><Icon weight="duotone" />{String(label)}</span>)}</div></div>
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
      <img src={img(theme === "dark" ? "dark-system.png" : "system-map.png")} alt="A product system connected across AI, web, data and automation" />
      <Reveal className="manifesto-copy"><p className="kicker">One connected product</p><h2>Strategy, interface and intelligence belong in the same room.</h2><p>We design the whole system together. The result feels simpler because the complexity has been considered, not hidden.</p></Reveal>
    </section>

    <section className="contact" id="contact">
      <img src={img(theme === "dark" ? "dark-panorama.png" : "alpine-panorama.png")} alt="A wide alpine range above the clouds" />
      <div className="contact-inner">
        <Reveal><p className="kicker">Let’s build what’s next</p><h2>Let’s build<br /><em>what’s next.</em></h2><p>Bring us your idea. We will help you turn it into a real product with measurable impact.</p></Reveal>
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
