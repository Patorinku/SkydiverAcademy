import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

const en = {
  nav: {
    links: ["Programs", "Institutions", "Studios", "Workshops", "About"],
    cta: "Request a workshop",
    menu: "Toggle menu",
    home: "Skydiver Academy home",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    switchTo: "Switch to French",
  },
  hero: {
    kicker: "Industry-led production training",
    title: "Building Africa's Next Generation of",
    titleAccent: "Game & Digital Artists",
    copy: "Industry-led training in Game Art, 3D, Animation and Game Development, designed to connect African talent with the standards of the global digital entertainment industry.",
    cta1: "Request a workshop",
    cta2: "Partner with us",
    tags: ["Game Art", "3D Production", "Animation", "Game Development"],
    explore: "Explore",
  },
  experience: {
    kicker: "Professional foundation",
    title: "Industry Experience. Professional Training.",
    copy: "With more than 10 years of experience across game and cinematic production, Patrick brings professional production knowledge directly into the classroom and studio environment.",
    cta: "View portfolio",
    stats: [
      ["10+ Years", "Professional Industry Experience"],
      ["AAA Production", "Game & Cinematic Projects"],
      ["3D Specialist", "Characters • Weapons • Hard Surface"],
      ["Production Pipelines", "High Poly to Game Engine"],
      ["Unreal Engine", "Real-Time Production"],
    ],
  },
  programs: {
    kicker: "Disciplines",
    title: "From 3D Art to Game Production",
    copy: "Learn the skills, workflows and tools used to create production-ready digital content for modern games and interactive experiences.",
    items: [
      { title: "Character Art", text: "High-poly sculpting, anatomy, retopology, clothing, hair, texturing and optimization." },
      { title: "Environment Art", text: "Modular environments, props, materials, composition, lighting and optimization." },
      { title: "Weapons & Hard Surface", text: "Production-ready weapons, hard-surface modelling, topology and PBR workflows." },
      { title: "Vehicles & Props", text: "Designing and producing detailed assets for real-time environments." },
      { title: "Animation & Cinematics", text: "Rigging, animation, cinematics and storytelling for games and digital productions." },
      { title: "Game Engine & Technical Skills", text: "Unreal Engine, Unity, materials, shaders, optimization and real-time implementation." },
    ],
  },
  audiences: {
    kicker: "Built for your goals",
    title: "Training Built Around Your Needs",
    items: [
      { eyebrow: "For students", title: "Build Industry-Ready Skills", text: "Develop practical skills, build a professional portfolio and understand how modern game production works.", items: ["Professional software", "Production workflows", "Portfolio projects", "Industry mentorship", "Career preparation"], cta: "Explore programs" },
      { eyebrow: "For institutions", title: "Bring Industry Expertise to Your Students", text: "Partner with Skydiver Academy for professional workshops, masterclasses and specialized training.", items: ["Workshops", "Masterclasses", "Short intensive programs", "Specialized training", "Industry-oriented curricula"], cta: "Request a workshop" },
      { eyebrow: "For game studios", title: "Upskill Your Team", text: "Customized training designed around your studio's production requirements and the skill gaps of your artists.", items: ["Character & environment production", "Hard surface & PBR workflows", "Unreal Engine & optimization", "Production pipelines", "Quality reviews"], cta: "Discuss studio training" },
    ],
  },
  process: {
    kicker: "Our approach",
    title: "From Need to Production",
    steps: [
      { title: "Identify", text: "We understand your students, artists or production objectives." },
      { title: "Design", text: "We build a training program around those specific needs." },
      { title: "Deliver", text: "Industry professionals deliver workshops, masterclasses or intensive training." },
      { title: "Measure", text: "Projects, reviews and assessments help track progress and development." },
    ],
  },
  workshop: {
    badge: "Featured workshop",
    kicker: "Flagship masterclass",
    title: "Introduction to the Video Game Industry & AAA Game Art",
    copy: "Discover how professional video games are created, from concept and 3D production to the final game engine.",
    topics: ["Game Development Pipeline", "Character Art", "Environment Art", "Weapons & Hard Surface", "Texturing & PBR", "Unreal Engine", "Careers in the Global Game Industry"],
    meta: ["2–3 Hours", "Masterclass / Workshop", "Douala • Yaoundé • Online"],
    cta: "Request this workshop",
  },
  portfolio: {
    kicker: "Selected disciplines",
    title: "Created for the Real World",
    copy: "Explore professional 3D work and production experience behind Skydiver Academy.",
    cta: "View full portfolio",
    labels: ["Character Art", "Weapons", "Environment Art", "Vehicles & Props", "Unreal Engine", "Cinematics"],
  },
  why: {
    kicker: "The difference",
    title: "Why Skydiver Academy?",
    items: [
      { title: "Industry-Led", text: "Training is built around real production experience rather than purely theoretical education." },
      { title: "Production-Focused", text: "Students learn practical workflows used to create digital content for games and cinematic productions." },
      { title: "International Perspective", text: "Training introduces African talent to international production standards and global career opportunities." },
      { title: "African Talent", text: "Our goal is to help talented African creators participate in the global digital entertainment industry." },
    ],
  },
  founder: {
    kicker: "Industry leadership",
    title: "Meet the Founder",
    name: "Patrick Benai",
    role: "Senior 3D Character & Weapons Artist",
    caption: "Patrick Benai • Founder",
    p1: "Patrick is a 3D artist with more than 10 years of professional experience across international game and cinematic production. His practice spans character art, weapons, hard-surface modelling, texturing and real-time production.",
    p2: "Through Skydiver Academy, he translates the standards, discipline and workflows of professional production into practical learning experiences for Africa's next generation of creators.",
    cta: "View portfolio",
    alt: "Patrick Benai, founder of Skydiver Academy",
  },
  games: {
    kicker: "Production credits",
    title: "Games Worked On",
    copy: "A selection of commercial game titles Patrick has contributed to across character art, weapons and hard-surface production.",
  },
  partnerships: {
    kicker: "Partnerships",
    title: "Let's Build the Future of Game Development in Africa",
    copy: "Whether you are a student, university, technical institution, training organization or game studio, Skydiver Academy can bring professional game-industry knowledge and training to your community or team.",
    cards: [
      { title: "Universities & Schools", text: "Bring a professional Game Art workshop to your students.", cta: "Request a workshop" },
      { title: "Game Studios", text: "Develop the skills of your existing production team.", cta: "Discuss training" },
      { title: "Organizations & Partners", text: "Explore partnerships supporting African digital talent.", cta: "Become a partner" },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Start a Conversation",
    copy: "Interested in a workshop, professional training program or partnership? Get in touch with Skydiver Academy.",
    connect: "Connect",
    portfolio: "Portfolio",
    name: "Name",
    organization: "Organization",
    email: "Email",
    phone: "Phone / WhatsApp",
    interest: "I am interested in",
    interests: ["Workshop", "Student Program", "Institutional Partnership", "Studio Training", "Other"],
    message: "Message",
    send: "Send request",
    sent: "Thank you. Your request has been prepared for the academy team.",
  },
  footer: {
    tagline: "Game Art • 3D • Animation • Game Development",
    links: ["Programs", "For Institutions", "For Studios", "Workshops", "About", "Contact"],
    nav: "Footer navigation",
    motto: "Built for Africa. Ready for the world.",
  },
};

export type Dict = typeof en;

const fr: Dict = {
  nav: {
    links: ["Programmes", "Établissements", "Studios", "Ateliers", "À propos"],
    cta: "Demander un atelier",
    menu: "Ouvrir le menu",
    home: "Accueil Skydiver Academy",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    switchTo: "Passer en anglais",
  },
  hero: {
    kicker: "Formation professionnelle issue de l'industrie",
    title: "Former la prochaine génération",
    titleAccent: "d'artistes du jeu vidéo en Afrique",
    copy: "Une formation menée par l'industrie en art du jeu vidéo, 3D, animation et développement de jeux, pensée pour relier les talents africains aux standards mondiaux du divertissement numérique.",
    cta1: "Demander un atelier",
    cta2: "Devenir partenaire",
    tags: ["Art du jeu", "Production 3D", "Animation", "Développement de jeux"],
    explore: "Découvrir",
  },
  experience: {
    kicker: "Fondation professionnelle",
    title: "Expérience de l'industrie. Formation professionnelle.",
    copy: "Avec plus de 10 ans d'expérience en production de jeux et de cinématiques, Patrick apporte un savoir-faire professionnel directement en salle de cours et en studio.",
    cta: "Voir le portfolio",
    stats: [
      ["10+ Ans", "Expérience professionnelle dans l'industrie"],
      ["Production AAA", "Projets de jeux et cinématiques"],
      ["Spécialiste 3D", "Personnages • Armes • Hard Surface"],
      ["Pipelines de production", "Du high poly au moteur de jeu"],
      ["Unreal Engine", "Production temps réel"],
    ],
  },
  programs: {
    kicker: "Disciplines",
    title: "De l'art 3D à la production de jeux",
    copy: "Apprenez les compétences, les méthodes et les outils utilisés pour créer des contenus numériques prêts pour la production des jeux et expériences interactives d'aujourd'hui.",
    items: [
      { title: "Art de personnages", text: "Sculpture high-poly, anatomie, retopologie, vêtements, cheveux, texturing et optimisation." },
      { title: "Art d'environnements", text: "Environnements modulaires, props, matériaux, composition, éclairage et optimisation." },
      { title: "Armes & Hard Surface", text: "Armes prêtes pour la production, modélisation hard-surface, topologie et workflows PBR." },
      { title: "Véhicules & Props", text: "Conception et production d'assets détaillés pour des environnements temps réel." },
      { title: "Animation & Cinématiques", text: "Rigging, animation, cinématiques et narration pour les jeux et productions numériques." },
      { title: "Moteur de jeu & compétences techniques", text: "Unreal Engine, Unity, matériaux, shaders, optimisation et intégration temps réel." },
    ],
  },
  audiences: {
    kicker: "Conçu pour vos objectifs",
    title: "Une formation adaptée à vos besoins",
    items: [
      { eyebrow: "Pour les étudiants", title: "Développer des compétences prêtes pour l'industrie", text: "Acquérez des compétences pratiques, construisez un portfolio professionnel et comprenez le fonctionnement de la production de jeux moderne.", items: ["Logiciels professionnels", "Méthodes de production", "Projets de portfolio", "Mentorat professionnel", "Préparation à la carrière"], cta: "Découvrir les programmes" },
      { eyebrow: "Pour les établissements", title: "Apportez l'expertise de l'industrie à vos étudiants", text: "Collaborez avec Skydiver Academy pour des ateliers, masterclasses et formations spécialisées.", items: ["Ateliers", "Masterclasses", "Programmes intensifs courts", "Formations spécialisées", "Cursus orientés industrie"], cta: "Demander un atelier" },
      { eyebrow: "Pour les studios", title: "Faites monter votre équipe en compétences", text: "Des formations sur mesure conçues selon les exigences de production de votre studio et les besoins de vos artistes.", items: ["Production de personnages et environnements", "Hard surface & workflows PBR", "Unreal Engine & optimisation", "Pipelines de production", "Revues de qualité"], cta: "Parler d'une formation studio" },
    ],
  },
  process: {
    kicker: "Notre approche",
    title: "Du besoin à la production",
    steps: [
      { title: "Identifier", text: "Nous analysons vos étudiants, vos artistes et vos objectifs de production." },
      { title: "Concevoir", text: "Nous construisons un programme de formation autour de ces besoins précis." },
      { title: "Animer", text: "Des professionnels de l'industrie animent ateliers, masterclasses ou formations intensives." },
      { title: "Mesurer", text: "Projets, revues et évaluations permettent de suivre la progression." },
    ],
  },
  workshop: {
    badge: "Atelier phare",
    kicker: "Masterclass principale",
    title: "Introduction à l'industrie du jeu vidéo et à l'art de jeu AAA",
    copy: "Découvrez comment les jeux vidéo professionnels sont créés, du concept à la production 3D jusqu'au moteur de jeu final.",
    topics: ["Pipeline de développement", "Art de personnages", "Art d'environnements", "Armes & Hard Surface", "Texturing & PBR", "Unreal Engine", "Carrières dans l'industrie mondiale"],
    meta: ["2–3 heures", "Masterclass / Atelier", "Douala • Yaoundé • En ligne"],
    cta: "Demander cet atelier",
  },
  portfolio: {
    kicker: "Disciplines sélectionnées",
    title: "Créé pour le monde réel",
    copy: "Découvrez le travail 3D professionnel et l'expérience de production derrière Skydiver Academy.",
    cta: "Voir tout le portfolio",
    labels: ["Art de personnages", "Armes", "Art d'environnements", "Véhicules & Props", "Unreal Engine", "Cinématiques"],
  },
  why: {
    kicker: "La différence",
    title: "Pourquoi Skydiver Academy ?",
    items: [
      { title: "Menée par l'industrie", text: "La formation s'appuie sur une véritable expérience de production, et non sur une approche purement théorique." },
      { title: "Axée production", text: "Les participants apprennent les méthodes concrètes utilisées pour créer du contenu de jeux et de cinématiques." },
      { title: "Perspective internationale", text: "La formation ouvre les talents africains aux standards internationaux et aux opportunités de carrière mondiales." },
      { title: "Talents africains", text: "Notre objectif est d'aider les créateurs africains talentueux à participer à l'industrie mondiale du divertissement numérique." },
    ],
  },
  founder: {
    kicker: "Leadership industriel",
    title: "Le fondateur",
    name: "Patrick Benai",
    role: "Artiste 3D senior — Personnages & Armes",
    caption: "Patrick Benai • Fondateur",
    p1: "Patrick est un artiste 3D avec plus de 10 ans d'expérience professionnelle dans la production internationale de jeux et de cinématiques. Son travail couvre l'art de personnages, les armes, la modélisation hard-surface, le texturing et la production temps réel.",
    p2: "À travers Skydiver Academy, il traduit les standards, la rigueur et les méthodes de la production professionnelle en expériences d'apprentissage concrètes pour la prochaine génération de créateurs africains.",
    cta: "Voir le portfolio",
    alt: "Patrick Benai, fondateur de Skydiver Academy",
  },
  games: {
    kicker: "Crédits de production",
    title: "Jeux auxquels il a contribué",
    copy: "Une sélection de jeux commerciaux auxquels Patrick a contribué en art de personnages, armes et production hard-surface.",
  },
  partnerships: {
    kicker: "Partenariats",
    title: "Construisons l'avenir du développement de jeux en Afrique",
    copy: "Que vous soyez étudiant, université, établissement technique, organisme de formation ou studio de jeux, Skydiver Academy peut apporter un savoir-faire professionnel du jeu vidéo à votre communauté ou à votre équipe.",
    cards: [
      { title: "Universités & Écoles", text: "Proposez un atelier professionnel d'art du jeu vidéo à vos étudiants.", cta: "Demander un atelier" },
      { title: "Studios de jeux", text: "Développez les compétences de votre équipe de production.", cta: "Parler d'une formation" },
      { title: "Organisations & Partenaires", text: "Explorons des partenariats au service des talents numériques africains.", cta: "Devenir partenaire" },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Démarrons la conversation",
    copy: "Intéressé par un atelier, un programme de formation professionnelle ou un partenariat ? Contactez Skydiver Academy.",
    connect: "Nous suivre",
    portfolio: "Portfolio",
    name: "Nom",
    organization: "Organisation",
    email: "E-mail",
    phone: "Téléphone / WhatsApp",
    interest: "Je suis intéressé par",
    interests: ["Atelier", "Programme étudiant", "Partenariat institutionnel", "Formation studio", "Autre"],
    message: "Message",
    send: "Envoyer la demande",
    sent: "Merci. Votre demande a été transmise à l'équipe de l'académie.",
  },
  footer: {
    tagline: "Art du jeu • 3D • Animation • Développement de jeux",
    links: ["Programmes", "Pour les établissements", "Pour les studios", "Ateliers", "À propos", "Contact"],
    nav: "Navigation du pied de page",
    motto: "Conçu pour l'Afrique. Prêt pour le monde.",
  },
};

const dictionaries: Record<Lang, Dict> = { en, fr };

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("sa-lang");
    if (stored === "fr" || stored === "en") setLang(stored);
    else if (window.navigator.language?.toLowerCase().startsWith("fr")) setLang("fr");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("sa-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
