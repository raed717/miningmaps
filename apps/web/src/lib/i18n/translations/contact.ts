import type { Locale, ContactTranslation } from "../types";

export const contactTranslations: Record<Locale, ContactTranslation> = {
  en: {
    meta: {
      title: "Contact & Service Routing — Adamson Geomatics",
      description:
        "Get in touch with Adamson Geomatics for proposals, GIS mapping, mineral tenure support, and mining property inquiries across British Columbia and Canada.",
    },
    hero: {
      badge: "SECURE_CHANNEL_OPEN",
      title: "Contact",
      titleHighlight: "Routing",
      subtitle:
        "Pick the contact path that matches what you need help with, and route your inquiry directly to the right place.",
    },
    form: {
      cardBadge: "SEND INQUIRY",
      cardDesc: "Use the form below and we'll route your message to the right person.",
      labels: {
        name: "Name *",
        email: "Email *",
        phone: "Phone",
        service: "Service *",
        message: "Message *",
        requiredNote:
          "All fields marked with * are required. Your data is transmitted securely and will only be used to respond to your inquiry.",
      },
      placeholders: {
        name: "Your full name",
        email: "you@example.com",
        phone: "+1 (555) 000-0000",
        serviceSelect: "Select a service...",
        message: "Describe your project or inquiry...",
      },
      buttons: {
        submit: "Send Inquiry",
        sending: "Sending...",
      },
      status: {
        success: "Message sent successfully. We'll be in touch soon.",
        errorDefault: "Something went wrong. Please try again.",
        errorNetwork: "Network error. Please try again.",
      },
      services: [
        { value: "GIS Mapping", label: "GIS Mapping" },
        { value: "Claim Staking", label: "Claim Staking" },
        { value: "LiDAR Surveys", label: "LiDAR Surveys" },
        { value: "Leapfrog 3D Modelling", label: "Leapfrog 3D Modelling" },
        {
          value: "Geological Mapping / Geological Opinions (QP Geo)",
          label: "Geological Mapping / Geological Opinions (QP Geo)",
        },
        { value: "Mining Property Maps", label: "Mining Property Maps" },
        { value: "Property Appraisals", label: "Property Appraisals" },
        { value: "Digital Elevation Models (DEM)", label: "Digital Elevation Models (DEM)" },
        {
          value: "Crown Grant / Land Title Research",
          label: "Crown Grant / Land Title Research",
        },
        { value: "Tax Appeals", label: "Tax Appeals" },
        {
          value: "Property Listing - Commission Basis ($0 Upfront)",
          label: "Property Listing - Commission Basis ($0 Upfront)",
        },
        {
          value: "Property Listing - $100/mo Subscription (1st Month Free)",
          label: "Property Listing - $100/mo Subscription (1st Month Free)",
        },
        {
          value: "Company Membership - $150/mo Subscription (1st Month Free)",
          label: "Company Membership - $150/mo Subscription (1st Month Free)",
        },
        { value: "Other / General", label: "Other / General" },
      ],
    },
    routes: [
      {
        id: "COMM_LINK_01",
        title: "For a quote or proposal",
        bestFor: "Best for",
        description: "Mining property maps, GIS services, data analysis.",
        href: "mailto:chris@miningpropertymaps.com",
        label: "chris@miningpropertymaps.com",
      },
      {
        id: "COMM_LINK_02",
        title: "Land Services",
        bestFor: "Best for",
        description:
          "Claim staking, tenure support, permitting, land management, and field coordination.",
        href: "mailto:chris@adamsonlandservices.com",
        label: "chris@adamsonlandservices.com",
      },
      {
        id: "NETWORK_01",
        title: "LinkedIn",
        bestFor: "Best for",
        description:
          "Best for partnerships, professional introductions, and broader business discussions.",
        href: "https://www.linkedin.com/company/adamson-geomatics/",
        label: "Chris Adamson",
        external: true,
      },
      {
        id: "NETWORK_02",
        title: "Facebook",
        bestFor: "Best for",
        description:
          "Best for general updates, brand presence, and casual outreach to Adamson Geomatics.",
        href: "https://www.facebook.com/profile.php?id=61561908187975",
        label: "Adamson Geomatics",
        external: true,
      },
    ],
    newsletter: {
      badge: "NEWSLETTER_FEED",
      title: "Not ready to reach out yet?",
      description:
        "Get field reports, new mining properties, and project updates delivered to your inbox. Unsubscribe anytime.",
    },
    legal: {
      badge: "RECOMMENDED LEGAL COUNSEL",
      trustedTag: "TRUSTED COLLABORATORS",
      title: "Mining Law & Title Issues",
      description:
        "Adamson Geomatics frequently works alongside and highly recommends these leading Canadian and global law firms for complex mineral title research, Crown Grant conveyancing, tenure disputes, and mining transactions.",
      firms: [
        {
          name: "Bennett Jones",
          focus: "Recommended for Mining Law & Title Issues",
          desc: "Longstanding collaboration on complex mining transactions, resource development, and title diligence.",
          href: "https://www.bennettjones.com/",
          button: "Visit Official Site ›",
        },
        {
          name: "Dentons LLC",
          focus: "Recommended for Mining Law & Title Issues",
          desc: "Trusted counsel on complex Crown Grant transfers, historical parcel research, and boundary mappings.",
          href: "https://www.dentons.com/en/",
          button: "Visit Official Site ›",
        },
        {
          name: "McCarthy Tétrault",
          focus: "Recommended for Mining Law & Title Issues",
          desc: "Top-tier global metals & mining group advising on mineral tenure, acquisitions, and regulatory matters.",
          href: "https://www.mccarthy.ca/",
          button: "Visit Official Site ›",
        },
      ],
    },
    notice: [
      "Response time is typically within 24-48 hours. For urgent field operations or immediate staking requirements, include URGENT in the subject line.",
      "For mining property opportunities use the mining properties route first. For GIS, land management, tenure, or permitting support use the land services route.",
    ],
    checklist: {
      badge: "Please Provide",
      items: [
        "Clear explanation of your project needs / land issue",
        "Property address, tenure ID, or lat/long coordinates",
        "Desired output format (i.e PDF or JPG maps, PowerPoint reports, written documents)",
        "Intended audience",
      ],
    },
  },
  es: {
    meta: {
      title: "Contacto y Canales de Consulta — Adamson Geomatics",
      description:
        "Comuníquese con Adamson Geomatics para cotizaciones, cartografía SIG, gestión de tenencias mineras y consultas sobre proyectos en Columbia Británica y Canadá.",
    },
    hero: {
      badge: "CANAL_SEGURO_ABIERTO",
      title: "Canales de",
      titleHighlight: "Contacto",
      subtitle:
        "Seleccione el canal de comunicación adecuado para su requerimiento y envíe su consulta directamente al especialista indicado.",
    },
    form: {
      cardBadge: "ENVIAR CONSULTA",
      cardDesc: "Complete el siguiente formulario y dirigiremos su mensaje directamente al responsable.",
      labels: {
        name: "Nombre *",
        email: "Correo Electrónico *",
        phone: "Teléfono",
        service: "Tipo de Servicio *",
        message: "Mensaje *",
        requiredNote:
          "Todos los campos marcados con * son obligatorios. Sus datos se transfieren de forma segura y solo se usarán para responder a su solicitud.",
      },
      placeholders: {
        name: "Su nombre completo",
        email: "su-correo@ejemplo.com",
        phone: "+1 (555) 000-0000",
        serviceSelect: "Seleccione un servicio...",
        message: "Describa su proyecto, predio o consulta técnica...",
      },
      buttons: {
        submit: "Enviar Consulta",
        sending: "Enviando...",
      },
      status: {
        success: "Mensaje enviado exitosamente. Nos pondremos en contacto a la brevedad.",
        errorDefault: "Ocurrió un error. Por favor intente nuevamente.",
        errorNetwork: "Error de conexión de red. Intente de nuevo.",
      },
      services: [
        { value: "GIS Mapping", label: "Mapeo y Cartografía SIG" },
        { value: "Claim Staking", label: "Estacado y Registro de Concesiones (Claim Staking)" },
        { value: "LiDAR Surveys", label: "Levantamientos y Análisis LiDAR" },
        { value: "Leapfrog 3D Modelling", label: "Modelado Geológico 3D en Leapfrog" },
        {
          value: "Geological Mapping / Geological Opinions (QP Geo)",
          label: "Cartografía y Opinión Geológica (QP Geo)",
        },
        { value: "Mining Property Maps", label: "Mapas de Propiedades Mineras" },
        { value: "Property Appraisals", label: "Avalúos y Tasaciones Prediales" },
        { value: "Digital Elevation Models (DEM)", label: "Modelos Digitales de Elevación (MDE / MDT)" },
        {
          value: "Crown Grant / Land Title Research",
          label: "Investigación de Títulos Crown Grant y Registros",
        },
        { value: "Tax Appeals", label: "Apelaciones de Impuestos Prediales (Tax Appeals)" },
        {
          value: "Property Listing - Commission Basis ($0 Upfront)",
          label: "Publicación de Propiedad - Comisión (CAD $0 Inicial)",
        },
        {
          value: "Property Listing - $100/mo Subscription (1st Month Free)",
          label: "Publicación de Propiedad - Suscripción $100/mes (1er Mes Gratis)",
        },
        {
          value: "Company Membership - $150/mo Subscription (1st Month Free)",
          label: "Membresía Empresarial - Suscripción $150/mes (1er Mes Gratis)",
        },
        { value: "Other / General", label: "Otro / Consulta General" },
      ],
    },
    routes: [
      {
        id: "COMM_LINK_01",
        title: "Cotizaciones y Propuestas",
        bestFor: "Ideal para",
        description: "Mapas de propiedades mineras, servicios SIG y análisis espacial de datos.",
        href: "mailto:chris@miningpropertymaps.com",
        label: "chris@miningpropertymaps.com",
      },
      {
        id: "COMM_LINK_02",
        title: "Servicios de Tierras y Tenencia",
        bestFor: "Ideal para",
        description:
          "Estacado de claims, mantenimiento de tenencia, permisos, gestión territorial y operaciones de campo.",
        href: "mailto:chris@adamsonlandservices.com",
        label: "chris@adamsonlandservices.com",
      },
      {
        id: "NETWORK_01",
        title: "LinkedIn",
        bestFor: "Ideal para",
        description:
          "Alianzas estratégicas, presentaciones corporativas y oportunidades comerciales de alto nivel.",
        href: "https://www.linkedin.com/company/adamson-geomatics/",
        label: "Chris Adamson",
        external: true,
      },
      {
        id: "NETWORK_02",
        title: "Facebook",
        bestFor: "Ideal para",
        description:
          "Actualizaciones periódicas, presencia institucional y contacto general con Adamson Geomatics.",
        href: "https://www.facebook.com/profile.php?id=61561908187975",
        label: "Adamson Geomatics",
        external: true,
      },
    ],
    newsletter: {
      badge: "BOLETÍN_INFORMATIVO",
      title: "¿Aún evaluando opciones?",
      description:
        "Reciba informes de campo, avisos de nuevas propiedades mineras y actualizaciones técnicas en su correo. Cancele su suscripción en cualquier momento.",
    },
    legal: {
      badge: "ASESORÍA LEGAL RECOMENDADA",
      trustedTag: "COLABORADORES DE CONFIANZA",
      title: "Derecho Minero y Títulos de Propiedad",
      description:
        "Adamson Geomatics colabora estrechamente y recomienda estos destacados bufetes de abogados canadienses e internacionales para transacciones mineras complejas, títulos Crown Grant, litigios de tenencia y adquisiciones.",
      firms: [
        {
          name: "Bennett Jones",
          focus: "Recomendado para Derecho Minero y Títulos",
          desc: "Amplia trayectoria de colaboración en transacciones mineras complejas, desarrollo de recursos y debida diligencia de títulos.",
          href: "https://www.bennettjones.com/",
          button: "Visitar Sitio Oficial ›",
        },
        {
          name: "Dentons LLC",
          focus: "Recomendado para Derecho Minero y Títulos",
          desc: "Asesoría de primer nivel en transferencias Crown Grant, investigación histórica de parcelas y peritaje de linderos.",
          href: "https://www.dentons.com/en/",
          button: "Visitar Sitio Oficial ›",
        },
        {
          name: "McCarthy Tétrault",
          focus: "Recomendado para Derecho Minero y Títulos",
          desc: "Grupo líder global en minería y metales con amplia experiencia en tenencias minerales, fusiones y asuntos regulatorios.",
          href: "https://www.mccarthy.ca/",
          button: "Visitar Sitio Oficial ›",
        },
      ],
    },
    notice: [
      "El tiempo habitual de respuesta es de 24 a 48 horas. Para operaciones de campo de urgencia o requerimientos inmediatos de estacado, incluya URGENTE en el asunto.",
      "Para oportunidades de compra o venta de propiedades mineras, utilice la ruta de proyectos mineros. Para SIG, gestión predial o permisos, diríjase a la ruta de servicios de tierras.",
    ],
    checklist: {
      badge: "Información Útil a Incluir",
      items: [
        "Descripción clara de su requerimiento o desafío territorial",
        "Dirección predial, ID de tenencia o coordenadas geográficas",
        "Formato de entrega deseado (mapas PDF / JPG, informes ejecutivos, documentación legal)",
        "Público objetivo del informe (inversionistas, entidades regulatorias, tribunales)",
      ],
    },
  },
  fr: {
    meta: {
      title: "Contact et Aiguillage — Adamson Geomatics",
      description:
        "Contactez Adamson Geomatics pour soumissions, cartographie SIG, claims miniers et opportunités foncières en Colombie-Britannique et au Canada.",
    },
    hero: {
      badge: "CANAL_SÉCURISÉ_OUVERT",
      title: "Aiguillage",
      titleHighlight: "Contact",
      subtitle:
        "Choisissez la voie de communication correspondant à votre besoin pour transmettre directement votre demande au bon spécialiste.",
    },
    form: {
      cardBadge: "ENVOYER UNE DEMANDE",
      cardDesc: "Utilisez le formulaire ci-dessous pour acheminer votre message au bon interlocuteur.",
      labels: {
        name: "Nom *",
        email: "Courriel *",
        phone: "Téléphone",
        service: "Type de Service *",
        message: "Message *",
        requiredNote:
          "Tous les champs marqués d'un * sont requis. Vos données sont transmises de façon sécurisée et serviront uniquement à traiter votre demande.",
      },
      placeholders: {
        name: "Votre nom complet",
        email: "vous@exemple.com",
        phone: "+1 (555) 000-0000",
        serviceSelect: "Sélectionnez une prestation...",
        message: "Décrivez votre projet, tenure ou demande d'expertise...",
      },
      buttons: {
        submit: "Transmettre la Demande",
        sending: "Transmission en cours...",
      },
      status: {
        success: "Message envoyé avec succès. Nous prendrons contact sous peu.",
        errorDefault: "Un problème est survenu. Veuillez réessayer.",
        errorNetwork: "Erreur de connexion réseau. Merci de réitérer l'envoi.",
      },
      services: [
        { value: "GIS Mapping", label: "Cartographie et SIG" },
        { value: "Claim Staking", label: "Jalonnement et Enregistrement de Claims" },
        { value: "LiDAR Surveys", label: "Levés et Traitements LiDAR" },
        { value: "Leapfrog 3D Modelling", label: "Modélisation Géologique 3D Leapfrog" },
        {
          value: "Geological Mapping / Geological Opinions (QP Geo)",
          label: "Cartographie et Avis Géologique (Personne Qualifiée / QP Geo)",
        },
        { value: "Mining Property Maps", label: "Cartes de Concessions et Titres Miniers" },
        { value: "Property Appraisals", label: "Évaluations et Expertises Immobilières" },
        { value: "Digital Elevation Models (DEM)", label: "Modèles Numériques d'Élévation (MNE / MNT)" },
        {
          value: "Crown Grant / Land Title Research",
          label: "Recherche de Titres Crown Grant et Droits Fonciers",
        },
        { value: "Tax Appeals", label: "Contestations d'Évaluations et Taxes Foncières" },
        {
          value: "Property Listing - Commission Basis ($0 Upfront)",
          label: "Inscription de Propriété - Commission (0 $ au départ)",
        },
        {
          value: "Property Listing - $100/mo Subscription (1st Month Free)",
          label: "Inscription de Propriété - Abonnement 100 $/mois (1er mois offert)",
        },
        {
          value: "Company Membership - $150/mo Subscription (1st Month Free)",
          label: "Adhésion Entreprise - Abonnement 150 $/mois (1er mois offert)",
        },
        { value: "Other / General", label: "Autre / Demande Générale" },
      ],
    },
    routes: [
      {
        id: "COMM_LINK_01",
        title: "Devis et Propositions",
        bestFor: "Idéal pour",
        description: "Cartographie minière, prestations SIG et traitement de données géospatiales.",
        href: "mailto:chris@miningpropertymaps.com",
        label: "chris@miningpropertymaps.com",
      },
      {
        id: "COMM_LINK_02",
        title: "Services Fonciers et Tenures",
        bestFor: "Idéal pour",
        description:
          "Jalonnement de claims, suivi de concessions, permis, gestion de titres et coordination sur le terrain.",
        href: "mailto:chris@adamsonlandservices.com",
        label: "chris@adamsonlandservices.com",
      },
      {
        id: "NETWORK_01",
        title: "LinkedIn",
        bestFor: "Idéal pour",
        description:
          "Partenariats d'affaires, présentations institutionnelles et échanges professionnels élargis.",
        href: "https://www.linkedin.com/company/adamson-geomatics/",
        label: "Chris Adamson",
        external: true,
      },
      {
        id: "NETWORK_02",
        title: "Facebook",
        bestFor: "Idéal pour",
        description:
          "Actualités générales, visibilité de marque et prise de contact informelle.",
        href: "https://www.facebook.com/profile.php?id=61561908187975",
        label: "Adamson Geomatics",
        external: true,
      },
    ],
    newsletter: {
      badge: "FIL_D_ACTUALITÉS",
      title: "Pas encore prêt à nous contacter ?",
      description:
        "Recevez directement nos rapports de terrain, nos nouvelles opportunités de claims et l'évolution des projets dans votre boîte de réception. Désabonnement libre à tout moment.",
    },
    legal: {
      badge: "CONSEILS JURIDIQUES RECOMMANDÉS",
      trustedTag: "PARTENAIRES DE CONFIANCE",
      title: "Droit Minier et Questions de Titres Fonciers",
      description:
        "Adamson Geomatics collabore régulièrement et recommande chaudement ces cabinets juridiques de premier plan pour les transactions minières complexes, les transferts Crown Grant, les contestations de titres et la conformité légale.",
      firms: [
        {
          name: "Bennett Jones",
          focus: "Recommandé pour le Droit Minier et les Titres",
          desc: "Partenariat durable sur les transactions minières d'envergure, le développement des ressources et la vérification de titres.",
          href: "https://www.bennettjones.com/",
          button: "Consulter le Site Officiel ›",
        },
        {
          name: "Dentons LLC",
          focus: "Recommandé pour le Droit Minier et les Titres",
          desc: "Conseil de confiance pour les transferts Crown Grant complexes, l'historique cadastral et la cartographie des limites.",
          href: "https://www.dentons.com/en/",
          button: "Consulter le Site Officiel ›",
        },
        {
          name: "McCarthy Tétrault",
          focus: "Recommandé pour le Droit Minier et les Titres",
          desc: "Groupe mondial d'excellence en mines et métaux intervenant sur les tenures minérales, fusions et questions de régulation.",
          href: "https://www.mccarthy.ca/",
          button: "Consulter le Site Officiel ›",
        },
      ],
    },
    notice: [
      "Le délai de réponse est généralement de 24 à 48 heures. Pour les missions urgentes sur le terrain ou les jalonnements immédiats, mentionnez URGENT en objet.",
      "Pour les opportunités de vente ou d'acquisition de claims, privilégiez le canal des propriétés minières. Pour le SIG, la gestion foncière ou les permis, utilisez le canal des services fonciers.",
    ],
    checklist: {
      badge: "Éléments Utiles à Fournir",
      items: [
        "Exposé clair des besoins du mandat ou du litige foncier",
        "Adresse du bien, identifiant de tenure (claim ID) ou coordonnées géographiques",
        "Format de livrable requis (cartes PDF / JPG, rapports de synthèse, documents légaux)",
        "Destinataire ou public cible de l'analyse",
      ],
    },
  },
};
