import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDownRight, ArrowRight, Box, Check, ChevronRight, CircleDot,
  Cpu, Crosshair, Globe2, Layers3, Menu, Play, Send, Shapes, Sparkles, Target, X,
} from "lucide-react";
import heroArt from "../assets/skydiver-hero.jpg";
import weaponAk from "../assets/weapon-ak.jpg.asset.json";
import characterArt from "../assets/skydiver-character.jpg";
import neonCityArt from "../assets/neon-city.jpg.asset.json";
import vehicleTactical from "../assets/vehicle-tactical.jpg.asset.json";
import logoAsset from "../assets/logo-skydiver.jpg.asset.json";
import batmanArt from "../assets/batman-character.webp.asset.json";
import unrealTemple from "../assets/unreal-temple.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Skydiver Academy | Game Art & Development Training in Africa" },
    { name: "description", content: "Industry-led Game Art, 3D, animation and game development workshops connecting African talent with global production standards." },
    { property: "og:title", content: "Skydiver Academy | Building Africa's Next Game Creators" },
    { property: "og:description", content: "Production-focused training for students, institutions and professional game studios." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const disciplines = [
  ["Character Art", "High-poly sculpting, anatomy, retopology, clothing, hair, texturing and optimization.", characterArt, "01"],
  ["Environment Art", "Modular environments, props, materials, composition, lighting and optimization.", neonCityArt.url, "02"],
  ["Weapons & Hard Surface", "Production-ready weapons, hard-surface modelling, topology and PBR workflows.", weaponAk.url, "03"],
  ["Vehicles & Props", "Designing and producing detailed assets for real-time environments.", vehicleTactical.url, "04"],
  ["Animation & Cinematics", "Rigging, animation, cinematics and storytelling for games and digital productions.", unrealTemple.url, "05"],
  ["Game Engine & Technical Skills", "Unreal Engine, Unity, materials, shaders, optimization and real-time implementation.", neonCityArt.url, "06"],
];

const audiences = [
  { eyebrow: "For students", title: "Build Industry-Ready Skills", text: "Develop practical skills, build a professional portfolio and understand how modern game production works.", items: ["Professional software", "Production workflows", "Portfolio projects", "Industry mentorship", "Career preparation"], cta: "Explore programs", href: "#contact" },
  { eyebrow: "For institutions", title: "Bring Industry Expertise to Your Students", text: "Partner with Skydiver Academy for professional workshops, masterclasses and specialized training.", items: ["Workshops", "Masterclasses", "Short intensive programs", "Specialized training", "Industry-oriented curricula"], cta: "Request a workshop", href: "#contact" },
  { eyebrow: "For game studios", title: "Upskill Your Team", text: "Customized training designed around your studio's production requirements and the skill gaps of your artists.", items: ["Character & environment production", "Hard surface & PBR workflows", "Unreal Engine & optimization", "Production pipelines", "Quality reviews"], cta: "Discuss studio training", href: "#contact" },
];

const process = [
  ["01", "Identify", "We understand your students, artists or production objectives."],
  ["02", "Design", "We build a training program around those specific needs."],
  ["03", "Deliver", "Industry professionals deliver workshops, masterclasses or intensive training."],
  ["04", "Measure", "Projects, reviews and assessments help track progress and development."],
];

const portfolio = [
  ["Character Art", characterArt, "md:col-span-5 md:row-span-2"],
  ["Weapons", weaponAk.url, "md:col-span-7"],
  ["Environment Art", neonCityArt.url, "md:col-span-4"],
  ["Vehicles & Props", vehicleTactical.url, "md:col-span-3"],
  ["Unreal Engine", unrealTemple.url, "md:col-span-7"],
  ["Cinematics", neonCityArt.url, "md:col-span-5"],
];

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <div className="mb-12 max-w-4xl md:mb-16">
    <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-8 bg-primary" />{kicker}</p>
    <h2 className="display-title text-5xl text-foreground sm:text-6xl md:text-7xl lg:text-8xl">{title}</h2>
    {copy && <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>}
  </div>;
}

function ActionLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  const external = href.startsWith("http");
  return <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-6 py-3 text-xs font-extrabold uppercase transition duration-300 ${secondary ? "border-border bg-background/20 text-foreground hover:border-energy hover:text-energy" : "energy-glow border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground"}`}>
    {children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
  </a>;
}

function Logo() {
  return <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Skydiver Academy home">
    <img src={logoAsset.url} alt="Skydiver Academy logo" width={36} height={36} className="energy-glow h-9 w-9 rounded-[6px] object-cover" />
    <span className="font-display text-lg font-bold uppercase leading-none">Skydiver<span className="block text-[10px] text-primary">Academy</span></span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Programs", "#programs"], ["Institutions", "#audiences"], ["Studios", "#audiences"], ["Workshops", "#workshop"], ["About", "#founder"]];
  return <header className="absolute inset-x-0 top-0 z-50 border-b border-foreground/10 bg-ink/30 backdrop-blur-sm">
    <div className="container-studio grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
      <Logo />
      <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} className="text-[11px] font-bold uppercase text-foreground/70 transition hover:text-primary">{label}</a>)}
      </nav>
      <a href="#contact" className="hidden border border-primary px-5 py-3 text-[11px] font-bold uppercase text-primary transition hover:bg-primary hover:text-primary-foreground lg:inline-flex">Request a workshop</a>
      <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center border border-border text-foreground md:hidden" aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-border bg-ink px-4 py-6 md:hidden" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={label} onClick={() => setOpen(false)} href={href} className="block border-b border-border py-4 font-display text-2xl uppercase">{label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-5 flex bg-primary px-5 py-4 text-xs font-bold uppercase text-primary-foreground">Request a workshop</a></nav>}
  </header>;
}

function Hero() {
  return <section id="top" className="relative flex min-h-[920px] items-end overflow-hidden bg-ink md:min-h-[900px]">
    <img src={batmanArt.url} alt="Batman character turnaround — professional 3D character artwork by Patrick Benai" width={1920} height={1080} className="hero-art vibranium-grade absolute inset-0 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
    <div className="scan-line absolute inset-x-0 top-0 z-10 h-px bg-energy/70" />
    <div className="container-studio relative z-20 pb-16 pt-36 md:pb-20">
      <div className="max-w-4xl">
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-energy"><CircleDot className="h-4 w-4" />Industry-led production training</p>
        <h1 className="display-title text-[4.2rem] text-foreground sm:text-7xl md:text-8xl lg:text-[7.8rem]">Building Africa's Next Generation of <span className="text-primary">Game & Digital Artists</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/75 md:text-lg">Industry-led training in Game Art, 3D, Animation and Game Development, designed to connect African talent with the standards of the global digital entertainment industry.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ActionLink href="#contact">Request a workshop</ActionLink><ActionLink href="#partnerships" secondary>Partner with us</ActionLink></div>
      </div>
      <div className="mt-14 grid max-w-3xl grid-cols-2 border-y border-foreground/15 sm:grid-cols-4">
        {["Game Art", "3D Production", "Animation", "Game Development"].map((item) => <span key={item} className="border-foreground/15 py-4 text-[10px] font-bold uppercase text-foreground/60 sm:border-r sm:px-4">{item}</span>)}
      </div>
    </div>
    <a href="#experience" className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 text-[10px] font-bold uppercase text-foreground/60 lg:flex">Explore <ArrowDownRight className="h-5 w-5 text-primary" /></a>
  </section>;
}

function Experience() {
  const stats = [["10+ Years", "Professional Industry Experience"], ["AAA Production", "Game & Cinematic Projects"], ["3D Specialist", "Characters • Weapons • Hard Surface"], ["Production Pipelines", "High Poly to Game Engine"], ["Unreal Engine", "Real-Time Production"]];
  return <section id="experience" className="section-space border-b border-border bg-panel">
    <div className="container-studio">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
        <div><SectionHeading kicker="Professional foundation" title="Industry Experience. Professional Training." /><p className="max-w-xl text-lg leading-8 text-muted-foreground">With more than 10 years of experience across game and cinematic production, Patrick brings professional production knowledge directly into the classroom and studio environment.</p><div className="mt-8"><ActionLink href="https://www.artstation.com/patrickbenai" secondary>View portfolio</ActionLink></div></div>
        <div className="border-t border-border">{stats.map(([value, label], index) => <div key={value} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-border py-6 sm:grid-cols-[3rem_1fr_1fr]"><span className="text-xs text-primary">0{index + 1}</span><strong className="font-display text-2xl uppercase text-foreground">{value}</strong><span className="col-start-2 text-sm text-muted-foreground sm:col-start-auto">{label}</span></div>)}</div>
      </div>
    </div>
  </section>;
}

function Programs() {
  return <section id="programs" className="section-space bg-background"><div className="container-studio"><SectionHeading kicker="Disciplines" title="From 3D Art to Game Production" copy="Learn the skills, workflows and tools used to create production-ready digital content for modern games and interactive experiences." />
    <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{disciplines.map(([title, text, image, number]) => <article key={title} className="group relative min-h-[460px] overflow-hidden bg-card"><img src={image} alt="" width={1536} height={1024} loading="lazy" className="vibranium-grade absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" /><span className="absolute left-6 top-6 text-xs font-bold text-energy">{number}</span><div className="absolute inset-x-0 bottom-0 p-7"><h3 className="display-title text-3xl text-foreground">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-foreground/65">{text}</p></div></article>)}</div>
  </div></section>;
}

function Audiences() {
  return <section id="audiences" className="section-space border-y border-border bg-panel"><div className="container-studio"><SectionHeading kicker="Built for your goals" title="Training Built Around Your Needs" />
    <div className="grid gap-px bg-border lg:grid-cols-3">{audiences.map((audience, index) => <article key={audience.eyebrow} className="flex min-h-[540px] flex-col bg-background p-7 md:p-9"><div className="mb-10 flex items-center justify-between"><span className="text-xs font-bold uppercase text-primary">{audience.eyebrow}</span><span className="font-display text-5xl text-border">0{index + 1}</span></div><h3 className="display-title text-4xl text-foreground">{audience.title}</h3><p className="mt-5 text-sm leading-6 text-muted-foreground">{audience.text}</p><ul className="mt-8 space-y-3">{audience.items.map((item) => <li key={item} className="flex gap-3 text-sm text-foreground/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul><div className="mt-auto pt-8"><ActionLink href={audience.href} secondary>{audience.cta}</ActionLink></div></article>)}</div>
  </div></section>;
}

function Process() {
  return <section className="section-space grid-lines bg-background"><div className="container-studio"><SectionHeading kicker="Our approach" title="From Need to Production" /><div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text]) => <div key={title} className="min-h-72 border-b border-r border-border bg-background/90 p-7"><span className="font-display text-6xl text-energy">{number}</span><h3 className="mt-10 font-display text-2xl font-bold uppercase">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>;
}

function Workshop() {
  const topics = ["Game Development Pipeline", "Character Art", "Environment Art", "Weapons & Hard Surface", "Texturing & PBR", "Unreal Engine", "Careers in the Global Game Industry"];
  return <section id="workshop" className="relative overflow-hidden border-y border-border bg-panel"><div className="grid min-h-[760px] lg:grid-cols-2"><div className="relative min-h-[430px] lg:order-2 lg:min-h-full"><img src={weaponAk.url} alt="AAA weapons and hard-surface asset production showcase" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent lg:bg-gradient-to-r lg:from-panel lg:to-transparent" /><span className="absolute right-5 top-5 border border-foreground/25 bg-ink/60 px-3 py-2 text-[10px] font-bold uppercase backdrop-blur">Featured workshop</span></div><div className="container-studio py-16 lg:col-span-2 lg:row-start-1 lg:grid lg:grid-cols-2 lg:py-24"><div className="relative z-10 lg:pr-16"><p className="mb-5 text-xs font-bold uppercase text-primary">Flagship masterclass</p><h2 className="display-title text-5xl sm:text-6xl md:text-7xl">Introduction to the Video Game Industry & AAA Game Art</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">Discover how professional video games are created, from concept and 3D production to the final game engine.</p><div className="mt-8 flex flex-wrap gap-2">{topics.map((topic) => <span key={topic} className="border border-border px-3 py-2 text-[10px] font-bold uppercase text-foreground/70">{topic}</span>)}</div><div className="my-8 grid grid-cols-1 gap-4 border-y border-border py-5 text-xs font-bold uppercase sm:grid-cols-3"><span>2–3 Hours</span><span>Masterclass / Workshop</span><span>Douala • Yaoundé • Online</span></div><ActionLink href="#contact">Request this workshop</ActionLink></div></div></div></section>;
}

function Portfolio() {
  return <section id="portfolio" className="section-space bg-background"><div className="container-studio"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading kicker="Selected disciplines" title="Created for the Real World" copy="Explore professional 3D work and production experience behind Skydiver Academy." /><div className="mb-12 md:mb-16"><ActionLink href="https://www.artstation.com/patrickbenai" secondary>View full portfolio</ActionLink></div></div><div className="grid auto-rows-[280px] gap-2 md:grid-cols-12">{portfolio.map(([label, image, span]) => <figure key={label} className={`image-shade group relative bg-card ${span}`}><img src={image} alt={`${label} portfolio artwork`} width={1536} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><figcaption className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between p-5 font-display text-xl font-bold uppercase"><span>{label}</span><ArrowDownRight className="h-5 w-5 text-primary" /></figcaption></figure>)}</div></div></section>;
}

function Why() {
  const reasons = [
    { icon: <Crosshair className="h-7 w-7 text-primary" />, title: "Industry-Led", text: "Training is built around real production experience rather than purely theoretical education." },
    { icon: <Layers3 className="h-7 w-7 text-primary" />, title: "Production-Focused", text: "Students learn practical workflows used to create digital content for games and cinematic productions." },
    { icon: <Globe2 className="h-7 w-7 text-primary" />, title: "International Perspective", text: "Training introduces African talent to international production standards and global career opportunities." },
    { icon: <Sparkles className="h-7 w-7 text-primary" />, title: "African Talent", text: "Our goal is to help talented African creators participate in the global digital entertainment industry." },
  ];
  return <section className="section-space border-y border-border bg-panel"><div className="container-studio"><SectionHeading kicker="The difference" title="Why Skydiver Academy?" /><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{reasons.map((reason) => <div key={reason.title} className="border-t border-primary pt-7">{reason.icon}<h3 className="mt-8 font-display text-2xl font-bold uppercase">{reason.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{reason.text}</p></div>)}</div></div></section>;
}

function Founder() {
  return <section id="founder" className="section-space bg-background"><div className="container-studio grid items-center gap-14 lg:grid-cols-2"><div className="relative min-h-[560px] overflow-hidden"><img src={characterArt} alt="Professional character artwork representing the founder's 3D specialism" width={1536} height={1536} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-7 pt-28"><span className="text-xs font-bold uppercase text-primary">Portrait placeholder • replaceable</span></div></div><div><SectionHeading kicker="Industry leadership" title="Meet the Founder" /><p className="font-display text-3xl font-bold uppercase">Patrick Benai</p><p className="mt-1 text-sm font-bold uppercase text-primary">Senior 3D Character & Weapons Artist</p><p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">Patrick is a 3D artist with more than 10 years of professional experience across international game and cinematic production. His practice spans character art, weapons, hard-surface modelling, texturing and real-time production.</p><p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">Through Skydiver Academy, he translates the standards, discipline and workflows of professional production into practical learning experiences for Africa's next generation of creators.</p><div className="mt-9"><ActionLink href="https://www.artstation.com/patrickbenai" secondary>View portfolio</ActionLink></div></div></div></section>;
}

function Partnerships() {
  const cards = [["Universities & Schools", "Bring a professional Game Art workshop to your students.", "Request a workshop"], ["Game Studios", "Develop the skills of your existing production team.", "Discuss training"], ["Organizations & Partners", "Explore partnerships supporting African digital talent.", "Become a partner"]];
  return <section id="partnerships" className="section-space relative overflow-hidden bg-primary text-primary-foreground"><div className="absolute inset-0 grid-lines opacity-25" /><div className="absolute inset-x-0 top-0 h-px bg-energy" /><div className="container-studio relative"><p className="mb-5 text-xs font-extrabold uppercase text-energy">Partnerships</p><h2 className="display-title max-w-5xl text-6xl sm:text-7xl md:text-8xl lg:text-9xl">Let's Build the Future of Game Development in Africa</h2><p className="mt-7 max-w-3xl text-base leading-7 opacity-75 md:text-lg">Whether you are a student, university, technical institution, training organization or game studio, Skydiver Academy can bring professional game-industry knowledge and training to your community or team.</p><div className="mt-12 grid gap-px bg-primary-foreground/25 lg:grid-cols-3">{cards.map(([title, text, cta]) => <article key={title} className="flex min-h-72 flex-col bg-primary p-7"><h3 className="font-display text-3xl font-bold uppercase">{title}</h3><p className="mt-4 text-sm leading-6 opacity-70">{text}</p><a href="#contact" className="mt-auto flex items-center justify-between border-t border-primary-foreground/30 pt-5 text-xs font-extrabold uppercase transition hover:text-energy">{cta}<ChevronRight className="h-4 w-4" /></a></article>)}</div></div></section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <section id="contact" className="section-space bg-ink"><div className="container-studio grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionHeading kicker="Contact" title="Start a Conversation" /><p className="max-w-md text-base leading-7 text-muted-foreground">Interested in a workshop, professional training program or partnership? Get in touch with Skydiver Academy.</p><div className="mt-10 border-t border-border pt-7"><p className="text-xs font-bold uppercase text-primary">Connect</p><div className="mt-4 flex gap-5 text-sm text-foreground/70"><a href="https://www.artstation.com/patrickbenai" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Portfolio</a><a href="#contact" className="hover:text-primary">LinkedIn</a><a href="#contact" className="hover:text-primary">Instagram</a></div></div></div>
    <form onSubmit={submit} className="grid gap-5 border border-border bg-panel p-6 md:grid-cols-2 md:p-9"><label className="text-xs font-bold uppercase text-foreground/70">Name<input required name="name" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><label className="text-xs font-bold uppercase text-foreground/70">Organization<input name="organization" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><label className="text-xs font-bold uppercase text-foreground/70">Email<input required type="email" name="email" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><label className="text-xs font-bold uppercase text-foreground/70">Phone / WhatsApp<input type="tel" name="phone" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><label className="text-xs font-bold uppercase text-foreground/70 md:col-span-2">I am interested in<select name="interest" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary"><option>Workshop</option><option>Student Program</option><option>Institutional Partnership</option><option>Studio Training</option><option>Other</option></select></label><label className="text-xs font-bold uppercase text-foreground/70 md:col-span-2">Message<textarea required name="message" rows={5} className="mt-2 w-full resize-none border border-input bg-background p-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><div className="md:col-span-2"><button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-primary bg-primary px-6 py-3 text-xs font-extrabold uppercase text-primary-foreground transition hover:bg-accent sm:w-auto"><Send className="h-4 w-4" />Send request</button>{sent && <p role="status" className="mt-4 text-sm text-primary">Thank you. Your request has been prepared for the academy team.</p>}</div></form>
  </div></section>;
}

function Footer() {
  return <footer className="border-t border-border bg-ink py-10"><div className="container-studio"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-start"><div><Logo /><p className="mt-4 text-xs text-muted-foreground">Game Art • 3D • Animation • Game Development</p></div><nav className="flex flex-wrap gap-x-7 gap-y-3 text-[11px] font-bold uppercase text-foreground/60" aria-label="Footer navigation"><a href="#programs">Programs</a><a href="#audiences">For Institutions</a><a href="#audiences">For Studios</a><a href="#workshop">Workshops</a><a href="#founder">About</a><a href="#contact">Contact</a></nav></div><div className="mt-10 flex flex-col justify-between gap-2 border-t border-border pt-5 text-[10px] uppercase text-muted-foreground sm:flex-row"><span>© {new Date().getFullYear()} Skydiver Academy</span><span>Built for Africa. Ready for the world.</span></div></div></footer>;
}

function Index() {
  return <main><Header /><Hero /><Experience /><Programs /><Audiences /><Process /><Workshop /><Portfolio /><Why /><Founder /><Partnerships /><Contact /><Footer /></main>;
}