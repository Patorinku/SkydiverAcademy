import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDownRight, ArrowRight, Box, Check, ChevronRight, CircleDot,
  Cpu, Crosshair, Globe2, Layers3, Menu, Play, Send, Shapes, Sparkles, Target, X,
} from "lucide-react";
import { LanguageProvider, useLanguage } from "../lib/i18n";
import weaponAk from "../assets/weapon-ak.jpg.asset.json";
import characterArt from "../assets/patrick-benai-render.jpg.asset.json";
import founderPortrait from "../assets/patrick-portrait-bw.jpg.asset.json";
import neonCityArt from "../assets/neon-city.jpg.asset.json";
import vehicleTactical from "../assets/vehicle-tactical.jpg.asset.json";
import logoAsset from "../assets/skydiver-logo.png.asset.json";
import batmanArt from "../assets/batman-character.webp.asset.json";
import unrealTemple from "../assets/unreal-temple.jpg.asset.json";
import unrealGameEngine from "../assets/unreal-game-engine.png.asset.json";
import cinematicsArt from "../assets/cinematics-metahuman.jpg.asset.json";
import gameArma from "../assets/Arma_DLC.jpg.asset.json";
import gameBloodhunt from "../assets/Blood_Hunt.jpg.asset.json";
import gameWarframe from "../assets/warframe_moderncover.webp.asset.json";
import gameBorderlands from "../assets/Borderlands_4.jpg.asset.json";
import gameCrossfire from "../assets/co2iie.webp.asset.json";
import gameWalkingDead from "../assets/OTWD_Aidan_RevealArt_logos.avif.asset.json";
import gamePayday from "../assets/payday_crimewar.webp.asset.json";
import toolUnreal from "../assets/tool-unreal.png.asset.json";
import toolUnity from "../assets/tool-unity.png.asset.json";
import toolMaya from "../assets/tool-maya.png.asset.json";
import toolMax from "../assets/tool-3dsmax.png.asset.json";
import toolBlender from "../assets/tool-blender.png.asset.json";
import toolZbrush from "../assets/tool-zbrush.png.asset.json";
import toolSubstance from "../assets/tool-substance.png.asset.json";
import toolMarvelous from "../assets/tool-marvelous.png.asset.json";
import toolHoudini from "../assets/tool-houdini.png.asset.json";
import toolReallusion from "../assets/tool-reallusion.png.asset.json";

const shippedTitles = [
  { src: gameBorderlands.url, name: "Borderlands 4" },
  { src: gameBloodhunt.url, name: "Vampire: The Masquerade - Bloodhunt" },
  { src: gameWarframe.url, name: "Warframe" },
  { src: gameArma.url, name: "Arma 3: S.O.G. Prairie Fire" },
  { src: gameCrossfire.url, name: "CrossFire" },
  { src: gamePayday.url, name: "PAYDAY: Crime War" },
  { src: gameWalkingDead.url, name: "Overkill's The Walking Dead" },
];

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

const disciplineImages = [characterArt.url, neonCityArt.url, weaponAk.url, vehicleTactical.url, unrealTemple.url, unrealGameEngine.url];





