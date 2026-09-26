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
    role: "Œnologue & Sommelier privé",
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
    title: "Œnologue & Sommelier privé",
    statement: "Venez passer un moment convivial et en apprendre plus sur le vin",
    description: "Amateur ou confirmé, le monde du vin s'ouvre à vous",
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
    role: "Œnologue & Sommelier privé",
    biography: "Passionné du vin et de son univers, j'ai plongé dans cet univers jusqu'à en faire mon métier.",
    philosophy: "Oenologue vs Sommelier ? Un sommelier est un connaisseur aguerri de la dégustation et du service du vin. Il connaît et reconnaît les cépages et appellations en un clin d'oeil. Un oenologue est un maître faiseur du vin. Il comprend et sait accompagner le vin de la vendange à la dégustation avec une main experte ",
    image: "/images/lucas-degustation-portrait.jpeg",
    imageAlt: "Lucas Semaan lors d’une séance de dégustation de vins",
  },
  servicesIntro: {
    eyebrow: "Exemple de moments",
    title: "Des dégustations pensées pour vous.",
    description: "Quel que soit votre moment, nous construirons ensemble le moment idéal pour vous.",
    startingPrice: "Prestations à partir de 20 € par personne", /*attention à la mise en page pour ne pas séparer le euros du 20*/
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
      description: "Découvrons les vins blancs, rouges et rosés de nos beaux terroirs français lors d'une dégustation thématique en 4 à 12 vins",
      duration: "2h minimum",
      participants: "à partir de 4 personnes",
      price: "à partir de 20 euros par personne",
      image: "/images/service-tour-vins-france.jpeg",
      imageAlt: "Six bouteilles de vins français présentées pour une dégustation",
      tags: ["Vins", "Découverte"],
    },
    {
      title: "A la découverte de Meursault",
      description: "Comprendre une couleur en profondeur et devenez capable de différencier à coup sûr différents cépages et appellation de France",
      duration: "2h minimum",
      participants: "à partir de 4 personnes",
      price: "à partir de 20 euros par personne",
      image: "/images/lineup-jardin.jpeg",
      imageAlt: "Sélection de bouteilles présentée en extérieur",
      tags: ["Régions", "Panorama"],
    },
    {
      title: "Initiation à la dégustation à l’aveugle",
      description: "Apprenez pas à pas à déguster des vins.",
      duration: "2h minimum",
      participants: "à partir de 4 personnes",
      price: "à partir de 20 euros par personne",
      image: "/images/degustation-table.jpeg",
      imageAlt: "Participants concentrés pendant une dégustation à table",
      tags: ["À l’aveugle", "Initiation"],
    },
    {
      title: "Événements d’entreprise, EVG/EVJF...",
      description: "Un événement sur-mesure pour toutes les occasions",
      duration: "2h minimum",
      participants: "à partir de 4 personnes",
      price: "à partir de 20 euros par personne",
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
      theme: "Vins de Bourgognes anciens et autres",
      image: "/images/lineup-long.jpeg",
      imageAlt: "Long alignement de bouteilles préparées pour une dégustation",
      video: "/images/degustation-passee-01.mp4",
    },
    {
      title: "Dégustation de Meursault au pied des vignes",
      theme: "Meursault et autres vins de Bourgogne",
      image: "/images/degustation-passee-02.jpeg",
      imageAlt: "Line-up de bouteilles de vins de Bourgogne préparées pour une dégustation",
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
    { title: "Œnologue", text: "Sachant faire du vin, je vous guiderai dans la compréhension de celui-ci." },
    { title: "Ingénieur viticole", text: "Connaissant la façon de cultiver la vigne, les terroirs et les procédés à la vigne n’auront plus de mystère pour vous." },
    { title: "Sommelier privé", text: "Amoureux de la dégustation, je vous accompagnerai dans le voyage de l’identification des vins." },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Imaginons votre prochaine dégustation.",
    description: "Prestations pour particuliers et entreprises, principalement autour de Rennes.",
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
    title: "Lucas SEMAAN — Œnologue & Sommelier privé à Rennes",
    description: "Lucas Semaan propose des dégustations de vin conviviales et sur mesure à Rennes, pour particuliers, entreprises et événements.",
    canonical: "",
  },
} as const;
