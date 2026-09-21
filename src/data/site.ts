export type NavigationItem = { label: string; href: string };

export type Service = {
  title: string;
  description: string;
  duration: string;
  participants: string;
  price: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

export type Tasting = {
  title: string;
  date?: string;
  theme: string;
  image: string;
  imageAlt: string;
  wines?: string[];
  comment: string;
};

export type Award = {
  year: string;
  competition: string;
  result: string;
  team?: string;
  distinction?: string;
};

export const site = {
  identity: {
    name: "Lucas SEMAAN",
    role: "Œnologue & Sommelier privé",
    location: "Rennes et ses environs",
  },
  navigation: [
    { label: "À propos", href: "#a-propos" },
    { label: "Prestations", href: "#prestations" },
    { label: "Dégustations", href: "#degustations" },
    { label: "Palmarès", href: "#palmares" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: "Sommelier privé · Rennes",
    title: "Œnologue & Sommelier privé",
    statement: "[ACCROCHE À REMPLACER]",
    description: "[DESCRIPTION COURTE À REMPLACER]",
    image: "/images/lucas-vignes.jpeg",
    imageAlt: "Lucas Semaan dégustant un verre de vin au milieu des vignes",
  },
  about: {
    eyebrow: "À propos",
    title: "Lucas SEMAAN",
    role: "Œnologue & Sommelier privé",
    biography: "[BIOGRAPHIE À REMPLACER]",
    philosophy: "[PHILOSOPHIE DE LA DÉGUSTATION À REMPLACER]",
    education: [
      "Diplôme d’ingénieur viticole — AgroParisTech",
      "Œnologue — Montpellier SupAgro",
    ],
    image: "/images/lucas-degustation-portrait.jpeg",
    imageAlt: "Lucas Semaan lors d’une séance de dégustation de vins",
  },
  servicesIntro: {
    eyebrow: "Prestations",
    title: "Des dégustations pensées pour votre moment.",
    description: "[TEXTE D’INTRODUCTION AUX PRESTATIONS À REMPLACER]",
    startingPrice: "Prestations à partir de 20 € par personne",
  },
  // Ajouter ici les prestations.
  services: [
    {
      title: "Tour de France des vins blancs",
      description: "[DESCRIPTION À REMPLACER]",
      duration: "[DURÉE]",
      participants: "[NOMBRE DE PARTICIPANTS]",
      price: "[PRIX INDICATIF À REMPLACER]",
      image: "/images/lineup-blancs.jpeg",
      imageAlt: "Alignement de bouteilles de vins blancs dégustées",
      tags: ["Vins blancs", "Découverte"],
    },
    {
      title: "Tour de France des vins",
      description: "[DESCRIPTION À REMPLACER]",
      duration: "[DURÉE]",
      participants: "[NOMBRE DE PARTICIPANTS]",
      price: "[PRIX INDICATIF À REMPLACER]",
      image: "/images/lineup-jardin.jpeg",
      imageAlt: "Sélection de bouteilles présentée en extérieur",
      tags: ["Régions", "Panorama"],
    },
    {
      title: "Initiation à la dégustation à l’aveugle",
      description: "[DESCRIPTION À REMPLACER]",
      duration: "[DURÉE]",
      participants: "[NOMBRE DE PARTICIPANTS]",
      price: "[PRIX INDICATIF À REMPLACER]",
      image: "/images/degustation-table.jpeg",
      imageAlt: "Participants concentrés pendant une dégustation à table",
      tags: ["À l’aveugle", "Initiation"],
    },
    {
      title: "Événements d’entreprise",
      description: "[DESCRIPTION À REMPLACER]",
      duration: "[DURÉE]",
      participants: "[NOMBRE DE PARTICIPANTS]",
      price: "[PRIX INDICATIF À REMPLACER]",
      image: "/images/moment-convivial.jpeg",
      imageAlt: "Groupe réuni à l’occasion d’un événement convivial",
      tags: ["Entreprise", "Sur mesure"],
    },
    {
      title: "EVG",
      description: "[DESCRIPTION À REMPLACER]",
      duration: "[DURÉE]",
      participants: "[NOMBRE DE PARTICIPANTS]",
      price: "[PRIX INDICATIF À REMPLACER]",
      image: "/images/concours-degustation.jpeg",
      imageAlt: "Moment d’échange autour d’une table de dégustation",
      tags: ["Groupe", "Convivial"],
    },
    {
      title: "Dégustation privée sur mesure",
      description: "[DESCRIPTION À REMPLACER]",
      duration: "[DURÉE]",
      participants: "[NOMBRE DE PARTICIPANTS]",
      price: "[PRIX INDICATIF À REMPLACER]",
      image: "/images/cave-barriques.jpeg",
      imageAlt: "Barriques de vin dans une cave en pierre",
      tags: ["Privé", "Personnalisé"],
    },
  ] satisfies Service[],
  tastingsIntro: {
    eyebrow: "Carnet de dégustation",
    title: "Quelques line-ups, bientôt racontés.",
    description: "Ces entrées sont des exemples de mise en page. Remplacez-les par vos dégustations réelles dans le fichier de contenu.",
  },
  // Ajouter ici les dégustations réellement réalisées.
  tastings: [
    {
      title: "[TITRE DE LA DÉGUSTATION 01]",
      date: "[DATE OPTIONNELLE]",
      theme: "[THÈME À REMPLACER]",
      image: "/images/lineup-long.jpeg",
      imageAlt: "Long alignement de bouteilles préparées pour une dégustation",
      wines: ["[VIN 01]", "[VIN 02]", "[VIN 03]"],
      comment: "[COMMENTAIRE À REMPLACER]",
    },
    {
      title: "[TITRE DE LA DÉGUSTATION 02]",
      theme: "[THÈME À REMPLACER]",
      image: "/images/lucas-degustation-exterieur.jpeg",
      imageAlt: "Lucas Semaan observant un verre lors d’une dégustation en extérieur",
      comment: "[COMMENTAIRE À REMPLACER]",
    },
    {
      title: "[TITRE DE LA DÉGUSTATION 03]",
      date: "[DATE OPTIONNELLE]",
      theme: "[THÈME À REMPLACER]",
      image: "/images/lineup-jardin.jpeg",
      imageAlt: "Bouteilles de vin alignées dans un jardin",
      comment: "[COMMENTAIRE À REMPLACER]",
    },
  ] satisfies Tasting[],
  awardsIntro: {
    eyebrow: "Concours & Palmarès",
    title: "L’exigence du collectif et du palais.",
    description: "[TEXTE D’INTRODUCTION AU PALMARÈS À REMPLACER]",
    image: "/images/groupe-concours.jpeg",
    imageAlt: "Groupe réuni à l’issue d’un concours de dégustation",
  },
  // Ajouter ici les résultats de concours.
  awards: [
    { year: "[ANNÉE]", competition: "[CONCOURS]", result: "[RÉSULTAT À REMPLACER]" },
    { year: "[ANNÉE]", competition: "[CONCOURS]", result: "[RÉSULTAT À REMPLACER]", team: "[ÉQUIPE ÉVENTUELLE]" },
    { year: "[ANNÉE]", competition: "[CONCOURS]", result: "[RÉSULTAT À REMPLACER]", distinction: "[DISTINCTION ÉVENTUELLE]" },
  ] satisfies Award[],
  expertise: [
    { title: "Œnologue", text: "[EXPERTISE ŒNOLOGIQUE À REMPLACER]" },
    { title: "Ingénieur viticole", text: "[EXPERTISE VITICOLE À REMPLACER]" },
    { title: "Sommelier privé", text: "[APPROCHE DE LA SOMMELLERIE À REMPLACER]" },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Imaginons votre prochaine dégustation.",
    description: "Prestations pour particuliers et entreprises, principalement autour de Rennes.",
    email: "[EMAIL]",
    phone: "[TÉLÉPHONE]",
    instagram: "[INSTAGRAM]",
    linkedin: "[LINKEDIN]",
  },
  seo: {
    title: "Lucas SEMAAN — Œnologue & Sommelier privé à Rennes",
    description: "[DESCRIPTION SEO À REMPLACER]",
    canonical: "[URL CANONIQUE À REMPLACER]",
  },
} as const;