const portfolio: [number, string, string][] = [
  [0, characterArt.url, "md:col-span-5 md:row-span-2"],
  [1, weaponAk.url, "md:col-span-7"],
  [2, neonCityArt.url, "md:col-span-4"],
  [3, vehicleTactical.url, "md:col-span-3"],
  [4, unrealTemple.url, "md:col-span-7"],
  [5, cinematicsArt.url, "md:col-span-5"],
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
  const { t } = useLanguage();
  return <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label={t.nav.home}>
    <img src={logoAsset.url} alt="Skydiver Academy logo" width={28} height={28} className="h-7 w-auto object-contain" />
    <span className="font-display text-lg font-bold uppercase leading-none">Skydiver<span className="block text-[10px] text-primary">Academy</span></span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const hrefs = ["#programs", "#audiences", "#audiences", "#workshop", "#founder"];
  const links = t.nav.links.map((l, i) => [l, hrefs[i]]);
  const toggle = <button type="button" onClick={() => setLang(lang === "en" ? "fr" : "en")} aria-label={t.nav.switchTo} className="flex h-11 items-center border border-border text-[11px] font-bold uppercase">
    <span className={`px-2.5 py-1 ${lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/60"}`}>EN</span>
    <span className={`px-2.5 py-1 ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-foreground/60"}`}>FR</span>
  </button>;
  return <header className="absolute inset-x-0 top-0 z-50 border-b border-foreground/10 bg-ink/30 backdrop-blur-sm">
    <div className="container-studio grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
      <Logo />
      <div className="flex items-center gap-8"><nav className="hidden items-center gap-7 md:flex" aria-label={t.nav.mainNav}>
        {links.map(([label, href]) => <a key={label} href={href} className="text-[11px] font-bold uppercase text-foreground/70 transition hover:text-primary">{label}</a>)}
      </nav>
      <div className="flex items-center gap-3"><a href="#contact" className="hidden border border-primary px-5 py-3 text-[11px] font-bold uppercase text-primary transition hover:bg-primary hover:text-primary-foreground lg:inline-flex">{t.nav.cta}</a>{toggle}<button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center border border-border text-foreground md:hidden" aria-label={t.nav.menu} aria-expanded={open}>{open ? <X /> : <Menu />}</button></div></div>
    </div>
    {open && <nav className="border-t border-border bg-ink px-4 py-6 md:hidden" aria-label={t.nav.mobileNav}>{links.map(([label, href]) => <a key={label} onClick={() => setOpen(false)} href={href} className="block border-b border-border py-4 font-display text-2xl uppercase">{label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-5 flex bg-primary px-5 py-4 text-xs font-bold uppercase text-primary-foreground">{t.nav.cta}</a></nav>}
  </header>;
}

function Hero() {
  const { t } = useLanguage();
  return <section id="top" className="relative flex min-h-[920px] items-end overflow-hidden bg-ink md:min-h-[900px]">
    <img src={batmanArt.url} alt="Batman character turnaround — professional 3D character artwork by Patrick Benai" width={1920} height={1080} className="hero-art vibranium-grade absolute inset-0 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
    <div className="scan-line absolute inset-x-0 top-0 z-10 h-px bg-energy/70" />
    <div className="container-studio relative z-20 pb-16 pt-36 md:pb-20">
      <div className="max-w-4xl">
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-energy"><CircleDot className="h-4 w-4" />{t.hero.kicker}</p>
        <h1 className="display-title text-[4.2rem] text-foreground sm:text-7xl md:text-8xl lg:text-[7.8rem]">{t.hero.title} <span className="text-primary">{t.hero.titleAccent}</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/75 md:text-lg">{t.hero.copy}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ActionLink href="#contact">{t.hero.cta1}</ActionLink><ActionLink href="#partnerships" secondary>{t.hero.cta2}</ActionLink></div>
      </div>
      <div className="mt-14 grid max-w-3xl grid-cols-2 border-y border-foreground/15 sm:grid-cols-4">
        {t.hero.tags.map((item) => <span key={item} className="border-foreground/15 py-4 text-[10px] font-bold uppercase text-foreground/60 sm:border-r sm:px-4">{item}</span>)}
      </div>
    </div>
    <a href="#experience" className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 text-[10px] font-bold uppercase text-foreground/60 lg:flex">{t.hero.explore} <ArrowDownRight className="h-5 w-5 text-primary" /></a>
  </section>;
}

function Experience() {
  const { t } = useLanguage();
  const stats = t.experience.stats;
  return <section id="experience" className="section-space border-b border-border bg-panel">
    <div className="container-studio">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
        <div><SectionHeading kicker={t.experience.kicker} title={t.experience.title} /><p className="max-w-xl text-lg leading-8 text-muted-foreground">{t.experience.copy}</p><div className="mt-8"><ActionLink href="https://www.artstation.com/patrickbenai" secondary>{t.experience.cta}</ActionLink></div></div>
        <div className="border-t border-border">{stats.map(([value, label], index) => <div key={value} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-border py-6 sm:grid-cols-[3rem_1fr_1fr]"><span className="text-xs text-primary">0{index + 1}</span><strong className="font-display text-2xl uppercase text-foreground">{value}</strong><span className="col-start-2 text-sm text-muted-foreground sm:col-start-auto">{label}</span></div>)}</div>
      </div>
    </div>
  </section>;
}

function Programs() {
  const { t } = useLanguage();
  return <section id="programs" className="section-space bg-background"><div className="container-studio"><SectionHeading kicker={t.programs.kicker} title={t.programs.title} copy={t.programs.copy} />
    <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{t.programs.items.map(({ title, text }, i) => { const image = disciplineImages[i]; const number = `0${i + 1}`; return <article key={i} className="group relative min-h-[460px] overflow-hidden bg-card"><img src={image} alt="" width={1536} height={1024} loading="lazy" className={`vibranium-grade absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 ${i === 0 ? "object-top" : "object-center"}`} /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" /><span className="absolute left-6 top-6 text-xs font-bold text-energy">{number}</span><div className="absolute inset-x-0 bottom-0 p-7"><h3 className="display-title text-3xl text-foreground">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-foreground/65">{text}</p></div></article>; })}</div>
  </div></section>;
}

function Audiences() {
  const { t } = useLanguage();
  return <section id="audiences" className="section-space border-y border-border bg-panel"><div className="container-studio"><SectionHeading kicker={t.audiences.kicker} title={t.audiences.title} />
    <div className="grid gap-px bg-border lg:grid-cols-3">{t.audiences.items.map((audience, index) => <article key={index} className="flex min-h-[540px] flex-col bg-background p-7 md:p-9"><div className="mb-10 flex items-center justify-between"><span className="text-xs font-bold uppercase text-primary">{audience.eyebrow}</span><span className="font-display text-5xl text-border">0{index + 1}</span></div><h3 className="display-title text-4xl text-foreground">{audience.title}</h3><p className="mt-5 text-sm leading-6 text-muted-foreground">{audience.text}</p><ul className="mt-8 space-y-3">{audience.items.map((item) => <li key={item} className="flex gap-3 text-sm text-foreground/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul><div className="mt-auto pt-8"><ActionLink href="#contact" secondary>{audience.cta}</ActionLink></div></article>)}</div>
  </div></section>;
}

function Process() {
  const { t } = useLanguage();
  return <section className="section-space grid-lines bg-background"><div className="container-studio"><SectionHeading kicker={t.process.kicker} title={t.process.title} /><div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{t.process.steps.map(({ title, text }, i) => { const number = `0${i + 1}`; return <div key={i} className="min-h-72 border-b border-r border-border bg-background/90 p-7"><span className="font-display text-6xl text-energy">{number}</span><h3 className="mt-10 font-display text-2xl font-bold uppercase">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>; })}</div></div></section>;
}

function Workshop() {
  const { t } = useLanguage();
  const topics = t.workshop.topics;
  return <section id="workshop" className="relative overflow-hidden border-y border-border bg-panel">
    <div className="image-shade relative h-[46vh] min-h-[320px] w-full lg:h-[58vh]">
      <img src={weaponAk.url} alt="AAA weapons and hard-surface asset production showcase" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/35 to-transparent" />
      <span className="absolute right-5 top-5 z-10 border border-foreground/25 bg-ink/60 px-3 py-2 text-[10px] font-bold uppercase backdrop-blur">{t.workshop.badge}</span>
      <div className="container-studio absolute inset-x-0 bottom-0 z-10 pb-8 lg:pb-12">
        <p className="mb-4 text-xs font-bold uppercase text-primary">{t.workshop.kicker}</p>
        <h2 className="display-title max-w-5xl text-4xl sm:text-6xl md:text-7xl">{t.workshop.title}</h2>
      </div>
    </div>
    <div className="container-studio py-12 lg:py-16">
      <p className="max-w-3xl text-base leading-7 text-muted-foreground">{t.workshop.copy}</p>
      <div className="mt-10 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {topics.map((topic) => <span key={topic} className="flex min-h-20 items-center border-b border-r border-border px-4 py-4 text-[10px] font-bold uppercase leading-4 text-foreground/70 transition hover:bg-panel-raised hover:text-foreground">{topic}</span>)}
      </div>
      <div className="mt-10 flex flex-col gap-6 border-y border-border py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid flex-1 grid-cols-1 gap-4 text-xs font-bold uppercase sm:grid-cols-3">
          {t.workshop.meta.map((m) => <span key={m}>{m}</span>)}
        </div>
        <ActionLink href="#contact">{t.workshop.cta}</ActionLink>
      </div>
    </div>
  </section>;
}

function Portfolio() {
  const { t } = useLanguage();
  return <section id="portfolio" className="section-space bg-background"><div className="container-studio"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading kicker={t.portfolio.kicker} title={t.portfolio.title} copy={t.portfolio.copy} /><div className="mb-12 md:mb-16"><ActionLink href="https://www.artstation.com/patrickbenai" secondary>{t.portfolio.cta}</ActionLink></div></div><div className="grid auto-rows-[280px] gap-2 md:grid-cols-12">{portfolio.map(([idx, image, span]) => { const label = t.portfolio.labels[idx]; return <figure key={idx} className={`image-shade group relative bg-card ${span}`}><img src={image} alt={`${label} portfolio artwork`} width={1536} height={1024} loading="lazy" className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${idx === 0 ? "object-top" : "object-center"}`} /><figcaption className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between p-5 font-display text-xl font-bold uppercase"><span>{label}</span><ArrowDownRight className="h-5 w-5 text-primary" /></figcaption></figure>; })}</div></div></section>;
}

const tools: [string, string][] = [["Unreal Engine", toolUnreal.url], ["Unity", toolUnity.url], ["Maya", toolMaya.url], ["3ds Max", toolMax.url], ["Blender", toolBlender.url], ["ZBrush", toolZbrush.url], ["Substance by Adobe", toolSubstance.url], ["Marvelous Designer", toolMarvelous.url], ["Houdini", toolHoudini.url], ["Reallusion", toolReallusion.url]];
function Tools() {
  const { t } = useLanguage();
  return <section id="tools" className="section-space bg-ink"><div className="container-studio"><SectionHeading kicker={t.tools.kicker} title={t.tools.title} copy={t.tools.copy} /><div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">{tools.map(([name, src]) => <div key={name} className="flex h-32 items-center justify-center bg-ink p-6 md:h-40"><img src={src} alt={`${name} logo`} loading="lazy" className="max-h-12 max-w-full object-contain opacity-85 transition hover:opacity-100 md:max-h-14" /></div>)}</div></div></section>;
}

function Network() {
  const { t } = useLanguage();
  return <section id="network" className="border-t border-border bg-background py-20 md:py-24"><div className="container-studio flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-3xl"><p className="mb-4 text-xs font-bold uppercase text-energy">{t.network.kicker}</p><h2 className="display-title text-4xl text-foreground md:text-6xl">{t.network.title}</h2><p className="mt-5 text-base leading-7 text-muted-foreground">{t.network.copy}</p></div><div className="shrink-0"><ActionLink href="#contact">{t.network.cta}</ActionLink></div></div></section>;
}

function Why() {
  const { t } = useLanguage();
  const icons = [Crosshair, Layers3, Globe2, Sparkles];
  const reasons = t.why.items.map((r, i) => { const Icon = icons[i] ?? Sparkles; return { ...r, icon: <Icon className="h-7 w-7 text-primary" /> }; });
  return <section className="section-space border-y border-border bg-panel"><div className="container-studio"><SectionHeading kicker={t.why.kicker} title={t.why.title} /><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{reasons.map((reason) => <div key={reason.title} className="border-t border-primary pt-7">{reason.icon}<h3 className="mt-8 font-display text-2xl font-bold uppercase">{reason.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{reason.text}</p></div>)}</div></div></section>;
}

function Founder() {
  const { t } = useLanguage();
  return <section id="founder" className="section-space bg-background"><div className="container-studio grid items-center gap-14 lg:grid-cols-2"><div className="relative min-h-[560px] overflow-hidden"><img src={founderPortrait.url} alt={t.founder.alt} width={1152} height={1920} loading="lazy" className="absolute inset-0 h-full w-full bg-ink object-contain object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-7 pt-28"><span className="text-xs font-bold uppercase text-primary">{t.founder.caption}</span></div></div><div><SectionHeading kicker={t.founder.kicker} title={t.founder.title} /><p className="font-display text-3xl font-bold uppercase">{t.founder.name}</p><p className="mt-1 text-sm font-bold uppercase text-primary">{t.founder.role}</p><p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">{t.founder.p1}</p><p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{t.founder.p2}</p><div className="mt-9"><ActionLink href="https://www.artstation.com/patrickbenai" secondary>{t.founder.cta}</ActionLink></div></div></div></section>;
}

function Partnerships() {
  const { t } = useLanguage();
  const cards = t.partnerships.cards.map((c) => [c.title, c.text, c.cta]);
  return <section id="partnerships" className="section-space relative overflow-hidden bg-primary text-primary-foreground"><div className="absolute inset-0 grid-lines opacity-25" /><div className="absolute inset-x-0 top-0 h-px bg-energy" /><div className="container-studio relative"><p className="mb-5 text-xs font-extrabold uppercase text-energy">{t.partnerships.kicker}</p><h2 className="display-title max-w-5xl text-6xl sm:text-7xl md:text-8xl lg:text-9xl">{t.partnerships.title}</h2><p className="mt-7 max-w-3xl text-base leading-7 opacity-75 md:text-lg">{t.partnerships.copy}</p><div className="mt-12 grid gap-px bg-primary-foreground/25 lg:grid-cols-3">{cards.map(([title, text, cta]) => <article key={title} className="flex min-h-72 flex-col bg-primary p-7"><h3 className="font-display text-3xl font-bold uppercase">{title}</h3><p className="mt-4 text-sm leading-6 opacity-70">{text}</p><a href="#contact" className="mt-auto flex items-center justify-between border-t border-primary-foreground/30 pt-5 text-xs font-extrabold uppercase transition hover:text-energy">{cta}<ChevronRight className="h-4 w-4" /></a></article>)}</div></div></section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  const c = t.contact;
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <section id="contact" className="section-space bg-ink"><div className="container-studio grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionHeading kicker={c.kicker} title={c.title} /><p className="max-w-md text-base leading-7 text-muted-foreground">{c.copy}</p><div className="mt-10 border-t border-border pt-7"><p className="text-xs font-bold uppercase text-primary">{c.connect}</p><div className="mt-4 flex gap-5 text-sm text-foreground/70"><a href="https://www.artstation.com/patrickbenai" target="_blank" rel="noopener noreferrer" className="hover:text-primary">{c.portfolio}</a><a href="https://www.linkedin.com/in/patrick-benai-39658857" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a><a href="https://www.instagram.com/b_patrick3d" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a></div><div className="mt-6 flex flex-col gap-2 text-sm"><a href="tel:+237696790113" className="text-foreground hover:text-primary">{c.call}: +237 696 790 113</a><a href="https://wa.me/237696790113" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary">WhatsApp: +237 696 790 113</a></div></div></div>
    <form onSubmit={submit} className="grid gap-5 border border-border bg-panel p-6 md:grid-cols-2 md:p-9"><label className="text-xs font-bold uppercase text-foreground/70">{c.name}<input required name="name" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><label className="text-xs font-bold uppercase text-foreground/70">{c.organization}<input name="organization" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><label className="text-xs font-bold uppercase text-foreground/70">{c.email}<input required type="email" name="email" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><label className="text-xs font-bold uppercase text-foreground/70">{c.phone}<input type="tel" name="phone" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><label className="text-xs font-bold uppercase text-foreground/70 md:col-span-2">{c.interest}<select name="interest" className="mt-2 h-12 w-full border border-input bg-background px-4 text-sm font-normal normal-case outline-none focus:border-primary">{c.interests.map((o) => <option key={o}>{o}</option>)}</select></label><label className="text-xs font-bold uppercase text-foreground/70 md:col-span-2">{c.message}<textarea required name="message" rows={5} className="mt-2 w-full resize-none border border-input bg-background p-4 text-sm font-normal normal-case outline-none focus:border-primary" /></label><div className="md:col-span-2"><button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-primary bg-primary px-6 py-3 text-xs font-extrabold uppercase text-primary-foreground transition hover:bg-accent sm:w-auto"><Send className="h-4 w-4" />{c.send}</button>{sent && <p role="status" className="mt-4 text-sm text-primary">{c.sent}</p>}</div></form>
  </div></section>;
}

function ShippedGames() {
  const { t } = useLanguage();
  return <section id="games" className="section-space border-y border-border bg-panel">
    <div className="container-studio">
      <SectionHeading kicker={t.games.kicker} title={t.games.title} />
      <p className="max-w-2xl text-base leading-8 text-muted-foreground">{t.games.copy}</p>
      <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {shippedTitles.map((game) => <li key={game.name} className="group relative aspect-[3/4] overflow-hidden border border-border bg-ink">
          <img src={game.src} alt={game.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 p-4 text-[11px] font-bold uppercase leading-4 text-foreground">{game.name}</span>
        </li>)}
      </ul>
    </div>
  </section>;
}

function Footer() {
  const { t } = useLanguage();
  const fh = ["#programs", "#audiences", "#audiences", "#workshop", "#founder", "#contact"];
  return <footer className="border-t border-border bg-ink py-10"><div className="container-studio"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-start"><div><Logo /><p className="mt-4 text-xs text-muted-foreground">{t.footer.tagline}</p></div><nav className="flex flex-wrap gap-x-7 gap-y-3 text-[11px] font-bold uppercase text-foreground/60" aria-label={t.footer.nav}>{t.footer.links.map((l, i) => <a key={l} href={fh[i]}>{l}</a>)}</nav></div><div className="mt-10 flex flex-col justify-between gap-2 border-t border-border pt-5 text-[10px] uppercase text-muted-foreground sm:flex-row"><span>© {new Date().getFullYear()} Skydiver Academy</span><span>{t.footer.motto}</span></div></div></footer>;
}

function Index() {
  return <LanguageProvider><main><Header /><Hero /><Experience /><Programs /><Audiences /><Process /><Workshop /><Portfolio /><Why /><Tools /><Network /><div className="bg-background"><div className="container-studio"><span className="block h-px w-16 bg-primary" /></div></div><Founder /><ShippedGames /><Partnerships /><Contact /><Footer /></main></LanguageProvider>;
}
