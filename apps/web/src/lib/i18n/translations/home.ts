import type { Locale, HomeTranslation } from "../types";

export const homeTranslations: Record<Locale, HomeTranslation> = {
  en: {
    meta: {
      title: "Adamson Geomatics | GIS & Mineral Claim Services in BC | Chris Adamson, R.I.",
      description:
        "Professional land and geospatial services in British Columbia. GIS mapping, mineral claim staking, LiDAR, digital elevation models, geological modelling, land valuations, and legal dispute support.",
    },
    cinematicHero: {
      evolutionLabel: "EVOLUTION",
      serviceRegistryHeader: "Adamson Geomatics Service Registry",
      serviceRegistryTitle: "Geomatics / GIS",
      serviceRegistryItems: [
        "Property Brokerage",
        "Geological Mapping",
        "Lidar / DEM",
        "Prospecting",
        "Permitting",
        "Zoning Applications / Subdivisions",
      ],
      mainBadge: "Adamson Geomatics",
      mainTitleLine: "Precision GIS &",
      mainTitleHighlight: "Land Management.",
      mainDescription:
        "Expert geospatial consulting for mineral exploration, land management, and real estate services across Canada, the USA, and internationally.",
      ctaMap: "View Map Portfolio",
      ctaServices: "My Services",
    },
    serviceRegistry: {
      badge: "SERVICE_REGISTRY",
      title: "GIS Service",
      titleHighlight: "Ops Deck",
      description:
        "Dense field support for tenure, acquisition, prospecting, permitting, terrain modeling, and investor-facing mapping packages.",
      buttonReview: "Review Complete Service Registry",
      servicesFeed: "SERVICES_FEED",
      entriesSuffix: "_ENTRIES",
      showLess: "SHOW_LESS",
      expandSection: "EXPAND_SECTION",
      seeAllEntries: "SEE_ALL_{count}_ENTRIES",
      systemTotals: "SYSTEM_TOTALS",
      outputIndex: "OUTPUT_INDEX",
      fieldNoteLabel: "FIELD_NOTE",
      fieldNoteText:
        "Built for operators who need claim status, permitting support, maps, and terrain intelligence in one coordinated workflow instead of scattered vendors.",
      nextActionLabel: "NEXT_ACTION",
      reviewSpecification: "Review Full Specification",
      seeAllDetails: "SEE_ALL_DETAILS",
    },
    projectPreview: {
      badge: "FEATURED_PROJECTS",
      title: "Project",
      titleHighlight: "Portfolio",
      description:
        "Active regions, available properties, and featured cartography from the Adamson Geomatics project archive.",
      viewAll: "View All Projects",
      showing: "Showing {count} of {total} Projects",
      available: "{count} Available for Acquisition",
      statusForSale: "FOR SALE",
      statusActive: "ACTIVE",
      viewDossier: "View Dossier",
      defaultSummary:
        "Open the project dossier for maps, highlights, and regional documentation.",
      ctaText:
        "Explore the complete project archive, spatial map view, and acquisition-ready properties.",
      ctaMap: "Map View",
      ctaForSale: "For Sale",
    },
    listingMembership: {
      badge: "LISTING MODELS // MEMBERSHIP",
      title: "List Your Property &",
      titleHighlight: "Promote Your Business",
      description:
        "Choose the listing model or company membership package that fits your goals. From zero-upfront commission options to flat-rate unlimited listing subscriptions.",
      bestForLabel: "BEST FOR",
      featuresLabel: "Included Features:",
      plans: [
        {
          id: "commission",
          name: "Commission-Based Listing",
          tag: "ZERO UPFRONT COST",
          price: "$0",
          period: "upfront",
          description:
            "List your property for free. We handle marketing and technical exposure, earning a commission only when a successful sale completes.",
          idealFor: "Property owners looking to minimize upfront listing costs.",
          features: [
            "No upfront listing fee",
            "Full marketing & property exposure",
            "Technical GIS map & dossier setup",
            "Commission paid only upon successful sale",
            "Standard buyer inquiry routing",
          ],
          ctaText: "Contact Us",
        },
        {
          id: "subscription-listing",
          name: "Subscription Listing",
          tag: "100% SALE RETENTION",
          price: "$100",
          period: "/ month",
          promoBadge: "FIRST MONTH FREE",
          description:
            "Keep 100% of your sale proceeds with a flat monthly listing fee. Full control over photos, maps, PDFs, and seller contact details.",
          idealFor: "Sellers wanting predictable costs and 0% commission.",
          features: [
            "Keep 100% of sale proceeds (0% commission)",
            "First month completely FREE",
            "Edit & update listing details anytime",
            "Photos, spatial maps, PDFs & contacts included",
            "Direct buyer inquiries routed to you",
          ],
          ctaText: "Start Free Trial",
        },
        {
          id: "company-membership",
          name: "Company Membership",
          tag: "FULL PROMOTIONAL SUITE",
          price: "$150",
          period: "/ month",
          promoBadge: "FIRST MONTH FREE",
          description:
            "Comprehensive branding and unlimited listings for junior mining companies, prospectors, consultants, and land developers.",
          idealFor: "Junior miners, prospectors, consultants & developers.",
          features: [
            "Dedicated Company Profile page & logo",
            "Direct link back to your company website",
            "Unlimited property & claim listings",
            "Featured exposure across registry & map search",
            "Direct client lead & inquiry distribution",
            "First month completely FREE",
          ],
          ctaText: "Become a Member",
        },
      ],
      partnersBanner: {
        badge: "NETWORK_PARTNERSHIPS",
        title: "Who Benefits Most From Subscription Listings?",
        ctaPartner: "Partner & Referral Programs",
        ctaDiscuss: "Discuss Custom Partnership",
        targetAudiences: [
          {
            role: "Junior Mining Companies",
            benefit:
              "Full company profile, logo, website backlinks, & unlimited asset listings.",
          },
          {
            role: "Prospectors & Claim Holders",
            benefit:
              "Showcase mineral claims to active buyers with 0% sales commission options.",
          },
          {
            role: "Geological Consultants",
            benefit:
              "Promote expert advisory services and land records investigation capabilities.",
          },
          {
            role: "Land Developers & Brokers",
            benefit:
              "Showcase multi-unit residential, commercial, or vacant land portfolios.",
          },
        ],
      },
    },
    accomplishments: {
      badge: "case files",
      title: "Accomplishments & Case Studies",
      intro1:
        "Real-world projects often require more than research alone. By combining GIS analysis, land records, survey interpretation, valuation expertise, and technical investigation, we help clients solve complex property, land, and resource-related challenges.",
      intro2:
        "The following examples highlight some of the projects and outcomes that have been successfully delivered.",
      keyAreasLabel: "key areas",
      items: [
        {
          title: "Land Expropriation Support",
          summary:
            "Assisted a client during a land expropriation matter involving the Province of British Columbia. Through detailed research, documentation review, and property analysis, the case was successfully resolved, helping the client retain privately owned land.",
          areas: [
            "Land research and analysis",
            "Property documentation review",
            "GIS and mapping support",
            "Evidence preparation",
          ],
        },
        {
          title: "Property Assessment & Tax Appeal Successes",
          summary:
            "Successfully supported multiple property assessment and tax appeal cases throughout British Columbia. Using property valuation research, GIS-based comparison analysis, and assessment review techniques, evidence was prepared to challenge assessed values and support fair property taxation outcomes.",
          areas: [
            "Property valuation analysis",
            "BC Assessment appeals",
            "Tax appeal support",
            "GIS-based comparable property studies",
          ],
        },
        {
          title: "ParcelMapBC Location Correction",
          summary:
            "Identified a mapping discrepancy involving the Barlow Substation in the Quesnel area. Through GIS analysis, georeferencing, and detailed review of historical survey plans, the location inconsistency was documented and corrected, improving the accuracy of property and infrastructure mapping records.",
          areas: [
            "GIS analysis",
            "Survey plan interpretation",
            "Georeferencing",
            "Parcel correction research",
          ],
        },
        {
          title: "Residential Property Due Diligence",
          summary:
            "Provided research and due diligence support for numerous residential property transactions in the Barkerville and Cariboo regions of British Columbia. Services included reviewing property records, analyzing disclosure information, researching ownership details, and identifying potential concerns before purchase decisions were finalized.",
          areas: [
            "Property Disclosure Statement reviews",
            "Property research",
            "Ownership verification",
            "Due diligence investigations",
          ],
        },
        {
          title: "Mineral Property & Exploration Support",
          summary:
            "Supported mineral exploration projects, prospectors, and resource companies through claim research, GIS mapping, technical reporting, and land package evaluation. Projects have included tenure research, claim staking support, geological mapping, and the preparation of technical materials used for exploration planning and project advancement.",
          areas: [
            "Mineral claim research",
            "Exploration mapping",
            "Geological data integration",
            "Technical reporting",
          ],
        },
      ],
    },
    pastClients: {
      badge: "CLIENT_INTELLIGENCE // TRUSTED_NETWORK",
      title: "Trusted by Explorers,",
      titleHighlight: "Industry & Universities",
      description:
        "Precision GIS mapping, Crown Grant parcel research, tenure management, and terrain modeling delivered for major mining corporations, public utilities, municipalities, and academic research institutions.",
      seeAll: "See All Clients ({count})",
      verifiedClient: "Verified Client",
      website: "Website",
      viewInArchive: "View in Archive →",
      calloutTitle: "Looking for our full client archive?",
      calloutDesc:
        "Browse all {totalCount}+ documented client engagements, consulting projects, and institutional partnerships.",
      calloutBtn: "See More on Services Page",
      spotlightCategories: {
        "University of Victoria": "ACADEMIC / RESEARCH",
        "Barkerville Gold Mines": "MINING / OSISKO DEV",
        "JDS Mining": "MINE OPERATIONS",
        "B.C. Hydro": "PUBLIC UTILITY",
        "Dentons LLC": "LEGAL & LAND TITLE",
        "University of Waterloo": "ACADEMIC / MODELING",
        "Quantum Critical Metals": "CRITICAL MINERALS",
        "The City of Coquitlam": "MUNICIPAL GOVERNMENT",
      },
      spotlightNotes: {
        "University of Victoria":
          "Helped connect their geology team with tour of Phoenix pit",
        "Barkerville Gold Mines":
          "100+ km powerline right-of-way GIS land mapping and complex Crown Grant transfers",
        "JDS Mining":
          "Ground-truth GIS mapping and operational support for major mineral exploration assets",
        "B.C. Hydro":
          "Reservoir monitoring reports & watershed spatial analysis across British Columbia",
        "Dentons LLC":
          "Recommended for mining law & title issues. Complex Crown Grant transfers, historical parcel research, and title mapping.",
        "University of Waterloo":
          "Wildfire mitigation modeling consulting and terrain risk evaluation",
        "Quantum Critical Metals":
          "Exploration GIS mapping, tenure research, and investor presentation geospatial assets",
        "The City of Coquitlam":
          "Produced stream monitoring maps in partnership with B.C Hydro",
      },
    },
    globalTelemetry: {
      title: "Global Telemetry",
      satelliteActive: "SATELLITE_LINK_ACTIVE",
      viewMap: "View Full Map",
    },
    certifications: {
      badge: "credentials",
      title: "Certifications",
      description:
        "Industry-recognized qualifications in geospatial analysis and mining technology.",
    },
    fieldReports: {
      title: "Field",
      titleHighlight: "Reports",
      description:
        "Endorsements from executives, geologists, and industry leaders. Verified intelligence.",
      readMore: "read more..",
      readLess: "read less",
      presentationLink: "Jack Dangermond's Plenary Presentation.",
      reports: [
        {
          text: "I have had the opportunity over the last several years to work closely with Chris on a number of matters, some of which were very complex in nature and required a careful analysis of the approach to take in order to achieve the desired result. He is very intelligent, hardworking, seeks solutions and follows up on various matters including staying on top of developments and what needs to be carried out with respect to files and matters that he deals with. He has a very solid understanding of the issues and challenges on matters that arise and I found him excellent to work with and he develops a thorough knowledge of the matter that he is working on. I am pleased to be able to provide a reference letter for him and I would be pleased to expand on the positive experiences that I have had working with him if comments or questions need to be followed up further.",
          author: "Brian Abraham",
          role: "K.C., P.Geo",
        },
        {
          text: "Hi Chris, Congratulations on having your image selected for the 2025 Esri User Conference! Your image was displayed in Jack Dangermond's Plenary Presentation. Well done! We would like to sincerely thank you for your work and look forward to your future submissions.",
          author: "Esri",
          role: "Esri Plenary Image Submission Team",
          link: "https://mediaspace.esri.com/media/1_2rc7uxir?kalturaStartTime=563",
        },
      ],
    },
    tickerBanner: {
      partnersLabel: "Partners",
      tickerText:
        "🤝 AFFILIATE PROGRAM — Earn 10% of payments from new clients you refer during their first year, 5% thereafter.     ⛏️ FINDER'S FEE PROGRAM — Available for qualified buyer referrals on our mining projects. Contact us for details.     ",
      learnMore: "Learn More",
      dismiss: "Dismiss",
    },
    footer: {
      tagline: "Data Extraction Matrix",
      nav: {
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        mapView: "Map View",
        properties: "Properties",
        partners: "Partners",
        fieldReports: "Field Reports",
        contact: "Contact",
        clientPortal: "Client Portal",
      },
      systemStatus: "SYSTEM STATUS: ONLINE",
      rightsReserved: "© 2026 ADAMSON_GEOMATICS. ALL_RIGHTS_RESERVED.",
      architectLabel: "PLATFORM ARCHITECT & DEV:",
      softwareEngineerRole: "SOFTWARE ARCHITECT ENGINEER",
      portfolioLink: "PORTFOLIO",
    },
    newsletter: {
      title: "Newsletter",
      intro: "Field reports, new properties and project updates. No spam.",
      placeholder: "you@example.com",
      submit: "Subscribe",
      submitting: "Subscribing...",
      success: "Subscribed! Thank you.",
      errorDefault: "Something went wrong. Please try again.",
      errorNetwork: "Network error. Please try again.",
    },
  },
  es: {
    meta: {
      title: "Adamson Geomatics | Servicios SIG y Concesiones Mineras en BC | Chris Adamson, R.I.",
      description:
        "Servicios profesionales territoriales y geoespaciales en Columbia Británica. Mapeo SIG, estacado de claims mineros, LiDAR, modelos de elevación, geología y tasaciones de tierras.",
    },
    cinematicHero: {
      evolutionLabel: "EVOLUCIÓN",
      serviceRegistryHeader: "Registro de Servicios Adamson Geomatics",
      serviceRegistryTitle: "Geomática / SIG",
      serviceRegistryItems: [
        "Corretaje de Propiedades",
        "Cartografía Geológica",
        "LiDAR / MDE",
        "Prospección",
        "Tramitación de Permisos",
        "Zonificación y Subdivisiones",
      ],
      mainBadge: "Adamson Geomatics",
      mainTitleLine: "SIG de Precisión y",
      mainTitleHighlight: "Gestión Territorial.",
      mainDescription:
        "Consultoría geoespacial especializada para exploración minera, administración de tierras y servicios prediales en Canadá, EE. UU. e internacionalmente.",
      ctaMap: "Ver Portafolio de Mapas",
      ctaServices: "Nuestros Servicios",
    },
    serviceRegistry: {
      badge: "REGISTRO_DE_SERVICIOS",
      title: "Plataforma Operativa",
      titleHighlight: "de Servicios SIG",
      description:
        "Soporte técnico integral de campo para tenencia minera, adquisiciones, prospección, permisos, modelado de relieve y carpetas cartográficas para inversionistas.",
      buttonReview: "Revisar Registro Completo de Servicios",
      servicesFeed: "FLUJO_DE_SERVICIOS",
      entriesSuffix: "_SERVICIOS",
      showLess: "VER_MENOS",
      expandSection: "EXPANDIR_SECCIÓN",
      seeAllEntries: "VER_TODOS_LOS_{count}_SERVICIOS",
      systemTotals: "TOTALES_DEL_SISTEMA",
      outputIndex: "ÍNDICE_DE_ENTREGABLES",
      fieldNoteLabel: "NOTA_DE_CAMPO",
      fieldNoteText:
        "Diseñado para operadores que requieren estado legal de concesiones, gestión de permisos, cartografía e inteligencia territorial en un flujo único coordinado sin dispersión de proveedores.",
      nextActionLabel: "SIGUIENTE_PASO",
      reviewSpecification: "Ver Especificación Completa",
      seeAllDetails: "VER_MÁS_DETALLES",
    },
    projectPreview: {
      badge: "PROYECTOS_DESTACADOS",
      title: "Portafolio de",
      titleHighlight: "Proyectos",
      description:
        "Regiones activas, propiedades disponibles y cartografía destacada del archivo de proyectos de Adamson Geomatics.",
      viewAll: "Ver Todos los Proyectos",
      showing: "Mostrando {count} de {total} Proyectos",
      available: "{count} Disponibles para Adquisición",
      statusForSale: "EN VENTA",
      statusActive: "ACTIVO",
      viewDossier: "Ver Expediente",
      defaultSummary:
        "Abra el expediente del proyecto para examinar mapas, aspectos técnicos y documentación regional.",
      ctaText:
        "Explore el archivo completo de proyectos, la visualización en mapa espacial y propiedades listas para adquisición.",
      ctaMap: "Vista de Mapa",
      ctaForSale: "En Venta",
    },
    listingMembership: {
      badge: "MODELOS DE PUBLICACIÓN // MEMBRESÍA",
      title: "Publique su Propiedad y",
      titleHighlight: "Promocione su Empresa",
      description:
        "Elija el modelo de publicación o paquete de membresía corporativa que mejor se adapte a sus metas. Desde opciones a comisión sin costo inicial hasta suscripciones con publicaciones ilimitadas.",
      bestForLabel: "IDEAL PARA",
      featuresLabel: "Características Incluidas:",
      plans: [
        {
          id: "commission",
          name: "Publicación a Comisión",
          tag: "SIN COSTO INICIAL",
          price: "$0",
          period: "inicial",
          description:
            "Publique su propiedad sin costo inicial. Gestionamos la promoción y el posicionamiento técnico, cobrando una comisión únicamente tras concretar una venta exitosa.",
          idealFor: "Propietarios que buscan minimizar costos iniciales de publicación.",
          features: [
            "Sin tarifa inicial de publicación",
            "Exposición comercial y técnica completa",
            "Configuración de mapa SIG y expediente técnico",
            "Comisión cobrada únicamente al vender",
            "Canalización estándar de consultas de compradores",
          ],
          ctaText: "Contáctenos",
        },
        {
          id: "subscription-listing",
          name: "Publicación por Suscripción",
          tag: "100% RETENCIÓN DE VENTA",
          price: "$100",
          period: "/ mes",
          promoBadge: "PRIMER MES GRATIS",
          description:
            "Conserve el 100% de los ingresos de su venta con una tarifa mensual fija. Control total sobre fotos, mapas, documentos PDF y datos de contacto del vendedor.",
          idealFor: "Vendedores que buscan costos predecibles y 0% de comisión.",
          features: [
            "Conserve el 100% de la venta (0% comisión)",
            "Primer mes totalmente GRATIS",
            "Edite y actualice los datos en cualquier momento",
            "Fotos, mapas espaciales, PDFs y contactos incluidos",
            "Consultas de compradores enviadas directamente a usted",
          ],
          ctaText: "Iniciar Prueba Gratuita",
        },
        {
          id: "company-membership",
          name: "Membresía Empresarial",
          tag: "SUITE PROMOCIONAL COMPLETA",
          price: "$150",
          period: "/ mes",
          promoBadge: "PRIMER MES GRATIS",
          description:
            "Branding integral y listados ilimitados para empresas mineras junior, prospectores, consultores y desarrolladores de tierras.",
          idealFor: "Mineras junior, prospectores, consultores y desarrolladores.",
          features: [
            "Página de perfil corporativo y logotipo exclusivo",
            "Enlace directo hacia el sitio web de su empresa",
            "Publicaciones ilimitadas de propiedades y claims",
            "Posicionamiento destacado en directorio y mapa",
            "Distribución prioritaria de clientes potenciales",
            "Primer mes totalmente GRATIS",
          ],
          ctaText: "Hacerse Miembro",
        },
      ],
      partnersBanner: {
        badge: "ALIANZAS_ESTRATÉGICAS",
        title: "¿Quién se beneficia más de las publicaciones por suscripción?",
        ctaPartner: "Programas de Socios y Referidos",
        ctaDiscuss: "Consultar Alianza Personalizada",
        targetAudiences: [
          {
            role: "Empresas Mineras Junior",
            benefit:
              "Perfil empresarial completo, logotipo, enlaces a su sitio web y listados ilimitados.",
          },
          {
            role: "Prospectores y Titulares de Concesiones",
            benefit:
              "Presente claims mineros a compradores activos con 0% de comisión de venta.",
          },
          {
            role: "Consultores Geológicos",
            benefit:
              "Promocione servicios especializados de asesoría e investigación registral.",
          },
          {
            role: "Desarrolladores Inmobiliarios y Corredores",
            benefit:
              "Promocione desarrollos residenciales, comerciales o carteras de terrenos vacantes.",
          },
        ],
      },
    },
    accomplishments: {
      badge: "expedientes",
      title: "Logros y Casos de Éxito",
      intro1:
        "Los proyectos reales exigen mucho más que investigación documental. Al combinar análisis SIG, registros de tierras, interpretación pericial de planos, valuaciones y peritajes técnicos, ayudamos a resolver desafíos complejos en propiedades, terrenos y recursos naturales.",
      intro2:
        "Los siguientes ejemplos destacan algunos de los proyectos y resultados logrados con éxito para nuestros clientes.",
      keyAreasLabel: "áreas clave",
      items: [
        {
          title: "Soporte en Expropiación de Tierras",
          summary:
            "Asesoramiento integral a un cliente en un procedimiento de expropiación frente a la Provincia de Columbia Británica. A través de investigación exhaustiva, revisión documental y peritaje territorial, el caso se resolvió con éxito, logrando retener la propiedad privada.",
          areas: [
            "Investigación y análisis predial",
            "Revisión de documentación de títulos",
            "Soporte pericial y cartográfico SIG",
            "Preparación de pruebas y evidencias",
          ],
        },
        {
          title: "Éxitos en Evaluaciones Prediales y Apelaciones de Impuestos",
          summary:
            "Respaldo pericial exitoso en múltiples litigios de avalúos y apelaciones fiscales en Columbia Británica. Mediante estudios de valuación, análisis comparativo basado en SIG y revisión de BC Assessment, se fundamentaron rebajas de avalúos y un trato fiscal equitativo.",
          areas: [
            "Análisis de valuación inmobiliaria",
            "Apelaciones ante BC Assessment",
            "Defensa y recursos de impuestos territoriales",
            "Estudios SIG de mercado comparables",
          ],
        },
        {
          title: "Corrección Cartográfica en ParcelMapBC",
          summary:
            "Identificación y documentación de un error geográfico en la subestación Barlow en Quesnel. Mediante análisis SIG, georreferenciación y revisión de planos históricos, la discrepancia fue corregida ante el catastro provincial oficial, mejorando la precisión de los registros.",
          areas: [
            "Análisis territorial SIG",
            "Interpretación de planos de agrimensura",
            "Georreferenciación",
            "Corrección técnica catastral",
          ],
        },
        {
          title: "Due Diligence en Propiedades Residenciales",
          summary:
            "Auditorías e investigaciones técnicas para transacciones inmobiliarias en las regiones de Barkerville y Cariboo. Los servicios abarcaron revisión de declaraciones de divulgación, gravámenes, comprobación de titularidad y detección de riesgos previos a la compra.",
          areas: [
            "Revisión de Declaraciones de Propiedad (PDS)",
            "Investigación registral de dominio",
            "Verificación de gravámenes y derechos",
            "Auditoría preventiva de due diligence",
          ],
        },
        {
          title: "Soporte en Exploración y Concesiones Mineras",
          summary:
            "Asesoría técnica para exploraciones mineras, prospectores y compañías júnior mediante estudio de títulos, cartografía SIG, reportes técnicos y evaluación de tenencias. Incluye estacado y staking de claims, geología de superficie e informes de avance.",
          areas: [
            "Investigación de concesiones mineras",
            "Mapeo y cartografía de exploración",
            "Integración de datos geológicos",
            "Elaboración de informes técnicos",
          ],
        },
      ],
    },
    pastClients: {
      badge: "RED_DE_CONFIANZA // CLIENTES",
      title: "La confianza de exploradores,",
      titleHighlight: "la industria y universidades",
      description:
        "Mapeo SIG de alta precisión, investigación de títulos Crown Grant, gestión de tenencias mineras y modelado de relieve realizados para corporaciones mineras líderes, empresas de servicios públicos, municipios e instituciones académicas.",
      seeAll: "Ver Todos los Clientes ({count})",
      verifiedClient: "Cliente Verificado",
      website: "Sitio Web",
      viewInArchive: "Ver en el Archivo →",
      calloutTitle: "¿Busca nuestro archivo completo de clientes?",
      calloutDesc:
        "Consulte los más de {totalCount} proyectos documentados, asesorías técnicas y alianzas institucionales.",
      calloutBtn: "Ver Más en Página de Servicios",
      spotlightCategories: {
        "University of Victoria": "ACADÉMICO / INVESTIGACIÓN",
        "Barkerville Gold Mines": "MINERÍA / OSISKO DEV",
        "JDS Mining": "OPERACIONES MINERAS",
        "B.C. Hydro": "EMPRESA DE SERVICIOS PÚBLICOS",
        "Dentons LLC": "LEGAL Y TÍTULOS DE TIERRAS",
        "University of Waterloo": "ACADÉMICO / MODELADO",
        "Quantum Critical Metals": "MINERALES CRÍTICOS",
        "The City of Coquitlam": "GOBIERNO MUNICIPAL",
      },
      spotlightNotes: {
        "University of Victoria":
          "Coordinación y enlace técnico para el recorrido geológico del tajo Phoenix.",
        "Barkerville Gold Mines":
          "Mapeo SIG de servidumbre de línea eléctrica de más de 100 km y complejas transferencias Crown Grant.",
        "JDS Mining":
          "Verificación de campo en SIG y soporte operativo para activos clave de exploración minera.",
        "B.C. Hydro":
          "Informes de monitoreo de embalses y análisis espacial de cuencas en Columbia Británica.",
        "Dentons LLC":
          "Soporte técnico en derecho minero, transferencias Crown Grant, títulos históricos y mapas catastrales.",
        "University of Waterloo":
          "Consultoría en modelos de mitigación de incendios forestales y evaluación de riesgos de relieve.",
        "Quantum Critical Metals":
          "Cartografía SIG de exploración, saneamiento de títulos e infografías geoespaciales para inversores.",
        "The City of Coquitlam":
          "Elaboración de mapas de monitoreo de cursos de agua en cooperación con B.C. Hydro.",
      },
    },
    globalTelemetry: {
      title: "Telemetría Global",
      satelliteActive: "ENLACE_SATELITAL_ACTIVO",
      viewMap: "Ver Mapa Completo",
    },
    certifications: {
      badge: "credenciales",
      title: "Certificaciones",
      description:
        "Calificaciones profesionales reconocidas por la industria en análisis geoespacial y tecnología minera.",
    },
    fieldReports: {
      title: "Informes",
      titleHighlight: "de Campo",
      description:
        "Avales y testimonios de directivos, geólogos y líderes de la industria minera. Información verificada.",
      readMore: "leer más..",
      readLess: "leer menos",
      presentationLink: "Presentación Plenaria de Jack Dangermond.",
      reports: [
        {
          text: "He tenido la oportunidad en los últimos años de trabajar estrechamente con Chris en numerosos asuntos, algunos de naturaleza sumamente compleja que exigían un análisis minucioso para alcanzar el objetivo deseado. Es muy inteligente, trabajador incansable, orientado a soluciones y realiza un seguimiento impecable de cada expediente. Posee una sólida comprensión de los desafíos que surgen y fue un verdadero placer colaborar con él. Es un honor extenderle esta carta de recomendación profesional.",
          author: "Brian Abraham",
          role: "K.C., P.Geo",
        },
        {
          text: "Hola Chris, ¡Felicitaciones por la selección de su imagen para la Conferencia de Usuarios Esri 2025! Su captura fue exhibida en la Sesión Plenaria de Jack Dangermond. ¡Excelente trabajo! Le agradecemos sinceramente su profesionalismo y esperamos sus futuras contribuciones.",
          author: "Esri",
          role: "Equipo de Admisiones Plenarias Esri",
          link: "https://mediaspace.esri.com/media/1_2rc7uxir?kalturaStartTime=563",
        },
      ],
    },
    tickerBanner: {
      partnersLabel: "Socios",
      tickerText:
        "🤝 PROGRAMA DE AFILIADOS — Obtenga el 10% de los pagos de nuevos clientes referidos durante su primer año, 5% posteriormente.     ⛏️ COMISIÓN POR REFERENCIA — Disponible para intermediarios de compradores calificados en nuestros proyectos mineros. Contáctenos para más detalles.     ",
      learnMore: "Más Información",
      dismiss: "Descartar",
    },
    footer: {
      tagline: "Matriz de Extracción de Datos",
      nav: {
        about: "Acerca de",
        services: "Servicios",
        portfolio: "Portafolio",
        mapView: "Mapa",
        properties: "Propiedades",
        partners: "Socios",
        fieldReports: "Informes de Campo",
        contact: "Contacto",
        clientPortal: "Portal de Clientes",
      },
      systemStatus: "ESTADO DEL SISTEMA: EN LÍNEA",
      rightsReserved: "© 2026 ADAMSON_GEOMATICS. TODOS LOS DERECHOS RESERVADOS.",
      architectLabel: "ARQUITECTO DE PLATAFORMA & DEV:",
      softwareEngineerRole: "INGENIERO ARQUITECTO DE SOFTWARE",
      portfolioLink: "PORTFOLIO",
    },
    newsletter: {
      title: "Boletín Informativo",
      intro: "Informes de campo, nuevas propiedades y actualizaciones de proyectos. Sin spam.",
      placeholder: "su_correo@ejemplo.com",
      submit: "Suscribirse",
      submitting: "Suscribiendo...",
      success: "¡Suscrito con éxito! Gracias.",
      errorDefault: "Ocurrió un error. Inténtelo de nuevo.",
      errorNetwork: "Error de conexión. Inténtelo de nuevo.",
    },
  },
  fr: {
    meta: {
      title: "Adamson Geomatics | Services SIG & Claims Miniers en Colombie-Britannique",
      description:
        "Services géospatiaux et fonciers professionnels en Colombie-Britannique. Cartographie SIG, jalonnement de claims miniers, LiDAR, modèles d'élévation et expertises foncières.",
    },
    cinematicHero: {
      evolutionLabel: "ÉVOLUTION",
      serviceRegistryHeader: "Répertoire des Services Adamson Geomatics",
      serviceRegistryTitle: "Géomatique / SIG",
      serviceRegistryItems: [
        "Courtage de Propriétés",
        "Cartographie Géologique",
        "LiDAR / MNE",
        "Prospection",
        "Dossiers de Permis",
        "Zonage et Lotissements",
      ],
      mainBadge: "Adamson Geomatics",
      mainTitleLine: "SIG de Précision et",
      mainTitleHighlight: "Gestion Foncière.",
      mainDescription:
        "Conseil géospatial d'excellence en exploration minérale, gestion foncière et services immobiliers au Canada, aux États-Unis et à l'international.",
      ctaMap: "Voir le Portefeuille Cartographique",
      ctaServices: "Nos Prestations",
    },
    serviceRegistry: {
      badge: "RÉPERTOIRE_DES_SERVICES",
      title: "Plateforme Opérationnelle",
      titleHighlight: "des Services SIG",
      description:
        "Accompagnement terrain complet pour la gestion des titres, les acquisitions, la prospection, les permis, la modélisation topographique et les dossiers d'investisseurs.",
      buttonReview: "Consulter le Répertoire Complet des Services",
      servicesFeed: "FLUX_DES_PRESTATIONS",
      entriesSuffix: "_SERVICES",
      showLess: "RÉDUIRE",
      expandSection: "DÉPLOYER_SECTION",
      seeAllEntries: "VOIR_LES_{count}_PRESTATIONS",
      systemTotals: "INDICATEURS_SYSTÈME",
      outputIndex: "RÉPERTOIRE_DES_LIVRABLES",
      fieldNoteLabel: "NOTE_DE_TERRAIN",
      fieldNoteText:
        "Conçu pour les opérateurs recherchant la régularité des titres, l'assistance aux permis, la cartographie et l'analyse topographique au sein d'un processus unifié sans dispersion des prestataires.",
      nextActionLabel: "ACTION_SUIVANTE",
      reviewSpecification: "Consulter les Spécifications Complètes",
      seeAllDetails: "VOIR_TOUS_LES_DÉTAILS",
    },
    projectPreview: {
      badge: "PROJETS_À_LA_UNE",
      title: "Portefeuille",
      titleHighlight: "de Projets",
      description:
        "Régions actives, propriétés disponibles et cartographies sélectionnées issues des archives d'Adamson Geomatics.",
      viewAll: "Voir Tous les Projets",
      showing: "Affichage de {count} sur {total} Projets",
      available: "{count} Disponibles à l'Acquisition",
      statusForSale: "À VENDRE",
      statusActive: "ACTIF",
      viewDossier: "Consulter le Dossier",
      defaultSummary:
        "Ouvrez le dossier du projet pour consulter les cartes, les synthèses techniques et la documentation régionale.",
      ctaText:
        "Explorez l'archive intégrale des projets, la cartographie spatiale et les propriétés prêtes à l'acquisition.",
      ctaMap: "Carte Interactive",
      ctaForSale: "À Vendre",
    },
    listingMembership: {
      badge: "MODÈLES D'INSCRIPTION // ADHÉSION",
      title: "Inscrivez votre Propriété et",
      titleHighlight: "Valorisez votre Entreprise",
      description:
        "Sélectionnez le modèle de diffusion ou le forfait d'adhésion d'entreprise adapté à vos objectifs. Des formules à la commission sans frais initiaux aux forfaits d'annonces illimitées.",
      bestForLabel: "IDÉAL POUR",
      featuresLabel: "Fonctionnalités Incluses :",
      plans: [
        {
          id: "commission",
          name: "Inscription sur Commission",
          tag: "SANS FRAIS INITIAUX",
          price: "0 $",
          period: "au départ",
          description:
            "Diffusez votre bien gratuitement. Nous assurons la promotion et la visibilité technique, percevant une commission uniquement lors de la conclusion d'une vente.",
          idealFor: "Propriétaires souhaitant éliminer tout coût initial de mise en marché.",
          features: [
            "Aucun frais d'inscription initial",
            "Visibilité commerciale et technique maximale",
            "Élaboration du dossier cartographique et SIG",
            "Commission prélevée uniquement en cas de vente",
            "Transmission standard des demandes d'acheteurs",
          ],
          ctaText: "Contactez-nous",
        },
        {
          id: "subscription-listing",
          name: "Abonnement Annonce",
          tag: "100% PRODUIT DE VENTE",
          price: "100 $",
          period: "/ mois",
          promoBadge: "1ER MOIS OFFERT",
          description:
            "Conservez 100 % du produit de votre vente grâce à un tarif mensuel forfaitaire. Maîtrise totale des photos, cartes, documents PDF et coordonnées du vendeur.",
          idealFor: "Vendeurs recherchant des coûts prévisibles et 0 % de commission.",
          features: [
            "Conservez 100 % du prix de vente (0 % commission)",
            "Premier mois entièrement GRATUIT",
            "Mise à jour libre de vos annonces à tout moment",
            "Photos, cartes spatiales, PDFs et contacts inclus",
            "Demandes d'acheteurs transmises directement",
          ],
          ctaText: "Essai Gratuit",
        },
        {
          id: "company-membership",
          name: "Adhésion Entreprise",
          tag: "SUITE PROMOTIONNELLE COMPLÈTE",
          price: "150 $",
          period: "/ mois",
          promoBadge: "1ER MOIS OFFERT",
          description:
            "Valorisation de marque complète et annonces illimitées pour les sociétés minières juniors, prospecteurs, consultants et aménageurs.",
          idealFor: "Sociétés juniors, prospecteurs, consultants et promoteurs.",
          features: [
            "Page profil entreprise dédiée avec logo officiel",
            "Lien retour direct vers votre site internet",
            "Annonces illimitées de concessions et propriétés",
            "Visibilité prioritaire sur le répertoire et la carte",
            "Distribution directe des prospects qualifiés",
            "Premier mois entièrement GRATUIT",
          ],
          ctaText: "Devenir Membre",
        },
      ],
      partnersBanner: {
        badge: "PARTENARIATS_RÉSEAU",
        title: "Qui tire le meilleur parti des abonnements ?",
        ctaPartner: "Programmes d'Affiliation & Partenaires",
        ctaDiscuss: "Discuter d'un Partenariat Sur Mesure",
        targetAudiences: [
          {
            role: "Sociétés Minières Juniors",
            benefit:
              "Profil d'entreprise complet, logo, liens vers votre site et annonces illimitées d'actifs.",
          },
          {
            role: "Prospecteurs & Titulaires de Claims",
            benefit:
              "Exposez vos claims miniers auprès d'acquéreurs actifs avec 0 % de commission sur les ventes.",
          },
          {
            role: "Consultants en Géologie",
            benefit:
              "Faites valoir vos prestations d'experts et vos compétences en analyse de registres fonciers.",
          },
          {
            role: "Aménageurs Fonciers & Courtiers",
            benefit:
              "Mettez en avant des portefeuilles résidentiels, commerciaux ou de terrains nus.",
          },
        ],
      },
    },
    accomplishments: {
      badge: "dossiers de cas",
      title: "Réalisations & Études de Cas",
      intro1:
        "Les projets d'envergure exigent bien plus qu'une simple recherche théorique. En associant analyses SIG, recherche cadastrale, interprétation d'arpentages, expertise d'évaluation et rigueur d'enquête technique, nous permettons à nos clients de surmonter leurs défis fonciers et miniers les plus exigeants.",
      intro2:
        "Les dossiers ci-dessous témoignent des missions et succès récemment concrétisés pour nos clients.",
      keyAreasLabel: "domaines clés",
      items: [
        {
          title: "Accompagnement en Expropriation Foncière",
          summary:
            "Assistance à un propriétaire dans le cadre d'une procédure d'expropriation avec le gouvernement de Colombie-Britannique. Grâce à des recherches cadastrales poussées et à l'analyse percutante du dossier, la propriété privée a pu être préservée.",
          areas: [
            "Recherche et diagnostic foncier",
            "Examen documentaire des titres",
            "Soutien perquisition et cartographie SIG",
            "Constitution du dossier de preuve",
          ],
        },
        {
          title: "Succès en Évaluation et Recours Fiscaux",
          summary:
            "Défense réussie de plusieurs dossiers d'évaluation et de contestation fiscale foncière en Colombie-Britannique. Sur la base d'études comparatives SIG et d'évaluations rigoureuses, des ajustements d'assiette équitables ont été obtenus.",
          areas: [
            "Analyse et expertise de valeur foncière",
            "Recours auprès de BC Assessment",
            "Contentieux et réclamations fiscales",
            "Études SIG de comparables de marché",
          ],
        },
        {
          title: "Correction Cartographique ParcelMapBC",
          summary:
            "Détection d'une anomalie cartographique relative au poste électrique de Barlow dans la région de Quesnel. Grâce aux analyses SIG, au géoréférencement et à l'examen de plans d'arpentage d'époque, la distorsion a été rectifiée sur le cadastre officiel.",
          areas: [
            "Analyse spatiale SIG",
            "Interprétation de plans d'arpentage",
            "Géoréférencement haute précision",
            "Recherche et rectification parcellaire",
          ],
        },
        {
          title: "Audit Préalable de Propriétés Résidentielles",
          summary:
            "Missions de vérification préalable (due diligence) pour des transactions immobilières dans les régions de Barkerville et Cariboo. Contrôle des déclarations des vendeurs, vérification des titres et détection des servitudes avant conclusion des acquisitions.",
          areas: [
            "Examen des Déclarations de Divulgation (PDS)",
            "Recherche sur l'historique des titres",
            "Vérification des droits de propriété",
            "Audits préalables d'acquisition",
          ],
        },
        {
          title: "Soutien à l'Exploration et Titres Miniers",
          summary:
            "Assistance technique à des projets d'exploration, prospecteurs et compagnies minières à travers la recherche de titres, la cartographie SIG et l'évaluation foncière. Missions incluant jalonnement de claims, géologie de terrain et rapports techniques.",
          areas: [
            "Recherche de claims et titres miniers",
            "Cartographie d'exploration",
            "Intégration de données géologiques",
            "Rapports techniques de conformité",
          ],
        },
      ],
    },
    pastClients: {
      badge: "RÉSEAU_DE_CONFIANCE // CLIENTS",
      title: "La confiance des explorateurs,",
      titleHighlight: "de l'industrie et des universités",
      description:
        "Cartographie SIG de haute précision, recherche sur les concessions Crown Grant, gestion des titres miniers et modélisation topographique pour de grandes compagnies minières, services publics, municipalités et centres universitaires.",
      seeAll: "Voir Tous les Clients ({count})",
      verifiedClient: "Client Vérifié",
      website: "Site Web",
      viewInArchive: "Voir dans les Archives →",
      calloutTitle: "Vous recherchez notre répertoire complet ?",
      calloutDesc:
        "Découvrez l'ensemble des {totalCount}+ missions clients documentées, projets d'expertise et partenariats institutionnels.",
      calloutBtn: "En Savoir Plus sur la Page Services",
      spotlightCategories: {
        "University of Victoria": "UNIVERSITAIRE / RECHERCHE",
        "Barkerville Gold Mines": "MINES / OSISKO DEV",
        "JDS Mining": "EXPLOITATION MINIÈRE",
        "B.C. Hydro": "SERVICE PUBLIC D'ÉNERGIE",
        "Dentons LLC": "JURIDIQUE & DROIT FONCIER",
        "University of Waterloo": "UNIVERSITAIRE / MODÉLISATION",
        "Quantum Critical Metals": "MÉTAUX STRATÉGIQUES",
        "The City of Coquitlam": "COLLECTIVITÉ MUNICIPALE",
      },
      spotlightNotes: {
        "University of Victoria":
          "Mise en relation et organisation de la visite géologique de la fosse Phoenix.",
        "Barkerville Gold Mines":
          "Cartographie SIG du tracé de ligne électrique sur plus de 100 km et transferts complexes de Crown Grants.",
        "JDS Mining":
          "Cartographie SIG de terrain et soutien opérationnel sur des actifs miniers majeurs.",
        "B.C. Hydro":
          "Rapports de surveillance des réservoirs et analyses spatiales de bassins versants en Colombie-Britannique.",
        "Dentons LLC":
          "Conseil technique sur les titres miniers, transferts complexes Crown Grant et reconstitution parcellaire.",
        "University of Waterloo":
          "Consultation sur la modélisation des feux de forêt et l'évaluation des risques topographiques.",
        "Quantum Critical Metals":
          "Cartographie d'exploration SIG, régularisation de titres et supports géospatiaux pour investisseurs.",
        "The City of Coquitlam":
          "Cartographie du suivi des cours d'eau en partenariat avec B.C. Hydro.",
      },
    },
    globalTelemetry: {
      title: "Télémétrie Globale",
      satelliteActive: "LIAISON_SATELLITE_ACTIVE",
      viewMap: "Voir la Carte Complète",
    },
    certifications: {
      badge: "certifications",
      title: "Certifications & Distinctions",
      description:
        "Qualifications professionnelles reconnues par l'industrie en analyse géospatiale et technologies minières.",
    },
    fieldReports: {
      title: "Rapports",
      titleHighlight: "de Terrain",
      description:
        "Témoignages de dirigeants, géologues et figures de proue de l'industrie minière. Intelligence vérifiée.",
      readMore: "lire la suite..",
      readLess: "réduire",
      presentationLink: "Présentation Plénière de Jack Dangermond.",
      reports: [
        {
          text: "J'ai eu l'opportunité ces dernières années de travailler étroitement avec Chris sur de nombreux dossiers, dont certains très complexes qui demandaient une analyse méticuleuse pour atteindre l'objectif visé. Il fait preuve d'une grande vivacité d'esprit, d'une remarquable éthique de travail et assure un suivi rigoureux de chaque enjeu. Il possède une solide maîtrise des défis techniques et fonciers, et ce fut un réel plaisir de collaborer avec lui. C'est un véritable privilège de lui accorder cette recommandation.",
          author: "Brian Abraham",
          role: "K.C., P.Geo",
        },
        {
          text: "Bonjour Chris, Toutes nos félicitations pour la sélection de votre travail lors de la Conférence des Utilisateurs Esri 2025 ! Votre image a été mise à l'honneur lors de la Présentation Plénière de Jack Dangermond. Bravo ! Nous tenons à vous remercier chaleureusement pour votre contribution d'excellence.",
          author: "Esri",
          role: "Équipe de Sélection Plénière Esri",
          link: "https://mediaspace.esri.com/media/1_2rc7uxir?kalturaStartTime=563",
        },
      ],
    },
    tickerBanner: {
      partnersLabel: "Partenaires",
      tickerText:
        "🤝 PROGRAMME D'AFFILIATION — Recevez 10 % des paiements des nouveaux clients recommandés durant leur 1ère année, 5 % par la suite.     ⛏️ HONORAIRES D'INTERMÉDIATION — Offerts pour la mise en relation avec des acquéreurs qualifiés sur nos projets miniers. Contactez-nous.     ",
      learnMore: "En Savoir Plus",
      dismiss: "Fermer",
    },
    footer: {
      tagline: "Matrice d'Extraction de Données",
      nav: {
        about: "À propos",
        services: "Services",
        portfolio: "Portefeuille",
        mapView: "Carte",
        properties: "Propriétés",
        partners: "Partenaires",
        fieldReports: "Rapports de Terrain",
        contact: "Contact",
        clientPortal: "Espace Client",
      },
      systemStatus: "ÉTAT DU SYSTÈME : EN LIGNE",
      rightsReserved: "© 2026 ADAMSON_GEOMATICS. TOUS DROITS RÉSERVÉS.",
      architectLabel: "ARCHITECTE DE PLATEFORME & DEV :",
      softwareEngineerRole: "INGÉNIEUR ARCHITECTE LOGICIEL",
      portfolioLink: "PORTFOLIO",
    },
    newsletter: {
      title: "Lettre d'Information",
      intro: "Rapports de terrain, nouvelles propriétés et actualités de projets. Sans spam.",
      placeholder: "votre_email@exemple.com",
      submit: "S'abonner",
      submitting: "Inscription...",
      success: "Inscrit avec succès ! Merci.",
      errorDefault: "Une erreur est survenue. Veuillez réessayer.",
      errorNetwork: "Erreur réseau. Veuillez réessayer.",
    },
  },
};
