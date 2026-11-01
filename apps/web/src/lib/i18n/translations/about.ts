import type { Locale, AboutTranslation } from "../types";

export const aboutTranslations: Record<Locale, AboutTranslation> = {
  en: {
    meta: {
      title: "About — Adamson Geomatics",
      description:
        "Chris Adamson is a Registered Inspector (R.I.) providing professional land management, GIS mapping, and geospatial services in British Columbia and beyond. Fully insured with CAD $2M professional and commercial liability.",
    },
    hero: {
      whois: "WHOIS // PORTFOLIO_OWNER",
      insuredBadge: "FULLY INSURED // CAD $2,000,000 LIABILITY",
      name: "Chris",
      titleSuffix: "Adamson, R.I.",
      roles: {
        gis: "GIS Specialist",
        landAnalyst: "Land Analyst",
        mapping: "Mapping Professional",
        insured: "Insured Practice",
      },
      bioParagraphs: [
        "GIS and land information specialist with extensive experience in property research, mineral tenure, mapping, land analysis, and resource sector projects throughout British Columbia, Canada, and internationally.",
        "With a background in geography, mapping, and spatial analysis, Chris works at the intersection of land ownership, property valuation, mineral exploration, and geographic information systems (GIS). His work combines technical mapping, historical research, survey interpretation, and data analysis to help clients make informed decisions regarding land, property, and resource opportunities.",
        "Chris has supported a wide range of projects including property due diligence, title research, assessment appeals, mineral claim investigations, exploration targeting, boundary analysis, and parcel correction initiatives. His approach focuses on combining accurate data, practical field knowledge, and modern GIS technologies to solve complex land-related challenges.",
        "Over the years, Chris has worked with property owners, prospectors, exploration companies, investors, and resource industry professionals, providing mapping, research, and analytical services tailored to each project's unique requirements.",
      ],
    },
    insurance: {
      sectionTitle: "INSURANCE_&_LIABILITY_COVERAGE",
      statusBadge: "ACTIVE & VERIFIED",
      intro: {
        prefix: "Adamson Geomatics Ltd maintains comprehensive commercial and professional liability insurance underwritten ",
        lloydsText: "100% by Lloyd's of London Underwriters",
        viaText: " via ",
        cfcText: "CFC Underwriting Limited",
        andText: " and ",
        zensuranceText: "Zensurance",
        suffix: ". All consulting, land acquisition, GIS mapping, and field operations carry robust worldwide protection.",
      },
      territorialScope: "Worldwide",
      cards: [
        {
          title: "Professional Liability (E&O)",
          limit: "CAD $2,000,000",
          subtext: "Per claim & in the aggregate",
          desc: "Full civil liability and errors & omissions protection including contract breach, sub-contractor vicarious liability, and worldwide legal defense.",
        },
        {
          title: "Commercial General Liability (CGL)",
          limit: "CAD $2,000,000",
          subtext: "Per occurrence & in the aggregate",
          desc: "Comprehensive coverage for third-party bodily injury, property damage, completed operations, and personal/advertising liability.",
        },
        {
          title: "Pollution & Environmental Liability",
          limit: "CAD $2,000,000",
          subtext: "Sudden, accidental & gradual coverage",
          desc: "Full pollution liability coverage arising from professional geospatial, mineral tenure, and land consultation advice.",
        },
        {
          title: "Non-Owned & Hired Automobile (SPF No. 6)",
          limit: "CAD $1,000,000",
          subtext: "Third-party liability + hired auto damage",
          desc: "Legal protection for vehicles operated under contract or hired during field operations across Canada and the USA.",
        },
      ],
      table: {
        headerTitle: "Policy Scope & Insuring Clauses (Ref: #7693234)",
        securityNote: "Security: 100% Lloyd's of London",
        items: [
          {
            title: "Errors & Omissions (E&O)",
            limit: "CAD $2,000,000",
            detail: "Full civil liability cover defending claims brought anywhere in the world.",
          },
          {
            title: "Contractual Liability",
            limit: "CAD $2,000,000",
            detail: "Unambiguous protection for voluntary contracts and service agreements.",
          },
          {
            title: "Sub-Contractor Vicarious Liability",
            limit: "CAD $2,000,000",
            detail: "Coverage extends to field partners and specialized sub-contractors.",
          },
          {
            title: "Intellectual Property Rights Infringement",
            limit: "CAD $2,000,000",
            detail: "Legal costs, damages, and settlements for copyright/trademark claims.",
          },
          {
            title: "Regulatory Costs & Legal Fines",
            limit: "CAD $2,000,000",
            detail: "Coverage for statutory compliance inquiries, formal hearings, and defense.",
          },
          {
            title: "Loss Mitigation & Court Costs",
            limit: "CAD $2,000,000 / $100k",
            detail: "Direct loss mitigation expenses and expert witness / court attendance allowances.",
          },
        ],
      },
      documents: {
        viewDoc: "View Document",
        download: "Download",
        items: [
          {
            title: "CFC & Lloyd's Underwriters Policy Quote & Terms",
            filename: "20260817 QUOTE 7693234.Pdf",
            url: "/documents/20260817%20QUOTE%207693234.Pdf",
            size: "211 KB",
            description: "Full terms, declarations, and coverage limits for Adamson Geomatics Ltd underwritten by 100% Lloyd's of London Underwriters.",
            type: "Policy Declarations",
          },
          {
            title: "Zensurance Confirmation of Active Coverage",
            filename: "Zensurance.pdf",
            url: "/documents/Zensurance.pdf",
            size: "88 KB",
            description: "Payment and policy activation certificate issued via Zensurance (Quote ID: 25442617).",
            type: "Broker Confirmation",
          },
        ],
      },
    },
    certifications: {
      sectionTitle: "CERTIFICATIONS_&_INDUSTRY_RECOGNITION",
      intro: "Demonstrated mastery in geographic information systems, spatial database design, and international recognition at the industry's leading geospatial venues.",
      zoomHint: "Click to Zoom",
      items: [
        {
          title: "Esri Technical Certification",
          issuer: "Esri (Environmental Systems Research Institute)",
          description: "Industry-standard certification in advanced geospatial analysis, cartographic design, and enterprise GIS implementations.",
        },
        {
          title: "2025 Esri User Conference Plenary Presentation",
          issuer: "Featured in Jack Dangermond's Plenary Address",
          description: "Geospatial mapping and analytical work selected and spotlighted by Esri President Jack Dangermond during the global plenary presentation.",
        },
        {
          title: "Esri Professional Qualification",
          issuer: "Esri (Environmental Systems Research Institute)",
          description: "Specialized credentials recognizing expertise in geodatabase management, terrain modelling, and spatial data science.",
        },
      ],
    },
    education: {
      sectionTitle: "EDUCATION_&_BACKGROUND",
      items: [
        {
          institution: "University of British Columbia (UBC)",
          degree: "UBC degree Geography (GIS) 2006",
          image: "/images/general/University%20of%20British%20Columbia.jpg",
          url: "https://www.ubc.ca/",
        },
        {
          institution: "Real Estate Institute of British Columbia (RIBC)",
          degree: "Professional Studies",
          image: "/images/general/Real%20Estate%20Institute%20of%20British%20Columbia.png",
          url: "https://www.reibc.org/",
        },
      ],
    },
    expertise: {
      sectionTitle: "AREAS_OF_EXPERTISE",
      items: [
        "Geographic Information Systems (GIS)",
        "Property Valuation & Assessment Appeals",
        "Property Due Diligence",
        "Title Searches & Ownership Research",
        "Boundary Disputes & Parcel Corrections",
        "Mineral Claim Research & Staking Support",
        "Geological & Exploration Mapping",
        "LiDAR and Terrain Analysis",
        "Survey Plan Interpretation & Georeferencing",
        "Technical Mapping & Reporting",
      ],
    },
    approach: {
      sectionTitle: "PROFESSIONAL_APPROACH",
      paragraphs: [
        "Every project begins with the same objective: delivering reliable information that clients can confidently use to make decisions. Whether supporting a property owner with a boundary issue, assisting with a tax appeal, researching land ownership, or helping evaluate mineral opportunities, the focus remains on accuracy, transparency, and practical results.",
        "By combining technical GIS expertise with a strong understanding of land records, mapping systems, and property research, Chris provides solutions that bridge the gap between complex spatial data and real-world decision making.",
      ],
      badges: [
        "Serving British Columbia & Canada",
        "20+ Years of Experience",
        "CAD $2.0M Insured & Bonded",
      ],
    },
    engineering: {
      sectionTitle: "PLATFORM_ARCHITECTURE // SOFTWARE_ENGINEERING",
      dossierBadge: "CORE_DEVELOPER_DOSSIER",
      statusBadge: "AVAILABLE_FOR_WORK",
      roleTag: "PLATFORM_ARCHITECT",
      title: "Raed Guembri",
      subtitle: "Software Architect Engineer",
      quote: '"I design and ship full-stack systems where architecture, interface motion, and developer discipline work like one instrument."',
      description: "From Web GIS platforms and AI-assisted recruitment tools to dashboards, automated quality systems, VPS deployments, and data-heavy products, I build software that feels fast, legible, observable, and ready to scale.",
      availabilityHeading: "AVAILABILITY",
      availabilityText: "Open to software engineering, architecture, QA automation, and AI-integrated product work.",
      buttons: {
        portfolio: "Portfolio",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "raed.guembri99@gmail.com",
      },
    },
  },
  es: {
    meta: {
      title: "Acerca de — Adamson Geomatics",
      description:
        "Chris Adamson es un Inspector Registrado (R.I.) que proporciona gestión profesional de tierras, cartografía SIG y servicios geoespaciales en Columbia Británica e internacionalmente. Asegurado con CAD $2M en responsabilidad civil y profesional.",
    },
    hero: {
      whois: "WHOIS // TITULAR_DEL_PORTAFOLIO",
      insuredBadge: "TOTALMENTE ASEGURADO // RESPONSABILIDAD CAD $2,000,000",
      name: "Chris",
      titleSuffix: "Adamson, R.I.",
      roles: {
        gis: "Especialista SIG",
        landAnalyst: "Analista de Tierras",
        mapping: "Profesional de Cartografía",
        insured: "Práctica Asegurada",
      },
      bioParagraphs: [
        "Especialista en sistemas de información geográfica y gestión territorial con amplia experiencia en investigación de propiedades, tenencia minera, cartografía técnica, análisis de tierras y proyectos del sector de recursos en Columbia Británica, Canadá y a nivel internacional.",
        "Con formación académica en geografía, cartografía y análisis espacial, Chris opera en la intersección de la propiedad predial, avalúos de tierras, exploración minera y sistemas de información geográfica (SIG). Su trabajo integra mapeo técnico, investigación histórica, interpretación de planos catastrales y análisis de datos para fundamentar decisiones estratégicas en proyectos mineros y territoriales.",
        "Chris ha respaldado una amplia variedad de proyectos, incluidos debida diligencia de propiedades, estudios de títulos, apelaciones de avalúos fiscales, investigaciones de concesiones mineras, determinación de objetivos de exploración, análisis de límites y regularización de parcelas.",
        "A lo largo de los años, Chris ha colaborado estrechamente con propietarios de tierras, prospectores, empresas de exploración junior y senior, inversionistas y profesionales del sector minero, brindando servicios cartográficos y analíticos adaptados a los requerimientos de cada proyecto.",
      ],
    },
    insurance: {
      sectionTitle: "COBERTURA_DE_SEGURO_Y_RESPONSABILIDAD",
      statusBadge: "ACTIVO Y VERIFICADO",
      intro: {
        prefix: "Adamson Geomatics Ltd cuenta con una póliza integral de seguro de responsabilidad comercial y profesional suscrita al ",
        lloydsText: "100% por los aseguradores de Lloyd's de Londres",
        viaText: " a través de ",
        cfcText: "CFC Underwriting Limited",
        andText: " y ",
        zensuranceText: "Zensurance",
        suffix: ". Todas las labores de consultoría, adquisición de tierras, cartografía SIG y operaciones de campo cuentan con sólida protección jurídica y financiera a nivel mundial.",
      },
      territorialScope: "Mundial",
      cards: [
        {
          title: "Responsabilidad Profesional (E&O)",
          limit: "CAD $2,000,000",
          subtext: "Por reclamo y en el agregado",
          desc: "Cobertura completa por responsabilidad civil, errores y omisiones, incumplimiento de contrato, responsabilidad vicaria de subcontratistas y defensa jurídica internacional.",
        },
        {
          title: "Responsabilidad Civil General Comercial (CGL)",
          limit: "CAD $2,000,000",
          subtext: "Por evento y en el agregado",
          desc: "Protección integral contra lesiones corporales a terceros, daños a la propiedad ajena, operaciones completadas y responsabilidad por publicidad.",
        },
        {
          title: "Responsabilidad por Contaminación y Ambiental",
          limit: "CAD $2,000,000",
          subtext: "Cobertura súbita, accidental y gradual",
          desc: "Cobertura de responsabilidad ambiental derivada de asesorías geoespaciales, tenencia minera y consultas territoriales.",
        },
        {
          title: "Automóviles No Propios y Alquilados (SPF No. 6)",
          limit: "CAD $1,000,000",
          subtext: "Responsabilidad civil a terceros + daños a vehículos",
          desc: "Protección legal para vehículos operados bajo contrato o alquilados durante trabajos de campo en Canadá y EE. UU.",
        },
      ],
      table: {
        headerTitle: "Alcance de la Póliza y Cláusulas de Cobertura (Ref: #7693234)",
        securityNote: "Garantía: 100% Lloyd's de Londres",
        items: [
          {
            title: "Errores y Omisiones (E&O)",
            limit: "CAD $2,000,000",
            detail: "Cobertura total de responsabilidad civil para litigios entablados en cualquier parte del mundo.",
          },
          {
            title: "Responsabilidad Contractual",
            limit: "CAD $2,000,000",
            detail: "Protección explícita para contratos de servicios y convenios comerciales voluntarios.",
          },
          {
            title: "Responsabilidad Vicaria de Subcontratistas",
            limit: "CAD $2,000,000",
            detail: "La cobertura se extiende formalmente a colaboradores de campo y subcontratistas técnicos.",
          },
          {
            title: "Infracción de Propiedad Intelectual",
            limit: "CAD $2,000,000",
            detail: "Costas legales, indemnizaciones y acuerdos judiciales relacionados con derechos de autor y marcas.",
          },
          {
            title: "Costos Regulatorios y Multas Legales",
            limit: "CAD $2,000,000",
            detail: "Cobertura en procedimientos de cumplimiento estatutario, audiencias formales y defensa jurídica.",
          },
          {
            title: "Mitigación de Pérdidas y Costas Procesales",
            limit: "CAD $2,000,000 / $100k",
            detail: "Gastos directos de mitigación de daños y asignaciones por comparecencia judicial y peritajes.",
          },
        ],
      },
      documents: {
        viewDoc: "Ver Documento",
        download: "Descargar",
        items: [
          {
            title: "Cotización y Términos de Póliza CFC y Lloyd's",
            filename: "20260817 QUOTE 7693234.Pdf",
            url: "/documents/20260817%20QUOTE%207693234.Pdf",
            size: "211 KB",
            description: "Condiciones completas, declaraciones y límites de cobertura de Adamson Geomatics Ltd suscritos al 100% por Lloyd's of London Underwriters.",
            type: "Declaraciones de Póliza",
          },
          {
            title: "Confirmación de Cobertura Activa Zensurance",
            filename: "Zensurance.pdf",
            url: "/documents/Zensurance.pdf",
            size: "88 KB",
            description: "Certificado de activación y comprobante de vigencia emitido por Zensurance (Quote ID: 25442617).",
            type: "Confirmación de Corredor",
          },
        ],
      },
    },
    certifications: {
      sectionTitle: "CERTIFICACIONES_Y_RECONOCIMIENTO_SECTORIAL",
      intro: "Dominio demostrado en sistemas de información geográfica, diseño de bases de datos espaciales y reconocimiento público en los eventos geoespaciales más prestigiosos del mundo.",
      zoomHint: "Clic para Ampliar",
      items: [
        {
          title: "Certificación Técnica Esri",
          issuer: "Esri (Environmental Systems Research Institute)",
          description: "Certificación de estándar industrial en análisis geoespacial avanzado, diseño cartográfico y despliegues empresariales de SIG.",
        },
        {
          title: "Presentación Plenaria Conferencia de Usuarios Esri 2025",
          issuer: "Destacado en el Discurso Plenario de Jack Dangermond",
          description: "Trabajo analítico y cartográfico geoespacial seleccionado y presentado por Jack Dangermond, Presidente de Esri, ante la audiencia plenaria mundial.",
        },
        {
          title: "Cualificación Profesional Esri",
          issuer: "Esri (Environmental Systems Research Institute)",
          description: "Credenciales especializadas que acreditan experiencia en administración de geodatabases, modelado de terreno y ciencia de datos espaciales.",
        },
      ],
    },
    education: {
      sectionTitle: "EDUCACIÓN_Y_TRAYECTORIA",
      items: [
        {
          institution: "Universidad de Columbia Británica (UBC)",
          degree: "Licenciatura en Geografía (SIG) UBC 2006",
          image: "/images/general/University%20of%20British%20Columbia.jpg",
          url: "https://www.ubc.ca/",
        },
        {
          institution: "Instituto de Bienes Raíces de Columbia Británica (RIBC)",
          degree: "Estudios Profesionales",
          image: "/images/general/Real%20Estate%20Institute%20of%20British%20Columbia.png",
          url: "https://www.reibc.org/",
        },
      ],
    },
    expertise: {
      sectionTitle: "ÁREAS_DE_ESPECIALIZACIÓN",
      items: [
        "Sistemas de Información Geográfica (SIG)",
        "Valuación de Propiedades y Apelaciones de Avalúos",
        "Debida Diligencia Territorial y de Propiedades",
        "Estudios de Títulos e Investigación de Dominio",
        "Disputas de Linderos y Corrección de Parcelas",
        "Investigación y Demarcación de Concesiones Mineras",
        "Mapeo Geológico y de Exploración",
        "Análisis de Terreno y LiDAR",
        "Interpretación de Planos Topográficos y Georreferenciación",
        "Informes Técnicos y Cartografía Especializada",
      ],
    },
    approach: {
      sectionTitle: "ENFOQUE_PROFESIONAL",
      paragraphs: [
        "Cada proyecto inicia con un principio inmutable: entregar información fidedigna y verificable para que los clientes tomen decisiones con absoluta certeza. Ya sea respaldando a un propietario en un litigio de linderos, asesorando en una apelación fiscal, investigando antecedentes registrales o evaluando activos mineros, el enfoque está en la precisión, la transparencia y el resultado práctico.",
        "Al integrar la destreza técnica en SIG con un profundo entendimiento del régimen registral, los sistemas catastrales y la investigación legal de la tierra, Chris ofrece soluciones que unen la complejidad de los datos espaciales con la toma de decisiones del mundo real.",
      ],
      badges: [
        "Atención en Columbia Británica y Canadá",
        "Más de 20 Años de Experiencia",
        "CAD $2.0M Asegurado y Afianzado",
      ],
    },
    engineering: {
      sectionTitle: "ARQUITECTURA_DE_PLATAFORMA // INGENIERÍA_DE_SOFTWARE",
      dossierBadge: "DOSSIER_DESARROLLADOR_PRINCIPAL",
      statusBadge: "DISPONIBLE_PARA_PROYECTOS",
      roleTag: "ARQUITECTO_DE_PLATAFORMA",
      title: "Raed Guembri",
      subtitle: "Ingeniero Arquitecto de Software",
      quote: '"Diseño y desarrollo sistemas de pila completa donde la arquitectura, la fluidez visual y la disciplina de ingeniería funcionan como un solo instrumento."',
      description: "Desde plataformas Web SIG y herramientas de reclutamiento con IA hasta paneles analíticos, sistemas automatizados de calidad, servidores VPS y productos de alto volumen de datos, construyo software rápido, legible, observable y listo para escalar.",
      availabilityHeading: "DISPONIBILIDAD",
      availabilityText: "Disponible para ingeniería de software, arquitectura técnica, automatización de QA y proyectos con integración de inteligencia artificial.",
      buttons: {
        portfolio: "Portafolio",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "raed.guembri99@gmail.com",
      },
    },
  },
  fr: {
    meta: {
      title: "À propos — Adamson Geomatics",
      description:
        "Chris Adamson est un inspecteur agréé (R.I.) fournissant des services professionnels de gestion foncière, de cartographie SIG et géospatiaux en Colombie-Britannique et à l'international. Entièrement assuré avec 2M$ CAD en responsabilité civile et professionnelle.",
    },
    hero: {
      whois: "QUI_SUIS_JE // TITULAIRE_DU_DOSSIER",
      insuredBadge: "ENTIÈREMENT ASSURÉ // RESPONSABILITÉ 2 000 000 $ CAD",
      name: "Chris",
      titleSuffix: "Adamson, R.I.",
      roles: {
        gis: "Spécialiste SIG",
        landAnalyst: "Analyste Foncier",
        mapping: "Professionnel de la Cartographie",
        insured: "Pratique Assurée",
      },
      bioParagraphs: [
        "Spécialiste des systèmes d'information géographique (SIG) et de la gestion foncière, doté d'une vaste expérience dans la recherche de titres, les claims miniers, la cartographie technique et l'analyse spatiale en Colombie-Britannique, au Canada et à l'échelle internationale.",
        "Fort d'une solide formation en géographie, cartographie et analyse spatiale, Chris intervient au carrefour de la propriété foncière, de l'évaluation immobilière, de l'exploration minière et des systèmes d'information géographique (SIG). Ses interventions marient cartographie de précision, recherche historique, interprétation d'arpentages et analyse de données pour éclairer la prise de décision stratégique.",
        "Chris a mené à bien de multiples mandats incluant la vérification diligente foncière, les recherches de titres, les contestations d'évaluations fiscales, l'instruction de claims miniers, le ciblage d'exploration géologique, l'analyse des limites et la rectification de parcelles.",
        "Au fil des ans, Chris a collaboré avec des propriétaires terriens, prospecteurs, sociétés minières juniors et majeures, investisseurs et professionnels de l'industrie des ressources naturelles, en concevant des livrables cartographiques et analytiques rigoureusement adaptés.",
      ],
    },
    insurance: {
      sectionTitle: "ASSURANCE_ET_COUVERTURE_DE_RESPONSABILITÉ",
      statusBadge: "ACTIF ET VÉRIFIÉ",
      intro: {
        prefix: "Adamson Geomatics Ltd dispose d'une couverture complète d'assurance responsabilité civile commerciale et professionnelle souscrite à ",
        lloydsText: "100 % par les souscripteurs du Lloyd's de Londres",
        viaText: " par l'entremise de ",
        cfcText: "CFC Underwriting Limited",
        andText: " et ",
        zensuranceText: "Zensurance",
        suffix: ". Toutes les prestations de conseil, d'acquisition foncière, de cartographie SIG et d'opérations sur le terrain bénéficient d'une solide protection mondiale.",
      },
      territorialScope: "Mondial",
      cards: [
        {
          title: "Responsabilité Professionnelle (E&O)",
          limit: "2 000 000 $ CAD",
          subtext: "Par réclamation et au total global",
          desc: "Couverture intégrale en responsabilité civile professionnelle pour erreurs et omissions, rupture contractuelle, responsabilité du fait des sous-traitants et défense juridique mondiale.",
        },
        {
          title: "Responsabilité Civile Générale des Entreprises (RCG)",
          limit: "2 000 000 $ CAD",
          subtext: "Par sinistre et au total global",
          desc: "Protection complète contre les dommages corporels et matériels causés aux tiers, les travaux achevés et la responsabilité préjudice personnel/publicité.",
        },
        {
          title: "Responsabilité Environnementale et Pollution",
          limit: "2 000 000 $ CAD",
          subtext: "Couverture soudaine, accidentelle et graduelle",
          desc: "Couverture des risques de pollution découlant de prestations professionnelles géospatiales, de claims miniers et de conseils fonciers.",
        },
        {
          title: "Véhicules Automobiles non Possédés et Loués (SPF N° 6)",
          limit: "1 000 000 $ CAD",
          subtext: "Responsabilité civile aux tiers + dommages aux véhicules loués",
          desc: "Protection juridique pour les véhicules conduits sous contrat ou loués lors des missions de terrain au Canada et aux États-Unis.",
        },
      ],
      table: {
        headerTitle: "Portée de la Police et Clauses d'Assurance (Réf : #7693234)",
        securityNote: "Sécurité financière : 100 % Lloyd's de Londres",
        items: [
          {
            title: "Erreurs et Omissions (E&O)",
            limit: "2 000 000 $ CAD",
            detail: "Garantie complète en responsabilité civile couvrant les réclamations portées partout dans le monde.",
          },
          {
            title: "Responsabilité Contractuelle",
            limit: "2 000 000 $ CAD",
            detail: "Couverture formelle pour les contrats de prestation et engagements de service volontaires.",
          },
          {
            title: "Responsabilité du fait des Sous-Traitants",
            limit: "2 000 000 $ CAD",
            detail: "La couverture s'étend aux partenaires de terrain et sous-traitants spécialisés mandatés.",
          },
          {
            title: "Atteinte aux Droits de Propriété Intellectuelle",
            limit: "2 000 000 $ CAD",
            detail: "Frais de justice, dédommagements et règlements pour litiges de droit d'auteur ou de marques.",
          },
          {
            title: "Frais Réglementaires et Sanctions Administratives",
            limit: "2 000 000 $ CAD",
            detail: "Prise en charge des enquêtes de conformité statutaire, audiences officielles et frais de défense.",
          },
          {
            title: "Atténuation des Sinistres et Frais de Comparution",
            limit: "2 000 000 $ / 100 k$ CAD",
            detail: "Dépenses directes d'atténuation des préjudices et indemnités pour témoignage d'expert au tribunal.",
          },
        ],
      },
      documents: {
        viewDoc: "Consulter le Document",
        download: "Télécharger",
        items: [
          {
            title: "Devis et Conditions de Police CFC & Lloyd's",
            filename: "20260817 QUOTE 7693234.Pdf",
            url: "/documents/20260817%20QUOTE%207693234.Pdf",
            size: "211 Ko",
            description: "Conditions complètes, déclarations et plafonds de garantie d'Adamson Geomatics Ltd souscrits à 100 % par les souscripteurs du Lloyd's de Londres.",
            type: "Déclarations de Police",
          },
          {
            title: "Confirmation de Couverture Active Zensurance",
            filename: "Zensurance.pdf",
            url: "/documents/Zensurance.pdf",
            size: "88 Ko",
            description: "Certificat de paiement et d'activation de police émis par Zensurance (Réf devis : 25442617).",
            type: "Confirmation du Courtier",
          },
        ],
      },
    },
    certifications: {
      sectionTitle: "CERTIFICATIONS_ET_RECONNAISSANCE_PROFESSIONNELLE",
      intro: "Excellence attestée en systèmes d'information géographique, conception de bases de données spatiales et reconnaissance sur les tribunes géospatiales internationales de référence.",
      zoomHint: "Cliquer pour Agrandir",
      items: [
        {
          title: "Certification Technique Esri",
          issuer: "Esri (Environmental Systems Research Institute)",
          description: "Certification de référence de l'industrie en analyse spatiale avancée, conception cartographique et déploiement SIG d'entreprise.",
        },
        {
          title: "Présentation Plénière à la Conférence des Utilisateurs Esri 2025",
          issuer: "Mis en lumière dans le discours d'ouverture de Jack Dangermond",
          description: "Travaux d'analyse géospatiale et de cartographie sélectionnés et présentés en direct par Jack Dangermond, président d'Esri, devant l'assemblée plénière mondiale.",
        },
        {
          title: "Qualification Professionnelle Esri",
          issuer: "Esri (Environmental Systems Research Institute)",
          description: "Reconnaissance d'expertise de haut niveau en gestion de géodatabases, modélisation de relief et science des données spatiales.",
        },
      ],
    },
    education: {
      sectionTitle: "FORMATION_ET_PARCOURS",
      items: [
        {
          institution: "Université de Colombie-Britannique (UBC)",
          degree: "Diplôme en Géographie (SIG) UBC 2006",
          image: "/images/general/University%20of%20British%20Columbia.jpg",
          url: "https://www.ubc.ca/",
        },
        {
          institution: "Institut Immobilier de Colombie-Britannique (RIBC)",
          degree: "Études Professionnelles",
          image: "/images/general/Real%20Estate%20Institute%20of%20British%20Columbia.png",
          url: "https://www.reibc.org/",
        },
      ],
    },
    expertise: {
      sectionTitle: "DOMAINES_D_EXPERTISE",
      items: [
        "Systèmes d'Information Géographique (SIG)",
        "Évaluation Immobilière et Révision Foncière",
        "Vérification Diligente Foncière et Immobilière",
        "Recherches de Titres et Droits de Propriété",
        "Litiges de Bornage et Rectification de Parcelles",
        "Recherche et Jalonnement de Claims Miniers",
        "Cartographie Géologique et d'Exploration",
        "Analyse de Relief et Levés LiDAR",
        "Interprétation de Plans d'Arpentage et Géoréférencement",
        "Rapports Techniques et Cartographie Spécialisée",
      ],
    },
    approach: {
      sectionTitle: "APPROCHE_PROFESSIONNELLE",
      paragraphs: [
        "Chaque mandat s'articule autour d'un même impératif : fournir des informations fiables et rigoureuses sur lesquelles s'appuyer pour décider en toute confiance. Qu'il s'agisse de résoudre un différend de bornage, de contester une évaluation foncière, d'élucider des titres de propriété ou d'évaluer un actif minier, la priorité reste la précision, la clarté et l'efficacité pratique.",
        "En conjuguant expertise technique SIG et maîtrise approfondie du cadastre, des archives foncières et de la législation des ressources, Chris apporte des solutions concrètes faisant le pont entre données spatiales complexes et décisions opérationnelles réelles.",
      ],
      badges: [
        "Desservant la Colombie-Britannique et le Canada",
        "Plus de 20 Ans d'Expérience",
        "Assuré et Cautionné à 2,0 M$ CAD",
      ],
    },
    engineering: {
      sectionTitle: "ARCHITECTURE_DE_PLATEFORME // GÉNIE_LOGICIEL",
      dossierBadge: "DOSSIER_DÉVELOPPEUR_PRINCIPAL",
      statusBadge: "DISPONIBLE_POUR_MANDATS",
      roleTag: "ARCHITECTE_DE_PLATEFORME",
      title: "Raed Guembri",
      subtitle: "Ingénieur Architecte Logiciel",
      quote: '"Je conçois et déploie des systèmes full-stack où architecture, dynamique d\'interface et rigueur d\'ingénierie opèrent comme un instrument unique."',
      description: "Des plateformes Web GIS et outils RH assistés par IA aux tableaux de bord analytiques, systèmes d'assurance qualité automatisés, serveurs VPS et produits à fort volume de données, je bâtis des logiciels rapides, lisibles, observables et prêts pour la mise à l'échelle.",
      availabilityHeading: "DISPONIBILITÉ",
      availabilityText: "Ouvert aux opportunités en génie logiciel, architecture technique, automatisation QA et conception de produits intégrant l'IA.",
      buttons: {
        portfolio: "Portfolio",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "raed.guembri99@gmail.com",
      },
    },
  },
};
