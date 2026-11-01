import type { Locale, ServicesTranslation } from "../types";

export const servicesTranslations: Record<Locale, ServicesTranslation> = {
  en: {
    meta: {
      title: "Services — Adamson Geomatics",
      description:
        "Comprehensive GIS, mineral claim staking, LiDAR terrain modeling, tenure operations, and geological mapping services throughout British Columbia and Canada.",
    },
    header: {
      returnLink: "Return to Platform",
      badge: "SERVICE_REGISTRY",
      title: "Full GIS",
      titleHighlight: "Service Registry",
      description:
        "A field-ops view of the services available across tenure management, acquisition, mapping, permitting, terrain modeling, and investor support.",
      metrics: {
        modules: "Modules",
        serviceLines: "Service Lines",
        outputs: "Outputs",
      },
    },
    tabs: {
      services: "Services",
      clients: "Past Clients",
    },
    modulesSection: {
      linesSuffix: "_LINES",
      outcomeLabel: "Outcome",
      serviceLinesLabel: "Service Lines",
      typicalOutputsLabel: "Typical Outputs",
      sampleWorkTitle: "Sample Work & Technical Case Studies",
      realFieldDataBadge: "Real Field Data",
      viewRecord: "View Record",
    },
    clientsSection: {
      badge: "CLIENT_ARCHIVE",
      title: "Past Clients",
      description:
        "Selected companies, municipalities, institutions, and private clients supported across GIS, mapping, land, and reporting work.",
      listedClientsLabel: "Listed Clients",
      websiteFieldLabel: "Website Field",
      websiteFieldStatus: "READY",
      visitButton: "Visit",
      linkPending: "Link Pending",
      clientNotes: {
        "University of Victoria": "Helped connect their geology team with tour of Phoenix pit",
        "B.C Hydro": "Reservoir monitoring reportS",
        "TELUS": "Real Estate Manager",
        "The City of Coquitlam": "Produced stream monitoring maps in partnership with B.C Hydro",
      },
    },
    operationalFlow: {
      tag: "Delivery Chain",
      title: "Operational Flow",
      steps: [
        "Define land status, tenure history, and immediate field objective.",
        "Assemble the required GIS, imagery, terrain, and regulatory inputs.",
        "Produce mapped outputs, filing packages, and investor-facing material.",
        "Deliver a clean operating package for review, circulation, or submission.",
      ],
    },
    nextAction: {
      indexTag: "Output Index",
      actionTag: "Next Action",
      description:
        "Need a tailored scope, a property review, or a field-ready mapping package? Open a direct channel and outline the land position, region, or exploration objective.",
      button: "Start Contact Protocol",
    },
    modules: [
      {
        id: "tenure-operations",
        code: "OPS_01",
        title: "Tenure Operations",
        summary:
          "Keep land positions active, traceable, and expansion-ready with staking, renewals, and title intelligence.",
        services: [
          "Claim renewals and expiry tracking",
          "Claim staking support and field-ready packages",
          "Tenure research for Crown granted and patented mineral claims",
          "Mineral claim ownership verification",
          "Historical tenure research",
          "Mineral claim due diligence",
        ],
        deliverables: [
          "Tenure status summaries",
          "Renewal calendars",
          "Ownership snapshots",
        ],
        outcome:
          "Mineral tenure stays organized and ready for acquisition, exploration, or review.",
      },
      {
        id: "acquisition-brokerage",
        code: "OPS_02",
        title: "Acquisition & Brokerage",
        summary:
          "Support property acquisition strategy and circulate opportunities through an established investor network.",
        services: [
          "Property acquisitions and land position expansion",
          "Property brokering for mineral opportunities",
          "Marketing to a large network of investors",
        ],
        deliverables: [
          "Acquisition briefs",
          "Investor-ready map packages",
          "Market circulation support",
        ],
        outcome:
          "Properties move faster from internal review to live investor conversations.",
      },
      {
        id: "mapping-targeting",
        code: "OPS_03",
        title: "Mapping & Targeting",
        summary:
          "Build GIS products that combine tenure, geology, and prospecting logic into decision-ready map sets.",
        services: [
          "GIS mapping for planning and field operations",
          "Mining claim maps and staking maps",
          "Prospecting and target identification",
          "Geologic, geophysical, and geochemical maps",
          "Survey plan georeferencing",
          "Parcel mapping and correction analysis",
          "Property value comparison mapping",
          "Spatial analysis for land and resource projects",
        ],
        deliverables: [
          "Integrated GIS layers",
          "Exploration target maps",
          "Technical map suites",
        ],
        outcome:
          "Teams get one mapped surface for land review, targeting, and investor communication.",
      },
      {
        id: "permitting-reporting",
        code: "OPS_04",
        title: "Permitting & Reporting",
        summary:
          "Prepare exploration paperwork and technical reporting so projects stay compliant and submission-ready.",
        services: [
          "Permit applications",
          "Notices of Work for mineral exploration and land use",
          "Assessment Report preparation and submissions",
          "Historical ARIS report research",
          "Technical report support",
          "QP geological reporting support",
        ],
        deliverables: [
          "Permit application packages",
          "Notice of Work support files",
          "Assessment report submissions",
        ],
        outcome:
          "Regulatory steps are documented clearly and delivered in a format stakeholders can act on.",
      },
      {
        id: "terrain-imagery",
        code: "OPS_05",
        title: "Terrain, Remote Sensing & LiDAR",
        summary:
          "Translate topography, satellite spectral imagery, and LiDAR into planning layers that improve terrain and alteration understanding before field deployment.",
        services: [
          "Remote sensing and satellite spectral analysis (Sentinel NDVI, Iron Oxide B4/B2)",
          "LiDAR analysis and Digital Terrain Models (DTM / DEM)",
          "Topographic and contour mapping",
          "Photogrammetry",
          "Aerial photo sourcing and analysis",
          "Terrain modelling for exploration projects",
          "Virtual Tours (Panoramic Drone Photography) - client partner",
        ],
        deliverables: [
          "Spectral alteration & NDVI maps",
          "LiDAR DTM / DEM surface models",
          "Orthomosaic imagery",
          "Aerial interpretation layers",
        ],
        outcome:
          "Terrain context and spectral alteration targets become clearer for planning access, prospecting, and technical review.",
        sampleCases: [
          {
            title: "NDVI Spectral Analysis — Sentinel Imagery",
            description:
              "Normalized Difference Vegetation Index (NDVI) derived from Sentinel satellite imagery. Greener areas indicate healthy, dense vegetation cover.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758749/NDVI_ekagwl.jpg",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=082JSW018",
            linkLabel: "BC MINFILE 082JSW018",
          },
          {
            title: "Iron Oxide Spectral Analysis (B4/B2) — Sentinel Imagery",
            description:
              "Band ratio (B4/B2) spectral analysis derived from Sentinel satellite imagery. Red zones highlight areas where iron oxide alteration is showing up strongest.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758749/Iron_Oxide_yajocz.jpg",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=082JSW018",
            linkLabel: "BC MINFILE 082JSW018",
          },
          {
            title: "Digital Terrain Model (DTM) — LiDAR Derived",
            description:
              "High-resolution bare-earth Digital Terrain Model (DTM) derived from LiDAR data for structural and topographic visualization.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758750/lidar_blackwater_wxdfmb.png",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=093F++037",
            linkLabel: "BC MINFILE 093F 037",
          },
        ],
      },
      {
        id: "property-valuation",
        code: "OPS_06",
        title: "Property Valuation & Assessment Appeals",
        summary:
          "Independent property valuation analysis supported by GIS research and assessment appeal expertise throughout British Columbia.",
        services: [
          "Property valuation reviews",
          "BC Assessment appeals",
          "Property tax appeals",
          "Neighbourhood value comparisons",
          "GIS-supported valuation analysis",
          "Assessment evidence preparation",
        ],
        deliverables: [
          "Property valuation reports",
          "Comparable property analysis",
          "Assessment appeal packages",
        ],
        outcome:
          "Property owners receive defensible valuation evidence and support during assessment and tax appeal processes.",
      },
      {
        id: "property-due-diligence",
        code: "OPS_07",
        title: "Property Due Diligence",
        summary:
          "Research and analysis services that help buyers, investors, and landowners understand property risks before making decisions.",
        services: [
          "Property Disclosure Statement reviews",
          "Property history research",
          "Land use review",
          "Ownership investigation",
          "Property acquisition support",
          "Risk identification and analysis",
        ],
        deliverables: [
          "Due diligence summaries",
          "Property research reports",
          "Risk assessment findings",
        ],
        outcome:
          "Clients gain a clearer understanding of property conditions, risks, and opportunities before acquisition.",
      },
      {
        id: "title-searches",
        code: "OPS_08",
        title: "Title Searches & Ownership Research",
        summary:
          "Investigate ownership records, title history, and encumbrances to support informed property decisions throughout British Columbia.",
        services: [
          "Title searches",
          "Ownership verification",
          "Lien research",
          "Property record investigations",
          "Historical ownership research",
          "Encumbrance identification",
        ],
        deliverables: [
          "Ownership summaries",
          "Title research reports",
          "Property record packages",
        ],
        outcome:
          "Clients receive a clear understanding of ownership status and title-related considerations.",
      },
      {
        id: "boundary-disputes",
        code: "OPS_09",
        title: "Boundary Disputes & Land Corrections",
        summary:
          "Resolve land boundary issues using GIS analysis, survey plan interpretation, georeferencing, and property research.",
        services: [
          "Boundary dispute investigations",
          "Survey plan analysis",
          "Parcel correction research",
          "Land correction order support",
          "Georeferencing services",
          "Property boundary mapping",
          "ParcelMap discrepancy investigations",
        ],
        deliverables: [
          "Boundary analysis reports",
          "Georeferenced survey maps",
          "Parcel correction documentation",
        ],
        outcome:
          "Property owners and stakeholders receive reliable evidence to support land boundary and parcel correction matters.",
      },
      {
        id: "geological-services",
        code: "OPS_10",
        title: "Geological & Technical Services",
        summary:
          "Support exploration projects with geological interpretation, technical reporting, and advanced spatial analysis.",
        services: [
          "Geological mapping",
          "Leapfrog geological modelling",
          "LiDAR interpretation",
          "DEM analysis",
          "Exploration targeting",
          "Assessment report preparation",
          "Technical report support",
          "Qualified Person (QP) geological services",
        ],
        deliverables: [
          "Geological maps",
          "Technical reports",
          "Exploration target models",
        ],
        outcome:
          "Exploration teams receive technical products that support decision-making, reporting, and project advancement.",
      },
    ],
  },
  es: {
    meta: {
      title: "Servicios — Adamson Geomatics",
      description:
        "Servicios integrales de SIG, demarcación de concesiones mineras, modelado de terreno LiDAR, operaciones de tenencia y cartografía geológica en Columbia Británica y Canadá.",
    },
    header: {
      returnLink: "Volver a la Plataforma",
      badge: "REGISTRO_DE_SERVICIOS",
      title: "Registro Integral",
      titleHighlight: "de Servicios SIG",
      description:
        "Una perspectiva operativa de campo de los servicios disponibles en gestión de tenencia, adquisición, cartografía, permisos, modelado de relieve y soporte a inversores.",
      metrics: {
        modules: "Módulos",
        serviceLines: "Líneas de Servicio",
        outputs: "Entregables",
      },
    },
    tabs: {
      services: "Servicios",
      clients: "Clientes Anteriores",
    },
    modulesSection: {
      linesSuffix: "_LÍNEAS",
      outcomeLabel: "Resultado",
      serviceLinesLabel: "Líneas de Servicio",
      typicalOutputsLabel: "Entregables Habituales",
      sampleWorkTitle: "Muestras de Trabajo y Casos de Estudio Técnicos",
      realFieldDataBadge: "Datos Reales de Campo",
      viewRecord: "Ver Registro",
    },
    clientsSection: {
      badge: "ARCHIVO_DE_CLIENTES",
      title: "Clientes Anteriores",
      description:
        "Selección de empresas mineras, municipios, instituciones y clientes privados asesorados en trabajos de SIG, cartografía, gestión de tierras e informes técnicos.",
      listedClientsLabel: "Clientes Registrados",
      websiteFieldLabel: "Campo Web",
      websiteFieldStatus: "LISTO",
      visitButton: "Visitar",
      linkPending: "Enlace Pendiente",
      clientNotes: {
        "University of Victoria": "Conexión del equipo de geología con visita técnica a la cantera Phoenix",
        "B.C Hydro": "Informes de monitoreo de embalses",
        "TELUS": "Gestión de Activos Inmobiliarios",
        "The City of Coquitlam": "Mapas de monitoreo de cuencas en colaboración con B.C Hydro",
      },
    },
    operationalFlow: {
      tag: "Cadena de Entrega",
      title: "Flujo Operativo",
      steps: [
        "Definir el estado legal del suelo, el historial de tenencia y el objetivo inmediato de campo.",
        "Reunir los insumos necesarios de SIG, imágenes satelitales, topografía y marco normativo.",
        "Generar cartografía técnica, expedientes de tramitación y material para inversionistas.",
        "Entregar un paquete operativo estructurado para revisión, divulgación o radicación formal.",
      ],
    },
    nextAction: {
      indexTag: "Índice de Entregables",
      actionTag: "Siguiente Paso",
      description:
        "¿Requiere un alcance a medida, una revisión predial o un paquete cartográfico listo para el terreno? Abra un canal directo indicando la ubicación, región u objetivo de exploración.",
      button: "Iniciar Protocolo de Contacto",
    },
    modules: [
      {
        id: "tenure-operations",
        code: "OPS_01",
        title: "Operaciones de Tenencia Minera",
        summary:
          "Mantenga sus concesiones mineras activas, trazables y preparadas para expansión con servicios de estacado, renovaciones y análisis de títulos.",
        services: [
          "Renovación de claims y seguimiento de fechas de vencimiento",
          "Soporte para estacado de claims y expedientes de campo",
          "Investigación de títulos sobre concesiones Crown granted y patentadas",
          "Verificación de titularidad de concesiones mineras",
          "Investigación histórica de derechos mineros",
          "Debida diligencia sobre claims mineros",
        ],
        deliverables: [
          "Resúmenes del estado de tenencia",
          "Calendarios de renovación",
          "Informes consolidados de titularidad",
        ],
        outcome:
          "Los derechos mineros permanecen organizados y plenamente listos para adquisición, exploración o auditoría.",
      },
      {
        id: "acquisition-brokerage",
        code: "OPS_02",
        title: "Adquisición y Corretaje Minero",
        summary:
          "Estructure la estrategia de adquisición de propiedades y circule oportunidades a través de una red consolidada de inversionistas.",
        services: [
          "Adquisición de propiedades y consolidación territorial",
          "Intermediación y corretaje de activos mineros",
          "Comercialización dirigida a redes de inversionistas del sector",
        ],
        deliverables: [
          "Memorandos de adquisición",
          "Dossiers cartográficos para inversionistas",
        ],
        outcome:
          "Los prospectos avanzan con agilidad desde la evaluación interna hacia negociaciones formales con compradores.",
      },
      {
        id: "mapping-targeting",
        code: "OPS_03",
        title: "Cartografía y Determinación de Blancos",
        summary:
          "Desarrolle productos SIG que fusionen tenencia minera, geología y prospección en cartografía técnica para la toma de decisiones.",
        services: [
          "Cartografía SIG para planificación y operaciones de campo",
          "Mapas de concesiones mineras y planos de estacado",
          "Identificación y selección de blancos de exploración",
          "Mapas geológicos, geofísicos y geoquímicos",
          "Georreferenciación de planos topográficos y catastrales",
          "Mapeo parcelario y análisis de correcciones limítrofes",
          "Cartografía comparativa de valuación de tierras",
          "Análisis espacial avanzado para proyectos de recursos naturales",
        ],
        deliverables: [
          "Capas SIG integradas",
          "Mapas de objetivos de exploración",
          "Series cartográficas técnicas completas",
        ],
        outcome:
          "Los equipos obtienen una plataforma visual unificada para análisis de tierras, focalización geológica y presentación a inversionistas.",
      },
      {
        id: "permitting-reporting",
        code: "OPS_04",
        title: "Permisos y Reportes Técnicos",
        summary:
          "Prepare la documentación reglamentaria e informes técnicos de exploración para mantener sus proyectos en plena conformidad legal.",
        services: [
          "Solicitudes de permisos de exploración",
          "Avisos de Trabajo (Notices of Work) para exploración minera",
          "Elaboración y presentación de Informes de Evaluación (Assessment Reports)",
          "Investigación de reportes históricos en el sistema ARIS",
          "Soporte en redacción de informes técnicos",
          "Asistencia para reportes geológicos bajo Persona Calificada (QP)",
        ],
        deliverables: [
          "Paquetes de solicitud de permisos",
          "Archivos de respaldo para Avisos de Trabajo",
          "Expedientes de informes de evaluación aprobados",
        ],
        outcome:
          "Las exigencias normativas se gestionan con rigor técnico y en formatos estandarizados para aprobación oficial.",
      },
      {
        id: "terrain-imagery",
        code: "OPS_05",
        title: "Terreno, Teledetección y LiDAR",
        summary:
          "Transforme datos topográficos, imágenes satelitales multiespectrales y LiDAR en capas operativas que revelan relieve y alteraciones hidrotermales antes de desplegar cuadrillas.",
        services: [
          "Teledetección y análisis espectral satelital (Sentinel NDVI, Óxidos de Hierro B4/B2)",
          "Análisis LiDAR y Modelos Digitales de Terreno (MDT / MDE)",
          "Cartografía topográfica y curvas de nivel de alta precisión",
          "Fotogrametría digital",
          "Búsqueda, adquisición y análisis de fotografía aérea histórica",
          "Modelado de relieve para proyectos de exploración",
          "Recorridos virtuales y fotografía panorámica con drones (en asociación)",
        ],
        deliverables: [
          "Mapas de alteración espectral y NDVI",
          "Modelos de superficie MDT / MDE derivados de LiDAR",
          "Mosaicos ortorrectificados",
          "Capas de fotointerpretación aérea",
        ],
        outcome:
          "La estructura morfológica y los blancos de alteración se visualizan con claridad para planificar accesos y muestreo.",
        sampleCases: [
          {
            title: "Análisis Espectral NDVI — Imágenes Sentinel",
            description:
              "Índice de Vegetación de Diferencia Normalizada (NDVI) calculado a partir de imágenes Sentinel. Las zonas verdes evidencian vegetación densa y vigorosa.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758749/NDVI_ekagwl.jpg",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=082JSW018",
            linkLabel: "BC MINFILE 082JSW018",
          },
          {
            title: "Análisis Espectral Óxidos de Hierro (B4/B2) — Sentinel",
            description:
              "Cociente de bandas (B4/B2) derivado de satélite Sentinel. Los tonos rojizos destacan concentraciones de alteración de óxidos de hierro.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758749/Iron_Oxide_yajocz.jpg",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=082JSW018",
            linkLabel: "BC MINFILE 082JSW018",
          },
          {
            title: "Modelo Digital de Terreno (MDT) — Derivado de LiDAR",
            description:
              "Modelo Digital de Terreno (MDT) a suelo desnudo de alta resolución generado mediante LiDAR para análisis estructural y topográfico.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758750/lidar_blackwater_wxdfmb.png",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=093F++037",
            linkLabel: "BC MINFILE 093F 037",
          },
        ],
      },
      {
        id: "property-valuation",
        code: "OPS_06",
        title: "Valuación de Propiedades y Apelaciones de Avalúo",
        summary:
          "Análisis pericial independiente de tasación inmobiliaria respaldado por análisis geoespacial y experiencia en apelaciones de avalúos fiscales en BC.",
        services: [
          "Revisiones de tasación de bienes raíces",
          "Apelaciones de avalúos fiscales ante BC Assessment",
          "Apelaciones de impuestos a la propiedad",
          "Estudios comparativos de valor por vecindario y zona",
          "Análisis de valuación sustentado en SIG",
          "Preparación de pruebas periciales para audiencias de avalúo",
        ],
        deliverables: [
          "Informes periciales de tasación",
          "Análisis comparativo de mercado de parcelas",
          "Expedientes de apelación tributaria",
        ],
        outcome:
          "Los titulares obtienen evidencia pericial sólida y acompañamiento estratégico durante los procesos de apelación de impuestos.",
      },
      {
        id: "property-due-diligence",
        code: "OPS_07",
        title: "Debida Diligencia de Propiedades",
        summary:
          "Investigación territorial y legal que permite a compradores, inversores y empresas entender riesgos prediales antes de transacciones clave.",
        services: [
          "Revisión de Declaraciones de Divulgación de la Propiedad",
          "Investigación de antecedentes históricos del inmueble",
          "Revisión de uso del suelo y zonificación",
          "Investigación de dominio y titularidad registral",
          "Acompañamiento en adquisición de tierras",
          "Identificación y cuantificación de riesgos territoriales",
        ],
        deliverables: [
          "Resúmenes ejecutivos de debida diligencia",
          "Informes de antecedentes catastrales",
          "Dictamen de evaluación de riesgos",
        ],
        outcome:
          "Los clientes obtienen claridad total sobre gravámenes, limitaciones físicas y oportunidades antes del desembolso.",
      },
      {
        id: "title-searches",
        code: "OPS_08",
        title: "Estudio de Títulos e Investigación de Dominio",
        summary:
          "Investigación exhaustiva de antecedentes registrales, tracto sucesivo y gravámenes para respaldar transacciones en Columbia Británica.",
        services: [
          "Búsquedas registrales de títulos de dominio",
          "Verificación formal de propietarios",
          "Investigación de gravámenes, embargos e hipotecas",
          "Auditoría de antecedentes prediales históricos",
          "Reconstrucción cronológica de tenencia",
          "Identificación de servidumbres y restricciones al dominio",
        ],
        deliverables: [
          "Resúmenes consolidados de dominio",
          "Informes de tracto registral",
          "Compilaciones documentales certificadas",
        ],
        outcome:
          "Certeza jurídica plena sobre la situación legal del inmueble y los derechos reales asociados.",
      },
      {
        id: "boundary-disputes",
        code: "OPS_09",
        title: "Disputas de Linderos y Corrección de Parcelas",
        summary:
          "Resolución técnica de controversias de límites parcelarios mediante análisis SIG, interpretación de planos de mensura y georreferenciación.",
        services: [
          "Investigación técnica de litigios de linderos",
          "Análisis e interpretación de planos de agrimensura",
          "Investigación para rectificación de cabida y linderos",
          "Soporte técnico para órdenes de corrección parcelaria",
          "Servicios profesionales de georreferenciación",
          "Cartografía de deslindes y linderos prediales",
          "Auditoría de discrepancias en ParcelMap BC",
        ],
        deliverables: [
          "Dictámenes técnicos de análisis de límites",
          "Planos de mensura georreferenciados",
          "Expedientes para corrección registral parcelaria",
        ],
        outcome:
          "Propietarios y apoderados legales disponen de evidencia pericial concluyente para subsanar discrepancias limítrofes.",
      },
      {
        id: "geological-services",
        code: "OPS_10",
        title: "Servicios Geológicos y Técnicos",
        summary:
          "Impulse proyectos mineros con modelado geológico 3D, redacción de informes normativos y análisis espacial avanzado.",
        services: [
          "Cartografía geológica de superficie y subsuelo",
          "Modelado geológico 3D en Leapfrog",
          "Interpretación estructural con LiDAR",
          "Análisis de Modelos Digitales de Elevación",
          "Definición y priorización de blancos de perforación",
          "Elaboración de informes de evaluación geológica",
          "Soporte en elaboración de reportes técnicos",
          "Servicios geológicos avalados por Persona Calificada (QP)",
        ],
        deliverables: [
          "Mapas geológicos y estructurales",
          "Reportes técnicos normativos",
          "Modelos 3D de blancos de exploración",
        ],
        outcome:
          "Los equipos geológicos cuentan con herramientas de alta resolución para guiar la perforación y reportar avances.",
      },
    ],
  },
  fr: {
    meta: {
      title: "Services — Adamson Geomatics",
      description:
        "Services complets de SIG, jalonnement de claims miniers, modélisation de relief LiDAR, gestion de titres et cartographie géologique en Colombie-Britannique et au Canada.",
    },
    header: {
      returnLink: "Retour à la Plateforme",
      badge: "RÉPERTOIRE_DE_SERVICES",
      title: "Répertoire Complet",
      titleHighlight: "des Services SIG",
      description:
        "Une perspective opérationnelle de terrain sur les prestations offertes en gestion de titres, acquisition, cartographie, permis, modélisation du relief et soutien aux investisseurs.",
      metrics: {
        modules: "Modules",
        serviceLines: "Lignes de Service",
        outputs: "Livrables",
      },
    },
    tabs: {
      services: "Services",
      clients: "Clients Précédents",
    },
    modulesSection: {
      linesSuffix: "_LIGNES",
      outcomeLabel: "Résultat Clé",
      serviceLinesLabel: "Lignes de Service",
      typicalOutputsLabel: "Livrables Types",
      sampleWorkTitle: "Exemples de Travaux et Études de Cas Techniques",
      realFieldDataBadge: "Données Réelles de Terrain",
      viewRecord: "Consulter la Fiche",
    },
    clientsSection: {
      badge: "ARCHIVES_CLIENTS",
      title: "Clients Précédents",
      description:
        "Sélection d'entreprises minières, municipalités, institutions et clients privés accompagnés en cartographie, SIG, gestion foncière et rapports techniques.",
      listedClientsLabel: "Clients Référencés",
      websiteFieldLabel: "Champ Web",
      websiteFieldStatus: "PRÊT",
      visitButton: "Visiter",
      linkPending: "Lien en Attente",
      clientNotes: {
        "University of Victoria": "Mise en relation de leur département de géologie avec une visite guidée de la fosse Phoenix",
        "B.C Hydro": "Rapports de surveillance des bassins réservoirs",
        "TELUS": "Gestionnaire des Actifs Immobiliers",
        "The City of Coquitlam": "Cartographie de surveillance hydrographique en partenariat avec B.C Hydro",
      },
    },
    operationalFlow: {
      tag: "Chaîne de Livraison",
      title: "Flux Opérationnel",
      steps: [
        "Définir le statut légal du terrain, l'historique des claims et l'objectif immédiat sur le terrain.",
        "Rassembler les données SIG, l'imagerie satellitaire, les modèles de relief et les exigences réglementaires.",
        "Produire les cartographies opérationnelles, les dossiers administratifs et les supports pour investisseurs.",
        "Livrer un dossier d'exploitation rigoureux, prêt pour révision, diffusion ou soumission officielle.",
      ],
    },
    nextAction: {
      indexTag: "Index des Livrables",
      actionTag: "Prochaine Action",
      description:
        "Besoin d'un mandat sur mesure, d'une vérification de titres ou d'un jeu cartographique prêt pour le terrain ? Ouvrez un canal direct en précisant la localisation, la région ou votre cible minérale.",
      button: "Lancer le Protocole de Contact",
    },
    modules: [
      {
        id: "tenure-operations",
        code: "OPS_01",
        title: "Opérations sur les Titres Miniers",
        summary:
          "Maintenez vos droits miniers actifs, conformes et parés à l'expansion grâce au jalonnement, au renouvellement et à l'analyse de titres.",
        services: [
          "Renouvellement de claims et calendrier de suivi des échéances",
          "Assistance au jalonnement et dossiers cartographiques de terrain",
          "Recherche de titres fonciers pour concessions Crown granted et brevetées",
          "Vérification formelle de la propriété des claims miniers",
          "Recherche historique de tenures et titres miniers",
          "Contrôle de conformité et vérification diligente des claims",
        ],
        deliverables: [
          "Synthèses d'état des tenures",
          "Calendriers de renouvellement",
          "Portraits exhaustifs de propriété",
        ],
        outcome:
          "Les claims miniers demeurent structurés et immédiatement exploitables pour une acquisition, une vérification ou des forages.",
      },
      {
        id: "acquisition-brokerage",
        code: "OPS_02",
        title: "Acquisition et Courtage Minier",
        summary:
          "Appuyez la stratégie d'acquisition foncière et faites circuler les opportunités auprès d'un réseau établi d'investisseurs miniers.",
        services: [
          "Acquisition de propriétés et consolidation territoriale",
          "Courtage de projets et actifs d'exploration minérale",
          "Mise en marché auprès d'un vaste réseau d'investisseurs qualifiés",
        ],
        deliverables: [
          "Notes de cadrage d'acquisition",
          "Packs cartographiques prêts pour investisseurs",
          "Accompagnement à la diffusion sur le marché",
        ],
        outcome:
          "Les projets franchissent rapidement le cap de la sélection interne pour entrer en phase de négociation active avec des acheteurs.",
      },
      {
        id: "mapping-targeting",
        code: "OPS_03",
        title: "Cartographie et Ciblage d'Exploration",
        summary:
          "Concevez des ensembles SIG combinant claims, géologie et logique d'échantillonnage en supports décisionnels clairs.",
        services: [
          "Cartographie SIG pour la planification et les opérations de terrain",
          "Cartes de claims miniers et plans de jalonnement",
          "Prospection et détermination de cibles d'exploration",
          "Cartes géologiques, géophysiques et géochimiques",
          "Géoréférencement de plans d'arpentage",
          "Cartographie parcellaire et analyse de rectification des limites",
          "Cartographie comparative de la valeur foncière",
          "Analyses spatiales poussées pour projets de ressources naturelles",
        ],
        deliverables: [
          "Couches SIG intégrées et normalisées",
          "Cartes de cibles géologiques d'exploration",
          "Jeux complets de cartes techniques",
        ],
        outcome:
          "Les équipes bénéficient d'une surface cartographique unique pour l'analyse des sols, le ciblage et les relations investisseurs.",
      },
      {
        id: "permitting-reporting",
        code: "OPS_04",
        title: "Permis et Rapports Techniques",
        summary:
          "Montez les dossiers réglementaires et rapports techniques d'exploration pour assurer une conformité continue aux normes provinciales.",
        services: [
          "Dossiers de demande de permis d'exploration",
          "Avis de travaux (Notices of Work) pour exploration minérale",
          "Rédaction et soumission de Rapports d'Évaluation (Assessment Reports)",
          "Recherche de rapports historiques dans la base ARIS",
          "Accompagnement à la rédaction de rapports techniques",
          "Assistance aux rapports géologiques sous la supervision d'une Personne Qualifiée (QP)",
        ],
        deliverables: [
          "Dossiers complets de demande de permis",
          "Documents justificatifs pour Avis de Travaux",
          "Dépôts officiels de rapports d'évaluation",
        ],
        outcome:
          "Toutes les démarches réglementaires sont formalisées avec rigueur et conformes aux exigences administratives.",
      },
      {
        id: "terrain-imagery",
        code: "OPS_05",
        title: "Relief, Télédétection et LiDAR",
        summary:
          "Traduisez topographie, imagerie satellitaire spectrale et LiDAR en couches opérationnelles facilitant l'évaluation du relief et des altérations.",
        services: [
          "Télédétection et analyse spectrale satellitaire (Sentinel NDVI, Oxydes de Fer B4/B2)",
          "Traitement LiDAR et Modèles Numériques de Terrain (MNT / MNE)",
          "Cartographie topographique et courbes de niveau de précision",
          "Photogrammétrie numérique",
          "Recherche et interprétation de photographies aériennes d'archives",
          "Modélisation 3D de relief pour campagnes d'exploration",
          "Visites virtuelles et photographies panoramiques par drone (en partenariat)",
        ],
        deliverables: [
          "Cartes d'altération spectrale et d'indices NDVI",
          "Modèles de surface MNT / MNE issus de LiDAR",
          "Mosaïques orthophotographiques",
          "Couches d'interprétation photo-aérienne",
        ],
        outcome:
          "La structure du relief et les anomalies d'altération ressortent avec précision pour sécuriser l'accès et guider la prospection.",
        sampleCases: [
          {
            title: "Analyse Spectrale NDVI — Imagerie Sentinel",
            description:
              "Indice de Végétation par Différence Normalisée (NDVI) extrait des données Sentinel. Les teintes vertes reflètent une couverture végétale saine et dense.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758749/NDVI_ekagwl.jpg",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=082JSW018",
            linkLabel: "BC MINFILE 082JSW018",
          },
          {
            title: "Analyse Spectrale des Oxydes de Fer (B4/B2) — Sentinel",
            description:
              "Rapport de bandes (B4/B2) dérivé d'images satellites Sentinel. Les zones en rouge mettent en exergue les altérations d'oxydes de fer les plus marquées.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758749/Iron_Oxide_yajocz.jpg",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=082JSW018",
            linkLabel: "BC MINFILE 082JSW018",
          },
          {
            title: "Modèle Numérique de Terrain (MNT) — Dérivé de LiDAR",
            description:
              "Modèle Numérique de Terrain (MNT) haute résolution 'sol nu' issu de relevés LiDAR, optimisé pour la lecture topographique et structurale.",
            image:
              "https://res.cloudinary.com/dfytfu2jq/image/upload/v1790758750/lidar_blackwater_wxdfmb.png",
            linkUrl: "https://minfile.gov.bc.ca/summary.aspx?minfilno=093F++037",
            linkLabel: "BC MINFILE 093F 037",
          },
        ],
      },
      {
        id: "property-valuation",
        code: "OPS_06",
        title: "Évaluation Immobilière et Révision Foncière",
        summary:
          "Expertise indépendante en évaluation foncière soutenue par l'analyse géospatiale et l'expérience en révision des évaluations en Colombie-Britannique.",
        services: [
          "Examens d'évaluation et de valeur marchande",
          "Appels d'évaluation auprès de BC Assessment",
          "Contestations d'impôts fonciers",
          "Analyses comparatives de valeur à l'échelle du secteur",
          "Modélisation de valeur appuyée par SIG",
          "Montage des dossiers de preuve pour commissions de révision",
        ],
        deliverables: [
          "Rapports d'expertise en évaluation foncière",
          "Études de marché par parcelles comparables",
          "Dossiers de révision fiscale complets",
        ],
        outcome:
          "Les propriétaires fonciers disposent d'un argumentaire probant et d'un accompagnement méthodique pour contester leurs évaluations.",
      },
      {
        id: "property-due-diligence",
        code: "OPS_07",
        title: "Vérification Diligente Foncière",
        summary:
          "Recherche et diagnostic technique pour éclairer acheteurs, investisseurs et propriétaires sur les aléas et servitudes avant toute décision.",
        services: [
          "Examen des Déclarations de Divulgation Foncière (PDS)",
          "Recherche de l'historique et des antécédents de la propriété",
          "Analyse de conformité d'affectation du sol et zonage",
          "Enquêtes sur la chaîne de propriété",
          "Assistance technique à l'acquisition foncière",
          "Identification et cartographie des risques territoriaux",
        ],
        deliverables: [
          "Notes de synthèse de vérification diligente",
          "Rapports d'historique de propriété",
          "Évaluations formelles des risques identifiés",
        ],
        outcome:
          "Les clients appréhendent avec une parfaite transparence la situation légale, les contraintes et les opportunités du bien ciblé.",
      },
      {
        id: "title-searches",
        code: "OPS_08",
        title: "Recherche de Titres et Droits de Propriété",
        summary:
          "Enquête approfondie sur les registres fonciers, l'historique des mutations et les sûretés réelles en Colombie-Britannique.",
        services: [
          "Recherches formelles aux registres des titres fonciers",
          "Vérification des droits de propriété",
          "Recherche d'hypothèques légales et privilèges",
          "Examen des archives cadastrales et registres fonciers",
          "Reconstitution historique de propriété",
          "Identification des charges, servitudes et empiétements",
        ],
        deliverables: [
          "Synthèses d'état de propriété",
          "Rapports d'analyse de titres fonciers",
          "Dossiers documentaires d'archives certifiés",
        ],
        outcome:
          "Les décideurs bénéficient d'une vue incontestable sur le statut juridique et les charges grevant le terrain.",
      },
      {
        id: "boundary-disputes",
        code: "OPS_09",
        title: "Litiges de Bornage et Rectification de Parcelles",
        summary:
          "Résolution de conflits de mitoyenneté et de limites par l'analyse SIG, l'examen de plans d'arpentage et le géoréférencement.",
        services: [
          "Expertise de litiges de bornage et de délimitation",
          "Analyse technique de plans d'arpentage",
          "Recherche pour rectification d'assiette foncière",
          "Assistance technique pour arrêtés de rectification parcellaire",
          "Géoréférencement de haute précision",
          "Cartographie des limites foncières réelles",
          "Audit des écarts cartographiques sur ParcelMap BC",
        ],
        deliverables: [
          "Rapports d'analyse de délimitation",
          "Plans d'arpentage géoréférencés",
          "Dossiers de demande de rectification parcellaire",
        ],
        outcome:
          "Les propriétaires et juristes disposent de preuves cartographiques indiscutables pour résoudre les désaccords de mitoyenneté.",
      },
      {
        id: "geological-services",
        code: "OPS_10",
        title: "Services Géologiques et Techniques",
        summary:
          "Accompagnez vos campagnes d'exploration par l'interprétation géologique 3D, la production de rapports normatifs et l'analyse spatiale.",
        services: [
          "Cartographie géologique et lithologique",
          "Modélisation géologique 3D sous Leapfrog",
          "Interprétation structurale par LiDAR",
          "Analyse de Modèles Numériques d'Élévation",
          "Sélection et hiérarchisation des cibles de forage",
          "Rédaction de rapports géologiques d'évaluation",
          "Assistance à la confection de rapports techniques",
          "Prestations géologiques menées sous l'égide d'une Personne Qualifiée (QP)",
        ],
        deliverables: [
          "Cartes géologiques et structurales",
          "Rapports techniques d'exploration",
          "Modèles tridimensionnels de cibles géologiques",
        ],
        outcome:
          "Les équipes d'exploration reçoivent des livrables de haute technicité pour piloter leurs forages et communiquer leurs résultats.",
      },
    ],
  },
};
