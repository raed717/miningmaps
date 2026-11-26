import type { Locale, MapTranslation } from "../types";

export const mapTranslations: Record<Locale, MapTranslation> = {
  en: {
    meta: {
      title: "Interactive Exploration & Mining Map — Adamson Geomatics",
      description:
        "Interactive GIS map of mining properties, mineral claims, and exploration assets across British Columbia, Canada, and global jurisdictions.",
    },
    sidebar: {
      databaseBadge: "MAP DATABASE",
      titleLine1: "Global",
      titleLine2: "Telemetry",
      saleStatus: { label: "Status", all: "All", forSale: "For sale", sold: "Sold" },
      filterPrefix: "FILTER:",
      identifiedTargets: "IDENTIFIED TARGETS",
      saleBadge: "SALE",
      locPrefix: "LOC:",
      closeList: "Close project list",
    },
    mapOverlay: {
      projectsBtn: "Projects",
      tagsLabel: "TAGS",
      allBtn: "ALL",
      disclaimer:
        "projects are displayed not at exact coordinates for security reasons",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      specimensBtn: "Fossils, agates & gems",
    },
    dossier: {
      targetLocked: "TARGET LOCKED",
      availableBadge: "AVAILABLE FOR ACQUISITION",
      regionLabel: "REGION:",
      coordLabel: "COORD:",
      accessDossier: "ACCESS FULL DOSSIER",
    },
  },
  es: {
    meta: {
      title: "Mapa Interactivo de Exploración y Minería — Adamson Geomatics",
      description:
        "Mapa SIG interactivo de proyectos mineros, concesiones de exploración y claims minerales en Columbia Británica, Canadá y jurisdicciones globales.",
    },
    sidebar: {
      databaseBadge: "BASE DE DATOS CARTOGRÁFICA",
      titleLine1: "Telemetría",
      titleLine2: "Global",
      saleStatus: { label: "Estado", all: "Todos", forSale: "En venta", sold: "Vendido" },
      filterPrefix: "FILTRO:",
      identifiedTargets: "OBJETIVOS IDENTIFICADOS",
      saleBadge: "VENTA",
      locPrefix: "UBIC:",
      closeList: "Cerrar lista de proyectos",
    },
    mapOverlay: {
      projectsBtn: "Proyectos",
      tagsLabel: "ETIQUETAS",
      allBtn: "TODOS",
      disclaimer:
        "los proyectos no se muestran en coordenadas exactas por razones de seguridad",
      zoomIn: "Acercar",
      zoomOut: "Alejar",
      specimensBtn: "Fósiles, ágatas y gemas",
    },
    dossier: {
      targetLocked: "OBJETIVO BLOQUEADO",
      availableBadge: "DISPONIBLE PARA ADQUISICIÓN",
      regionLabel: "REGIÓN:",
      coordLabel: "COORD:",
      accessDossier: "ACCEDER AL EXPEDIENTE",
    },
  },
  fr: {
    meta: {
      title: "Carte Interactive d'Exploration & Minière — Adamson Geomatics",
      description:
        "Carte SIG interactive des concessions minières, claims et projets d'exploration en Colombie-Britannique, au Canada et à l'international.",
    },
    sidebar: {
      databaseBadge: "BASE DE DONNÉES CARTOGRAPHIQUE",
      titleLine1: "Télémétrie",
      titleLine2: "Globale",
      saleStatus: { label: "Statut", all: "Tout", forSale: "À vendre", sold: "Vendu" },
      filterPrefix: "FILTRE :",
      identifiedTargets: "CIBLES IDENTIFIÉES",
      saleBadge: "VENTE",
      locPrefix: "LOC :",
      closeList: "Fermer la liste des projets",
    },
    mapOverlay: {
      projectsBtn: "Projets",
      tagsLabel: "ÉTIQUETTES",
      allBtn: "TOUT",
      disclaimer:
        "les projets ne sont pas affichés aux coordonnées exactes pour des raisons de sécurité",
      zoomIn: "Zoom avant",
      zoomOut: "Zoom arrière",
      specimensBtn: "Fossiles, agates & gemmes",
    },
    dossier: {
      targetLocked: "CIBLE VERROUILLÉE",
      availableBadge: "DISPONIBLE À L'ACQUISITION",
      regionLabel: "RÉGION :",
      coordLabel: "COORD :",
      accessDossier: "CONSULTER LE DOSSIER COMPLET",
    },
  },
};
