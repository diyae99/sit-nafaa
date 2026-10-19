// Contenus et métadonnées NAFAE. Les coordonnées non confirmées restent vides.
export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  position?: string;
};
export type Cycle = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  accent: string;
  photoId?: string;
  details: { title: string; text: string; followup: string }[];
};
export const photos: Photo[] = [
  {
    id: "hall",
    src: "/images/nafae-hall.jpg",
    width: 738,
    height: 415,
    alt: "Hall du Groupe Scolaire NAFAE avec comptoir d’accueil, escalier et cloisons vitrées",
    title: "Le hall de l’établissement",
    description:
      "Le hall réunit le comptoir d’accueil, l’escalier et les espaces vitrés de l’établissement. Une première vue pour découvrir l’univers NAFAE.",
    position: "center",
  },
  {
    id: "sport",
    src: "/images/nafae-sport.jpg",
    width: 597,
    height: 335,
    alt: "Terrain de sport extérieur de NAFAE avec paniers de basket et enceinte grillagée",
    title: "Le terrain de sport",
    description:
      "Le terrain en toiture offre un autre point de vue sur l’établissement. La photographie permet d’en découvrir le tracé et les équipements visibles.",
    position: "center",
  },
  {
    id: "accueil",
    src: "/images/nafae-accueil.jpg",
    width: 387,
    height: 516,
    alt: "Comptoir de l’accueil NAFAE et espace vitré donnant sur l’entrée",
    title: "L’espace d’accueil",
    description:
      "Le comptoir et les grandes baies vitrées donnent à voir l’espace d’accueil, point d’entrée dans la vie de l’école.",
    position: "center",
  },
];
export const schoolPhoto: Photo = {
  id: "exterieur",
  src: "/images/nafae-exterieur.jpg",
  width: 335,
  height: 597,
  alt: "Vue extérieure du Groupe Scolaire NAFAE à Tanger et de son terrain de sport en toiture",
  title: "Le bâtiment et son terrain en toiture",
  description:
    "Une vue extérieure pour situer les différents niveaux du bâtiment et découvrir le terrain aménagé sur sa toiture.",
  position: "center",
};
export const cycles: Cycle[] = [
  {
    slug: "maternelle",
    title: "Maternelle",
    tagline: "Les premières découvertes",
    icon: "flower",
    accent: "pink",
    description:
      "Découvrir l’école, développer le langage et apprendre à vivre avec les autres. La maternelle pose les premiers repères scolaires à travers le jeu, l’expression et l’exploration.",
    details: [
      {
        title: "Découvrir et s’éveiller",
        text: "L’entrée en maternelle marque une première rencontre avec les habitudes de l’école. Jouer, observer, nommer et raconter aident l’enfant à explorer ce qui l’entoure et à enrichir son langage.",
        followup:
          "Ces découvertes donnent progressivement des repères : reconnaître les moments de la journée, comprendre une consigne simple et prendre part à une activité avec les autres.",
      },
      {
        title: "Apprendre à son rythme",
        text: "Chaque enfant aborde les nouveautés avec sa sensibilité et ses expériences. Les premiers apprentissages demandent du temps pour essayer, recommencer et mettre des mots sur ce que l’on découvre.",
        followup:
          "Le plaisir de participer et la valorisation des petits progrès contribuent à construire une relation confiante avec l’école.",
      },
      {
        title: "L’accompagnement de l’enfant",
        text: "Préparer l’entrée à l’école passe aussi par un échange avec la famille. L’âge de l’enfant, ses habitudes et les questions des parents sont des points utiles à aborder avant une inscription.",
        followup:
          "Contactez le Groupe Scolaire NAFAE pour connaître les niveaux de maternelle proposés et les étapes à prévoir pour cette première rentrée.",
      },
    ],
  },
  {
    slug: "primaire",
    title: "Primaire",
    tagline: "Le plaisir d’apprendre",
    icon: "book",
    accent: "gold",
    description:
      "Lire, écrire, compter et apprendre à raisonner : le primaire construit les connaissances fondamentales tout en développant la curiosité et l’autonomie.",
    details: [
      {
        title: "Construire les apprentissages",
        text: "Le primaire donne des bases pour comprendre un texte, s’exprimer par écrit, utiliser les nombres et résoudre des problèmes. Les connaissances se construisent dans la durée, avec des occasions régulières de les mobiliser.",
        followup:
          "Apprendre à expliquer une réponse, à comparer des démarches et à vérifier son travail aide l’élève à mieux comprendre ce qu’il fait.",
      },
      {
        title: "Cultiver la curiosité",
        text: "Les questions du quotidien peuvent devenir des occasions d’apprendre : observer un phénomène, chercher une information ou découvrir un nouveau mot. Cette curiosité relie les connaissances scolaires au monde qui entoure l’enfant.",
        followup:
          "Lire, échanger et confronter ses idées permettent d’élargir ses repères tout en développant le goût de l’effort et de la recherche.",
      },
      {
        title: "L’accompagnement de l’élève",
        text: "Au fil du primaire, l’enfant apprend à préparer ses affaires, à suivre des consignes et à organiser des tâches simples. L’autonomie se construit progressivement, avec des repères compréhensibles.",
        followup:
          "Pour préparer une arrivée à NAFAE, échangez avec l’établissement sur le niveau demandé, le parcours déjà suivi et les démarches d’inscription.",
      },
    ],
  },
  {
    slug: "college",
    title: "Collège",
    tagline: "De nouveaux horizons",
    icon: "compass",
    accent: "sage",
    description:
      "Approfondir ses connaissances, organiser son travail et développer son esprit critique. Le collège accompagne une étape importante de la construction personnelle et du parcours scolaire.",
    details: [
      {
        title: "Approfondir les connaissances",
        text: "Le collège invite à aller au-delà de la restitution d’une leçon : relier des notions, comprendre des documents et justifier un raisonnement deviennent des habitudes de travail importantes.",
        followup:
          "Cette étape permet d’élargir ses connaissances et de gagner en précision dans son expression, à l’oral comme à l’écrit.",
      },
      {
        title: "Développer l’autonomie",
        text: "Répartir son travail, anticiper une échéance et identifier ce qui demande à être repris sont des compétences qui se construisent au collège. Elles aident l’élève à devenir davantage acteur de ses apprentissages.",
        followup:
          "Savoir demander une explication et porter un regard sur ses erreurs fait aussi partie de cette progression vers une plus grande autonomie.",
      },
      {
        title: "L’accompagnement de l’élève",
        text: "Le passage au collège soulève souvent des questions sur les méthodes de travail et les nouveaux repères scolaires. Un premier échange permet aux familles de présenter le parcours de leur enfant et leurs attentes.",
        followup:
          "Renseignez-vous auprès du Groupe Scolaire NAFAE sur les possibilités d’inscription et les modalités correspondant à la classe souhaitée.",
      },
    ],
  },
  {
    slug: "lycee",
    title: "Lycée",
    tagline: "Un regard vers l’avenir",
    icon: "cap",
    accent: "sand",
    description:
      "Consolider ses acquis, préparer le baccalauréat et réfléchir à son orientation. Le lycée permet de construire progressivement son projet d’études et de gagner en autonomie.",
    details: [
      {
        title: "Préparer la suite du parcours",
        text: "Au lycée, les connaissances et les méthodes acquises prennent place dans un travail plus approfondi. Analyser une question, construire une argumentation et présenter une démarche claire contribuent à préparer les échéances scolaires.",
        followup:
          "La préparation du baccalauréat s’inscrit dans une progression régulière qui associe compréhension, entraînement et organisation personnelle.",
      },
      {
        title: "Construire son projet",
        text: "Réfléchir à son orientation demande de mieux connaître ses centres d’intérêt, ses points d’appui et les exigences des études envisagées. Prendre le temps de se renseigner aide à formuler des choix plus réfléchis.",
        followup:
          "Les questions sur les filières accessibles et les poursuites d’études méritent d’être abordées assez tôt avec l’établissement et la famille.",
      },
      {
        title: "L’accompagnement de l’élève",
        text: "Préparer une inscription au lycée nécessite de préciser le niveau demandé et le parcours antérieur. Cet échange est aussi l’occasion de présenter les objectifs d’études de l’élève.",
        followup:
          "Contactez NAFAE pour vérifier les possibilités au niveau et dans la filière souhaités, ainsi que les documents nécessaires à l’examen de la demande.",
      },
    ],
  },
];
export const pedagogy = [
  {
    title: "Apprendre avec curiosité",
    icon: "book",
    text: "Poser des questions, explorer et comprendre : la curiosité donne du sens aux apprentissages et nourrit l’envie de découvrir.",
  },
  {
    title: "Grandir en confiance",
    icon: "heart",
    text: "Apprendre demande du temps, des efforts et des encouragements. Valoriser les progrès aide chaque élève à avancer et à prendre confiance en ses capacités.",
  },
  {
    title: "S’ouvrir aux autres",
    icon: "globe",
    text: "Écouter, partager et coopérer permettent de trouver sa place dans le groupe et d’apprendre à vivre ensemble dans le respect.",
  },
];
export const cambridgeAxes = [
  {
    title: "Parcours linguistique",
    icon: "globe",
    text: "Un parcours adapté commence par le niveau et les objectifs de votre enfant. Découvrez les possibilités auprès de l’établissement.",
  },
  {
    title: "Préparation aux examens",
    icon: "book",
    text: "Niveau visé, format des épreuves et préparation : échangez avec l’école pour préciser les étapes à envisager.",
  },
  {
    title: "Accompagnement",
    icon: "people",
    text: "Posez vos questions sur les prérequis et l’organisation pour préparer sereinement le parcours d’anglais de votre enfant.",
  },
];
export const schoolLife = [
  {
    title: "Des moments à partager",
    icon: "people",
    text: "Les échanges entre élèves donnent une dimension collective à la scolarité. Écouter, partager une idée et coopérer sont autant d’occasions d’apprendre à vivre ensemble.",
  },
  {
    title: "La curiosité au quotidien",
    icon: "flower",
    text: "Une question, une lecture ou une découverte peut ouvrir de nouvelles pistes de réflexion. Encourager cette attention au monde nourrit le plaisir d’apprendre.",
  },
  {
    title: "Bouger et s’épanouir",
    icon: "ball",
    text: "Le mouvement et les temps partagés font aussi partie de l’expérience scolaire. Découvrez le terrain de sport de NAFAE dans la galerie de l’établissement.",
  },
];
export const faq = [
  {
    question: "Quels niveaux sont proposés ?",
    answer:
      "Le Groupe Scolaire NAFAE accueille les élèves en maternelle, au primaire, au collège et au lycée. Contactez l’établissement pour connaître les possibilités d’inscription au niveau souhaité.",
  },
  {
    question: "Comment connaître les frais de scolarité ?",
    answer:
      "L’établissement vous renseigne directement sur les tarifs et les modalités correspondant au cycle et à l’année scolaire concernés.",
  },
  {
    question: "Quels documents préparer pour une inscription ?",
    answer:
      "L’équipe administrative vous communiquera la liste des documents et les étapes à suivre selon le niveau demandé et la situation de l’élève.",
  },
];
export const site = {
  name: "Groupe Scolaire NAFAE",
  shortName: "NAFAE",
  brandLabel: "GROUPE SCOLAIRE",
  logo: {
    src: "/images/nafae-logo-transparent.png",
    width: 1490,
    height: 1055,
    alt: "Groupe Scolaire NAFAE",
  },
  contact: {
    address: "",
    phone: "",
    email: "",
    hours: "",
    mapUrl: "",
  },
  instagram: "https://www.instagram.com/groupescolairenafae/",
  nav: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Notre école",
      href: "/notre-ecole",
    },
    {
      label: "Nos cycles",
      href: "/nos-cycles",
    },
    {
      label: "Vie scolaire",
      href: "/vie-scolaire",
    },
    {
      label: "Cambridge",
      href: "/cambridge",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  hero: {
    eyebrow: "Bienvenue au Groupe Scolaire NAFAE",
    title: "Apprendre, grandir et s’épanouir",
    intro:
      "À Tanger, le Groupe Scolaire NAFAE accueille les élèves de la maternelle au lycée. Découvrez notre établissement, notre projet éducatif et les espaces qui accompagnent la vie scolaire.",
    photoId: "hall",
    photoCaption: "Entrez dans l’univers NAFAE",
    primary: "Découvrir notre école",
    secondary: "Réserver une visite",
  },
  school: {
    eyebrow: "Notre école",
    title: "Un cadre pour apprendre.\nUne place pour chacun.",
    intro:
      "Choisir une école, c’est choisir un cadre dans lequel son enfant pourra apprendre, trouver sa place et construire son avenir. Au Groupe Scolaire NAFAE, à Tanger, notre ambition est de faire grandir ensemble les connaissances, la curiosité et la confiance en soi, de la maternelle au lycée.",
    body: "Le Groupe Scolaire NAFAE est une école privée à Tanger qui accueille les élèves de la maternelle au lycée. Notre projet éducatif relie l’acquisition des connaissances au développement de la curiosité, de l’autonomie et du respect des autres.",
    photoId: "exterieur",
    pageTitle: "Bienvenue dans notre école",
    pageIntro:
      "Découvrez le Groupe Scolaire NAFAE à Tanger : un établissement où le parcours scolaire se pense dans la continuité, des premières découvertes en maternelle aux projets d’orientation du lycée.",
    presentationTitle: "L’établissement",
    pedagogyTitle: "Notre projet pédagogique",
    pedagogyText:
      "Donner du sens aux apprentissages, encourager la participation et développer l’autonomie : ces objectifs guident notre vision de l’éducation. Notre ambition est d’aider les élèves à acquérir des connaissances et à apprendre à les mobiliser avec réflexion.",
  },
  cycleSection: {
    eyebrow: "De la maternelle au lycée",
    title: "Un parcours à chaque étape",
    intro:
      "Chaque étape de la scolarité apporte de nouveaux apprentissages et de nouveaux repères. Découvrez les cycles du Groupe Scolaire NAFAE, de l’entrée en maternelle à la préparation des études supérieures.",
  },
  pedagogySection: {
    eyebrow: "Pédagogie & accompagnement",
    title: "Faire grandir\nle plaisir d’apprendre.",
    intro:
      "Comprendre ce que l’on apprend, participer et progresser : notre projet pédagogique s’appuie sur des repères qui donnent du sens au travail scolaire et encouragent l’autonomie.",
  },
  cambridge: {
    logo: {
      src: "/images/brands/cambridge-english.svg",
      alt: "Cambridge Assessment English",
      source: "https://candidates.cambridgeenglish.org/common/images/cambridge-assessment-english-logo.svg",
    },
    languageTitle: "Comprendre.\nS’exprimer.\nÉchanger.",
    eyebrow: "Langues & certifications",
    title: "S’ouvrir au monde\navec Cambridge English",
    intro:
      "Comprendre, s’exprimer et oser échanger : apprendre l’anglais ouvre de nouvelles perspectives. Pour connaître les parcours liés à Cambridge English et les modalités de préparation aux certifications, renseignez-vous auprès de l’établissement.",
    pageTitle: "Cambridge English",
    pageIntro:
      "Découvrez le volet linguistique du Groupe Scolaire NAFAE et les questions à poser pour préparer un parcours d’anglais adapté au niveau et aux objectifs de votre enfant.",
    body: "Apprendre une langue, c’est pouvoir comprendre des messages, exprimer ses idées et entrer en relation avec les autres. Le volet Cambridge English invite à réfléchir aux étapes de cet apprentissage et aux objectifs que l’élève souhaite atteindre.",
    note: "Les parcours proposés, les niveaux concernés et les modalités de préparation sont à confirmer directement auprès de l’établissement.",
    cta: "Demander des informations",
    panelTitle: "Une langue,\nde nouveaux horizons.",
    panelText:
      "De premiers échanges à une expression plus autonome, chaque progrès en anglais élargit les possibilités de communiquer et de découvrir d’autres cultures.",
  },
  spaces: {
    eyebrow: "Espaces & équipements",
    title: "Découvrez les lieux de NAFAE",
    intro:
      "Les lieux font partie de l’expérience scolaire. Découvrez le bâtiment, les espaces d’accueil et les installations sportives du Groupe Scolaire NAFAE à travers les photographies de l’établissement.",
  },
  life: {
    eyebrow: "La vie à NAFAE",
    title: "Apprendre, découvrir, partager",
    intro:
      "La vie à l’école se construit aussi dans les échanges, les découvertes et les moments partagés. Cet espace présente les activités et les projets qui rythment la vie de notre communauté scolaire.",
    pageTitle: "Vie scolaire & galerie",
    pageIntro:
      "Au-delà des apprentissages en classe, la scolarité est faite de rencontres et de découvertes. Explorez les espaces de NAFAE et découvrez en images le cadre de cette vie collective.",
    galleryTitle: "Notre établissement en images",
  },
  visit: {
    eyebrow: "Rencontrons-nous",
    title: "Venez découvrir\nnotre établissement",
    text: "Venez découvrir les lieux et poser vos questions sur la scolarité de votre enfant. Contactez l’établissement pour connaître les possibilités de visite et convenir d’un rendez-vous.",
    cta: "Réserver une visite",
  },
  contactSection: {
    eyebrow: "Restons en contact",
    title: "Une question ?\nParlons-en.",
    intro:
      "Une question sur les cycles, les inscriptions ou la vie scolaire ? Présentez votre demande à l’équipe du Groupe Scolaire NAFAE afin d’obtenir les informations adaptées à votre situation.",
    pageTitle: "Contact & préinscription",
    pageIntro:
      "Une question sur les cycles, les inscriptions ou la vie scolaire ? Présentez votre demande à l’équipe du Groupe Scolaire NAFAE afin d’obtenir les informations adaptées à votre situation.",
  },
  admissions: {
    title: "Préinscription",
    intro:
      "Vous envisagez une inscription au Groupe Scolaire NAFAE ? Indiquez le niveau souhaité et vos coordonnées pour préparer un premier échange avec l’établissement. La préinscription constitue une demande de contact et ne vaut pas admission définitive.",
    steps: [
      "Prendre contact",
      "Découvrir l’établissement",
      "Préparer l’inscription",
    ],
    stepDescriptions: [
      "Précisez le cycle recherché et les questions que vous souhaitez aborder pour préparer un échange utile avec l’établissement.",
      "Renseignez-vous sur les possibilités de rendez-vous pour découvrir les lieux et discuter du parcours de votre enfant.",
      "Demandez la liste des pièces nécessaires et les modalités applicables au niveau souhaité avant de constituer votre dossier.",
    ],
  },
  footer: {
    tagline: "Apprendre, grandir et s’épanouir.",
    schoolTitle: "Découvrir NAFAE",
    contactTitle: "Nous contacter",
    socialTitle: "Suivez notre école",
    socialText:
      "Retrouvez le compte Instagram du Groupe Scolaire NAFAE pour découvrir les publications de l’école et suivre sa vie au fil de l’année.",
    bottom: "Maquette de présentation",
  },
};
export const ui = {
  skip: "Aller au contenu",
  menu: "Menu",
  close: "Fermer",
  home: "Accueil",
  mainNav: "Navigation principale",
  footerNav: "Navigation de pied de page",
  preinscription: "Préinscription",
  discover: "Découvrir",
  ourSchool: "Notre école",
  ourCycles: "Nos cycles",
  ourSpaces: "Nos espaces",
  ourPedagogy: "Notre projet pédagogique",
  cycleOverview: "Tous nos cycles",
  cycleMenu: "Afficher les cycles",
  schoolMore: "Découvrir l’établissement",
  pedagogyMore: "Le projet pédagogique",
  lifeMore: "Découvrir la vie scolaire",
  galleryMore: "Voir toute la galerie",
  spacesMore: "Explorer nos espaces",
  backTop: "Retour en haut",
  address: "Adresse",
  phone: "Téléphone",
  email: "Email",
  hours: "Horaires d’accueil",
  toComplete: "À compléter",
  instagram: "Instagram",
  visit: "Réserver une visite",
  closeGallery: "Fermer la galerie",
  previous: "Photo précédente",
  next: "Photo suivante",
  enlarge: "Agrandir",
  formTitle: "Faisons connaissance",
  formEyebrow: "Votre premier pas vers NAFAE",
  requestVisit: "Votre demande : visite de l’établissement",
  requestCambridge: "Votre demande : Cambridge English",
  formNotice:
    "Démonstration : ce formulaire n’envoie et ne conserve aucune donnée. Les champs marqués d’un * sont obligatoires.",
  formDemo: "Formulaire de démonstration : aucune demande n’a été envoyée.",
  submit: "Valider ma demande",
  selectCycle: "Choisir un cycle",
  faq: "Vos questions, nos réponses",
  stepIntro:
    "Renseignez-vous auprès de l’établissement pour préparer les démarches correspondant à votre situation.",
  notFoundTitle: "Cette page est introuvable",
  notFoundText:
    "Retrouvez les rubriques de notre école depuis la page d’accueil.",
  backHome: "Revenir à l’accueil",
  cyclePageEyebrow: "Les cycles de NAFAE",
  cycleContact: "Se renseigner sur ce cycle",
  otherCycles: "Découvrir les autres cycles",
  allPhotos: "Tous les espaces",
  galleryFilters: [
    {
      id: "hall",
      label: "Le hall",
    },
    {
      id: "sport",
      label: "Le terrain de sport",
    },
    {
      id: "accueil",
      label: "L’accueil",
    },
  ],
  schoolLinks: [
    {
      title: "L’établissement",
      text: "Découvrez l’établissement et les objectifs de son projet éducatif.",
      href: "/notre-ecole",
      icon: "school",
    },
    {
      title: "Nos cycles",
      text: "Explorez les étapes du parcours, de la maternelle au lycée.",
      href: "/nos-cycles",
      icon: "book",
    },
    {
      title: "Nous rencontrer",
      text: "Préparez vos questions et renseignez-vous sur les possibilités de visite.",
      href: "/contact?demande=visite#formulaire",
      icon: "people",
    },
  ],
  contactCards: [
    {
      key: "address",
      label: "Nous trouver",
      icon: "pin",
    },
    {
      key: "phone",
      label: "Nous appeler",
      icon: "phone",
    },
    {
      key: "email",
      label: "Nous écrire",
      icon: "mail",
    },
    {
      key: "hours",
      label: "Nos horaires",
      icon: "clock",
    },
  ],
  discoverCycle: "Découvrir le cycle",
  discoverCambridge: "Découvrir Cambridge English",
} as const;
export const formContent = {
  labels: {
    name: "Nom du parent",
    phone: "Téléphone",
    email: "Email (facultatif)",
    cycle: "Cycle souhaité",
    message: "Message",
  },
  errors: {
    name: "Indiquez le nom du parent.",
    phone: "Indiquez un numéro de téléphone valide de 8 à 15 chiffres.",
    email: "Indiquez une adresse email valide.",
    cycle: "Choisissez un cycle.",
    message: "Écrivez un message de 10 caractères minimum.",
  },
};
export const pageContent = {
  schoolValuesTitle: "L’enfant au cœur du projet",
  schoolValuesIntro:
    "Le parcours d’un enfant ne se résume pas à ses connaissances. Trouver sa place, apprendre à coopérer et reconnaître ses progrès comptent aussi dans la construction de son avenir.",
  cycleLearningTitle: "Un parcours qui se construit ensemble",
  cycleLearningIntro:
    "Les besoins évoluent avec l’âge : premiers repères en maternelle, fondamentaux au primaire, approfondissement au collège et projet d’études au lycée. La continuité du parcours aide à donner du sens à ces étapes.",
  cycleWelcome: "Bienvenue en",
  cycleVisitTitle: "Découvrez le cycle lors d’une visite",
  cycleVisitText:
    "Une visite est l’occasion de découvrir le cadre scolaire et de poser vos questions sur le niveau qui vous intéresse. Demandez les possibilités de rendez-vous à l’établissement.",
  cambridgeDetailTitle: "Le parcours linguistique à NAFAE",
  cambridgeDetailText:
    "Un projet linguistique commence par des questions concrètes : quel est le niveau actuel de l’élève, que souhaite-t-il pouvoir faire en anglais et quelles étapes envisager ? Ces repères permettent de préparer un échange avec NAFAE.",
  cambridgePreparationTitle: "Préparer, pratiquer, progresser",
  cambridgePreparationText:
    "Les certifications évaluent des compétences à des niveaux définis. Pour envisager une préparation, il est utile de connaître les attendus de l’examen, les conditions de participation et le temps à prévoir. L’établissement vous précisera les parcours concernés et leur organisation.",
  contactDetailsTitle: "Rencontrer notre école",
  contactDetailsIntro:
    "Pour préparer votre échange, indiquez le cycle recherché et les points sur lesquels vous souhaitez être renseigné. Les coordonnées et les horaires seront publiés ici après confirmation par l’établissement.",
  galleryText:
    "Entrez dans l’univers NAFAE en images. Parcourez une sélection de photographies pour découvrir les lieux et mieux connaître l’établissement.",
  admissionStepsTitle: "Les étapes de votre rencontre avec NAFAE",
  schoolPresentationExtra:
    "Une visite et un échange avec l’établissement permettent de confronter ce projet aux besoins de votre famille : niveau recherché, parcours de l’enfant et questions sur la vie scolaire.",
  schoolValueTexts: [
    "La confiance se construit lorsque l’élève comprend ce qui est attendu et reconnaît le chemin parcouru. Encourager l’effort et donner le droit de chercher contribuent à rendre les apprentissages plus accessibles.",
    "La vie de groupe invite à écouter des points de vue différents et à respecter des règles communes. Ces expériences donnent des repères pour prendre part à une communauté scolaire.",
  ],
};
export const seoPages: Record<string, { title: string; description: string }> =
  {
    "404": {
      title: "Page introuvable | Groupe Scolaire NAFAE",
      description:
        "Retrouvez les pages du Groupe Scolaire NAFAE à Tanger : notre école, les cycles, la vie scolaire, Cambridge English et les informations de contact.",
    },
    "/": {
      title: "Groupe Scolaire NAFAE | École privée à Tanger",
      description:
        "Découvrez le Groupe Scolaire NAFAE à Tanger, de la maternelle au lycée. Explorez notre projet éducatif, nos espaces et les informations d’inscription.",
    },
    "/notre-ecole": {
      title: "Notre école et son projet pédagogique | NAFAE Tanger",
      description:
        "Découvrez le Groupe Scolaire NAFAE, école privée à Tanger, et les objectifs de son projet éducatif : curiosité, confiance, autonomie et ouverture aux autres.",
    },
    "/nos-cycles": {
      title: "Maternelle, primaire, collège et lycée | NAFAE Tanger",
      description:
        "Explorez les cycles du Groupe Scolaire NAFAE à Tanger, des premières découvertes en maternelle à la construction du projet d’études au lycée.",
    },
    "/vie-scolaire": {
      title: "Vie scolaire, espaces et galerie | Groupe Scolaire NAFAE",
      description:
        "Découvrez la vie scolaire et les photographies du Groupe Scolaire NAFAE à Tanger : hall, accueil et terrain de sport en toiture.",
    },
    "/cambridge": {
      title: "Anglais et Cambridge English | Groupe Scolaire NAFAE",
      description:
        "Renseignez-vous sur le volet Cambridge English à NAFAE Tanger : parcours d’anglais, préparation aux certifications et modalités à confirmer avec l’établissement.",
    },
    "/contact": {
      title: "Contact et visite de l’école | Groupe Scolaire NAFAE Tanger",
      description:
        "Posez vos questions sur les cycles et les inscriptions au Groupe Scolaire NAFAE à Tanger. Préparez une visite ou un premier échange avec l’établissement.",
    },
    "/preinscription": {
      title: "Préinscription de la maternelle au lycée | NAFAE Tanger",
      description:
        "Préparez votre demande de préinscription au Groupe Scolaire NAFAE à Tanger : cycle souhaité, coordonnées et questions pour un premier échange. Formulaire de démonstration.",
    },
    "/cycles/maternelle": {
      title: "Maternelle à Tanger | Groupe Scolaire NAFAE",
      description:
        "Découvrez la maternelle au Groupe Scolaire NAFAE à Tanger : premiers repères, langage, exploration et vie en groupe. Renseignez-vous sur les inscriptions.",
    },
    "/cycles/primaire": {
      title: "École primaire à Tanger | Groupe Scolaire NAFAE",
      description:
        "Découvrez le primaire au Groupe Scolaire NAFAE à Tanger : lecture, écriture, raisonnement et autonomie. Préparez un échange sur la scolarité de votre enfant.",
    },
    "/cycles/college": {
      title: "Collège à Tanger | Groupe Scolaire NAFAE",
      description:
        "Explorez le cycle collège du Groupe Scolaire NAFAE à Tanger : connaissances, méthodes de travail et autonomie. Découvrez les informations de préinscription.",
    },
    "/cycles/lycee": {
      title: "Lycée à Tanger | Groupe Scolaire NAFAE",
      description:
        "Découvrez le lycée au Groupe Scolaire NAFAE à Tanger : consolidation des acquis, préparation du baccalauréat et réflexion sur l’orientation.",
    },
  };

