// Shared by the three root layouts: (en)/layout.tsx, es/layout.tsx and fr/layout.tsx.
// Each language has its own root layout so <html lang> is right in the server HTML
// (one root layout can't see the URL of a prerendered page). Global styles live here so
// every page and not-found view gets them.
import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "../globals.css";
import "leaflet/dist/leaflet.css";
import "react-medium-image-zoom/dist/styles.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Locale } from "@/lib/i18n/types";

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://www.miningpropertymaps.com"),
  verification: {
    google: "Rwujs0TvL9GqRD9XrnDvEr31T7jxfUltW3nWQkJ6XzE",
  },
  title:
    "Adamson Geomatics | Mining Claims For Sale, GIS, Prospecting, Staking, Land Management",
  description:
    "Mining claims and properties for sale, GIS mapping, prospecting, claim staking, land management and title searches in British Columbia. LiDAR, elevation models, geological modelling and land valuations.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Adamson Geomatics | Mining Claims For Sale, GIS, Prospecting, Staking, Land Management",
    description:
      "Mining claims for sale, GIS mapping, prospecting, claim staking, land management and title searches in BC.",
    url: "https://www.miningpropertymaps.com",
    siteName: "Adamson Geomatics",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adamson Geomatics | Mining Claims For Sale, GIS, Prospecting, Staking, Land Management",
    description:
      "Mining claims for sale, GIS mapping, prospecting, claim staking, land management and title searches in BC.",
    images: ["/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.miningpropertymaps.com/#organization",
      name: "Adamson Geomatics",
      alternateName: "Mining Property Maps",
      url: "https://www.miningpropertymaps.com",
      image: "https://www.miningpropertymaps.com/opengraph-image.png",
      logo: "https://www.miningpropertymaps.com/images/general/logo.png",
      description:
        "Professional land and geospatial services in British Columbia. GIS mapping, mineral claim staking, LiDAR, digital elevation models, geological modelling, land valuations, and legal dispute support.",
      email: "chris@miningpropertymaps.com",
      areaServed: [
        {
          "@type": "State",
          name: "British Columbia",
        },
        {
          "@type": "Country",
          name: "Canada",
        },
      ],
      founder: {
        "@id": "https://www.miningpropertymaps.com/#chris-adamson",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Geomatics & Mineral Exploration Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Mineral Claim Staking & Boundary Surveys",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Mineral Claim Staking",
                  description:
                    "Acquisition, physical boundary blazing, and MTO registration of mineral tenures in British Columbia.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Tenure Maintenance & Assessment Work",
                  description:
                    "Preparation and submission of technical exploration statements and assessment reports.",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "GIS Mapping & Remote Sensing",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "LiDAR & Bare-Earth DEM Processing",
                  description:
                    "Airborne and drone LiDAR canopy penetration, high-resolution contour generation, and lineament mapping.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "3D Geological Modelling (Leapfrog)",
                  description:
                    "Subsurface lithology, alteration, and structural modeling for mineral exploration and drill targeting.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "NI 43-101 Technical Cartography",
                  description:
                    "Publication-ready compliant exploration, geophysical, and geological maps for technical reports.",
                },
              },
            ],
          },
        ],
      },
      sameAs: [
        "https://www.linkedin.com/company/adamson-geomatics/",
        "https://www.facebook.com/profile.php?id=61561908187975",
        "https://x.com/Christalball93",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.miningpropertymaps.com/#chris-adamson",
      name: "Chris Adamson",
      jobTitle: "Registered Inspector (R.I.) & Geospatial Consultant",
      worksFor: {
        "@id": "https://www.miningpropertymaps.com/#organization",
      },
      url: "https://www.miningpropertymaps.com/about",
      sameAs: [
        "https://www.linkedin.com/in/chris-adamson-ri/",
        "https://x.com/Christalball93",
      ],
      knowsAbout: [
        "Mineral Claim Staking",
        "GIS Cartography",
        "LiDAR Point Cloud Processing",
        "Leapfrog 3D Geological Modelling",
        "Digital Elevation Models (DEM)",
        "Mineral Titles Online (MTO)",
        "Cadastral Surveys",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.miningpropertymaps.com/#website",
      name: "Adamson Geomatics",
      alternateName: "Mining Property Maps",
      url: "https://www.miningpropertymaps.com",
      publisher: {
        "@id": "https://www.miningpropertymaps.com/#organization",
      },
    },
  ],
};

export function RootShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          storageKey="miningmaps-theme"
        >
          <div id="root">{children}</div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
