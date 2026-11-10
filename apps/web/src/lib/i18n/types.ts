export type Locale = "en" | "es" | "fr";

export interface LocaleConfig {
  code: Locale;
  label: string;
  name: string;
  flag: string;
}

export interface AboutTranslation {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    whois: string;
    insuredBadge: string;
    name: string;
    titleSuffix: string;
    roles: {
      gis: string;
      landAnalyst: string;
      mapping: string;
      insured: string;
    };
    bioParagraphs: string[];
  };
  insurance: {
    sectionTitle: string;
    statusBadge: string;
    intro: {
      prefix: string;
      lloydsText: string;
      viaText: string;
      cfcText: string;
      andText: string;
      zensuranceText: string;
      suffix: string;
    };
    territorialScope: string;
    cards: Array<{
      title: string;
      limit: string;
      subtext: string;
      desc: string;
    }>;
    table: {
      headerTitle: string;
      securityNote: string;
      items: Array<{
        title: string;
        limit: string;
        detail: string;
      }>;
    };
    documents: {
      viewDoc: string;
      download: string;
      items: Array<{
        title: string;
        filename: string;
        url: string;
        size: string;
        description: string;
        type: string;
      }>;
    };
  };
  certifications: {
    sectionTitle: string;
    intro: string;
    zoomHint: string;
    items: Array<{
      title: string;
      issuer: string;
      description: string;
    }>;
  };
  education: {
    sectionTitle: string;
    items: Array<{
      institution: string;
      degree: string;
      image: string;
      url: string;
    }>;
  };
  expertise: {
    sectionTitle: string;
    items: string[];
  };
  approach: {
    sectionTitle: string;
    paragraphs: string[];
    badges: string[];
  };
  engineering: {
    sectionTitle: string;
    dossierBadge: string;
    statusBadge: string;
    roleTag: string;
    title: string;
    subtitle: string;
    quote: string;
    description: string;
    availabilityHeading: string;
    availabilityText: string;
    buttons: {
      portfolio: string;
      github: string;
      linkedin: string;
      email: string;
    };
  };
}

export interface ServiceModuleTranslation {
  id: string;
  code: string;
  title: string;
  summary: string;
  services: string[];
  deliverables: string[];
  outcome: string;
  sampleCases?: Array<{
    title: string;
    description: string;
    image: string;
    linkUrl?: string;
    linkLabel?: string;
  }>;
}

export interface ServicesTranslation {
  meta: {
    title: string;
    description: string;
  };
  header: {
    returnLink: string;
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    metrics: {
      modules: string;
      serviceLines: string;
      outputs: string;
    };
  };
  tabs: {
    services: string;
    clients: string;
  };
  modulesSection: {
    linesSuffix: string;
    outcomeLabel: string;
    serviceLinesLabel: string;
    typicalOutputsLabel: string;
    sampleWorkTitle: string;
    realFieldDataBadge: string;
    viewRecord: string;
  };
  clientsSection: {
    badge: string;
    title: string;
    description: string;
    listedClientsLabel: string;
    websiteFieldLabel: string;
    websiteFieldStatus: string;
    visitButton: string;
    linkPending: string;
    clientNotes?: Record<string, string>;
  };
  operationalFlow: {
    tag: string;
    title: string;
    steps: string[];
  };
  nextAction: {
    indexTag: string;
    actionTag: string;
    description: string;
    button: string;
  };
  modules: ServiceModuleTranslation[];
}

export interface ContactTranslation {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  form: {
    cardBadge: string;
    cardDesc: string;
    labels: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      requiredNote: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      serviceSelect: string;
      message: string;
    };
    buttons: {
      submit: string;
      sending: string;
    };
    status: {
      success: string;
      errorDefault: string;
      errorNetwork: string;
    };
    services: Array<{
      value: string;
      label: string;
    }>;
  };
  routes: Array<{
    id: string;
    title: string;
    bestFor: string;
    description: string;
    label: string;
    href: string;
    external?: boolean;
  }>;
  newsletter: {
    badge: string;
    title: string;
    description: string;
  };
  legal: {
    badge: string;
    trustedTag: string;
    title: string;
    description: string;
    firms: Array<{
      name: string;
      focus: string;
      desc: string;
      href: string;
      button: string;
    }>;
  };
  notice: string[];
  checklist: {
    badge: string;
    items: string[];
  };
}

