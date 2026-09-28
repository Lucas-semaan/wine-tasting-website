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
  video?: string;
  wines?: string[];
  comment?: string;
};

export const site = {
  identity: {
    name: "Lucas SEMAAN",
    role: "Œnologue et sommelier privé",
    location: "Rennes et ses environs",
  },
  navigation: [
    { label: "Qui suis-je", href: "#a-propos" },
    { label: "Prestations", href: "#prestations" },
    { label: "Dégustations", href: "#degustations" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationItem[],
  navigationLabel: "Navigation principale",
  hero: {
    eyebrow: "Sommelier privé · Rennes",
    title: "Sommelier privé à Rennes",
    statement: "Partagez un moment convivial autour du vin",
    description: "Dégustations de vin pour particuliers et entreprises à Rennes et dans ses environs.",
    actions: {
      services: "Découvrir les prestations",
      contact: "Échanger sur votre projet",
    },
    image: "/images/lucas-vignes.jpeg",
    imageAlt: "Lucas Semaan dégustant un verre de vin au milieu des vignes",
  },
  about: {
    eyebrow: "À propos",
    title: "Lucas SEMAAN",
    role: "Œnologue et sommelier privé",
    biography: "Passionné par le vin, j’en ai fait mon métier. Je partage aujourd’hui cette passion à travers des dégustations conviviales, adaptées à vos envies.",
    image: "/images/lucas-degustation-portrait.jpeg",
    imageAlt: "Lucas Semaan lors d’une séance de dégustation de vins",
  },
  servicesIntro: {
    eyebrow: "Prestations",
    title: "Des dégustations pensées pour vous.",
    description: "Pour un moment entre proches ou un événement d’entreprise, construisons ensemble une dégustation qui vous ressemble.",
    startingPrice: "Prestations à partir de 20 € par personne",
    labels: {
      categories: "Catégories",
      duration: "Durée",
      participants: "Participants",
      price: "Tarif",
    },
  },
  // Ajouter ici les prestations.
  services: [
    {
      title: "Tour des vins de France",
      description: "Découvrez les vins blancs, rouges et rosés de nos terroirs français lors d’une dégustation thématique de 4 à 12 vins.",
      duration: "2 h minimum",
      participants: "à partir de 4 personnes",
      price: "à partir de 20 € par personne",
      image: "/images/service-tour-vins-france.jpeg",
      imageAlt: "Six bouteilles de vins français présentées pour une dégustation",
      tags: ["Vins", "Découverte"],
    },
    {
      title: "À la découverte de Meursault",
      description: "Découvrez les vins de Meursault et apprenez à reconnaître ce qui distingue cette appellation de Bourgogne.",
      duration: "2 h minimum",
      participants: "à partir de 4 personnes",
      price: "à partir de 20 € par personne",
      image: "/images/lineup-jardin.jpeg",
      imageAlt: "Sélection de bouteilles présentée en extérieur",
      tags: ["Régions", "Panorama"],
    },
    {
      title: "Initiation à la dégustation à l’aveugle",
      description: "Apprenez pas à pas à déguster des vins.",
      duration: "2 h minimum",
      participants: "à partir de 4 personnes",
      price: "à partir de 20 € par personne",
      image: "/images/degustation-table.jpeg",
      imageAlt: "Participants concentrés pendant une dégustation à table",
      tags: ["À l’aveugle", "Initiation"],
    },
    {
      title: "Événements d’entreprise, EVG et EVJF",
      description: "Une dégustation sur mesure pour vos événements professionnels et privés.",
      duration: "2 h minimum",
      participants: "à partir de 4 personnes",
      price: "à partir de 20 € par personne",
      image: "/images/moment-convivial.jpeg",
      imageAlt: "Groupe réuni à l’occasion d’un événement convivial",
      tags: ["Sur mesure"],
    },

  ] satisfies Service[],
  tastingsIntro: {
    eyebrow: "Carnet de dégustation",
    title: "Quelques dégustations passées en images.",
    description: "Retour sur quelques dégustations et moments de partage autour du vin.",
    winesLabel: "Vins de la dégustation",
  },
  // Ajouter ici les dégustations réellement réalisées.
  tastings: [
    {
      title: "Toutes les expressions du Chardonnay",
      date: "avril 2026",
      theme: "Vins de Bourgogne anciens et autres vins",
      image: "/images/lineup-long.jpeg",
      imageAlt: "Long alignement de bouteilles préparées pour une dégustation",
      video: "/images/degustation-passee-01.mp4",
    },
    {
      title: "Dégustation de Meursault au pied des vignes",
      theme: "Meursault et autres vins de Bourgogne",
      image: "/images/degustation-passee-02.jpeg",
      imageAlt: "Alignement de bouteilles de vins de Bourgogne préparées pour une dégustation",
    },
    {
      title: "Immense horizontale de Vincent Girardin",
      theme: "Dégustation de Meursault et autres vins de Bourgogne",
      image: "/images/tasting-vincent-girardin.jpeg",
      imageAlt: "Bouteilles de vins de Bourgogne alignées pour une dégustation",
    },
  ] satisfies Tasting[],
  expertiseIntro: {
    eyebrow: "Trois regards, une même matière",
    title: "Expertise",
  },
  expertise: [
    { title: "Œnologue", text: "Je vous aide à comprendre comment le vin est élaboré et ce qui façonne son caractère." },
    { title: "Ingénieur viticole", text: "Je vous fais découvrir la culture de la vigne, les terroirs et les pratiques viticoles." },
    { title: "Sommelier privé", text: "Je vous accompagne dans la découverte des vins et de leurs arômes, à votre rythme." },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Imaginons votre prochaine dégustation.",
    description: "Prestations pour particuliers et entreprises, sur Rennes et alentours.",
    email: "lucas.semaan@gmail.com",
    phone: "+33782188234",
    linkedin: "https://www.linkedin.com/in/lucas-semaan-2173a4209/",
    linkedinLabel: "Mon LinkedIn",
    labels: {
      email: "Email",
      phone: "Téléphone",
      linkedin: "LinkedIn",
    },
  },
  footer: {
    backToTop: "Retour en haut",
    backToTopLabel: "Retour en haut de la page",
  },
  seo: {
    title: "Lucas Semaan — Sommelier privé et œnologue à Rennes",
    description: "Lucas Semaan, sommelier privé à Rennes, propose des dégustations de vin sur mesure pour particuliers, entreprises et événements privés.",
  },
} as const;