// Illustrations de banque uniquement pour les cartes de la section d’accueil.
export const cycleCardPhotos: Record<string, {src:string;width:number;height:number;position:string;alt:string;description:string}> = {
  maternelle:{src:'/images/cycles/maternelle.jpg',width:900,height:1350,position:'50% 38%',alt:'Enfants découvrant des jouets éducatifs en classe — photographie d’illustration',description:'Éveiller la curiosité, développer le langage et grandir en confiance.'},
  primaire:{src:'/images/cycles/primaire.jpg',width:1200,height:800,position:'85% center',alt:'Enfant lisant un livre dans une salle de classe — photographie d’illustration',description:'Construire les savoirs fondamentaux et développer le plaisir d’apprendre.'},
  college:{src:'/images/cycles/college.jpg',width:900,height:1260,position:'50% 30%',alt:'Adolescents travaillant individuellement en classe — photographie d’illustration',description:'Approfondir ses connaissances, gagner en autonomie et apprendre à raisonner.'},
  lycee:{src:'/images/cycles/lycee.jpg',width:900,height:820,position:'75% center',alt:'Adolescents plus âgés étudiant avec des manuels en classe — photographie d’illustration',description:'Préparer le baccalauréat et construire son projet d’études.'},
};
export const cycleCardsNotice = 'Photographies d’illustration : les personnes représentées ne sont pas des élèves de NAFAE.';