export interface HomeTranslation {
  meta: {
    title: string;
    description: string;
  };
  cinematicHero: {
    evolutionLabel: string;
    serviceRegistryHeader: string;
    serviceRegistryTitle: string;
    serviceRegistryItems: string[];
    mainBadge: string;
    mainTitleLine: string;
    mainTitleHighlight: string;
    mainDescription: string;
    ctaMap: string;
    ctaServices: string;
  };
  serviceRegistry: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    buttonReview: string;
    servicesFeed: string;
    entriesSuffix: string;
    showLess: string;
    expandSection: string;
    seeAllEntries: string;
    systemTotals: string;
    outputIndex: string;
    fieldNoteLabel: string;
    fieldNoteText: string;
    nextActionLabel: string;
    reviewSpecification: string;
    seeAllDetails: string;
  };
  projectPreview: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    viewAll: string;
    showing: string;
    available: string;
    statusForSale: string;
    statusActive: string;
    viewDossier: string;
    defaultSummary: string;
    ctaText: string;
    ctaMap: string;
    ctaForSale: string;
  };
  listingMembership: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    bestForLabel: string;
    featuresLabel: string;
    plans: Array<{
      id: string;
      name: string;
      tag: string;
      price: string;
      period: string;
      promoBadge?: string;
      description: string;
      idealFor: string;
      features: string[];
      ctaText: string;
    }>;
    partnersBanner: {
      badge: string;
      title: string;
      ctaPartner: string;
      ctaDiscuss: string;
      targetAudiences: Array<{
        role: string;
        benefit: string;
      }>;
    };
  };
  accomplishments: {
    badge: string;
    title: string;
    intro1: string;
    intro2: string;
    keyAreasLabel: string;
    items: Array<{
      title: string;
      summary: string;
      areas: string[];
    }>;
  };
  pastClients: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    seeAll: string;
    verifiedClient: string;
    website: string;
    viewInArchive: string;
    calloutTitle: string;
    calloutDesc: string;
    calloutBtn: string;
    spotlightCategories: Record<string, string>;
    spotlightNotes: Record<string, string>;
  };
  globalTelemetry: {
    title: string;
    satelliteActive: string;
    viewMap: string;
  };
  certifications: {
    badge: string;
    title: string;
    description: string;
  };
  fieldReports: {
    title: string;
    titleHighlight: string;
    description: string;
    readMore: string;
    readLess: string;
    presentationLink: string;
    reports: Array<{
      text: string;
      author: string;
      role: string;
      link?: string;
    }>;
  };
  tickerBanner: {
    partnersLabel: string;
    tickerText: string;
    learnMore: string;
    dismiss: string;
  };
  footer: {
    tagline: string;
    nav: {
      about: string;
      services: string;
      portfolio: string;
      mapView: string;
      properties: string;
      partners: string;
      fieldReports: string;
      contact: string;
      clientPortal: string;
    };
    systemStatus: string;
    rightsReserved: string;
    architectLabel: string;
    softwareEngineerRole: string;
    portfolioLink: string;
  };
  newsletter: {
    title: string;
    intro: string;
    placeholder: string;
    submit: string;
    submitting: string;
    success: string;
    errorDefault: string;
    errorNetwork: string;
  };
}

export interface MapTranslation {
  meta: {
    title: string;
    description: string;
  };
  sidebar: {
    databaseBadge: string;
    titleLine1: string;
    titleLine2: string;
    availableAssetsOnly: string;
    filterPrefix: string;
    identifiedTargets: string;
    saleBadge: string;
    locPrefix: string;
    closeList: string;
  };
  mapOverlay: {
    projectsBtn: string;
    tagsLabel: string;
    allBtn: string;
    disclaimer: string;
  };
  dossier: {
    targetLocked: string;
    availableBadge: string;
    regionLabel: string;
    coordLabel: string;
    accessDossier: string;
  };
}

export interface ProjectsPageTranslation {
  meta: {
    projectsTitle: string;
    projectsDescription: string;
    propertiesTitle: string;
    propertiesDescription: string;
  };
  header: {
    assetDatabase: string;
    propertyRegistry: string;
    projectsTitleLine1: string;
    projectsTitleLine2: string;
    propertiesTitleLine1: string;
    propertiesTitleLine2: string;
    spatialAccess: string;
    viewOnMap: string;
    moreProjects: string;
    propertiesSubtitle: string;
  };
  controls: {
    searchPlaceholder: string;
    all: string;
    forSale: string;
    sold: string;
    fossilsAgatesGems: string;
    displayingRecords: string;
    forSaleOnlyBadge: string;
    soldOnlyBadge: string;
    typePrefix: string;
    tagPrefix: string;
    systemStatusOnline: string;
    systemStatusNoMatch: string;
  };
  card: {
    availableForAcquisition: string;
    sold: string;
    acquired: string;
    clientProjects: string;
    readMore: string;
    showLess: string;
    share: {
      button: string;
      title: string;
      message: string;
      copyLink: string;
      copied: string;
      email: string;
      more: string;
      close: string;
    };
  };
  detail: {
    projectNotFound: string;
    backToProjects: string;
    back: string;
    dossier: string;
    documentSections: string;
    jumpToSection: string;
    toggleOutline: string;
    dossierSummary: string;
    executiveOverview: string;
    sections: string;
    selectSection: string;
    clientProjects: string;
    projectImage: string;
    downloadPdf: string;
    watchOnVimeo: string;
    invalidVideo: string;
    locationContext: string;
    openInGoogleMaps: string;
    quickFacts: string;
    location: string;
    availability: string;
    forSale: string;
    active: string;
    projectRelations: string;
    parentProject: string;
    subProjects: string;
    projectMeta: string;
    author: string;
    date: string;
    tags: string;
  };
  extendedArchive: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
  };
  noResults: {
    heading: string;
    noMatch: string;
    matchingInOther: string;
    checkBroader: string;
    modifySearch: string;
    viewInOther: string;
    displayOther: string;
    resetQuery: string;
  };
}



