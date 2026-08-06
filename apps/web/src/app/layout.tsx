import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://miningpropertymaps.com"),
  title: "Adamson Geomatics | GIS & Mineral Claim Services in BC | Chris Adamson, R.I.",
  description:
    "Professional land and geospatial services in British Columbia. GIS mapping, mineral claim staking, LiDAR, digital elevation models, geological modelling, land valuations, and legal dispute support.",
  icons: {
    icon: [
      { url: "/images/general/minLogo.ico", sizes: "any", type: "image/x-icon" },
      { url: "/images/general/minLogo.png", type: "image/png" },
    ],
    shortcut: "/images/general/minLogo.ico",
    apple: "/images/general/minLogo.png",
  },
  openGraph: {
    title: "Adamson Geomatics | GIS & Mineral Claim Services in BC | Chris Adamson, R.I.",
    description:
      "Professional land and geospatial services in BC — claim staking, GIS mapping, LiDAR, 3D geological modelling, and more.",
    url: "https://miningpropertymaps.com",
    siteName: "Adamson Geomatics",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adamson Geomatics | GIS & Mineral Claim Services in BC",
    description:
      "Professional land and geospatial services in BC — claim staking, GIS mapping, LiDAR, 3D geological modelling, and more.",
    images: ["/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adamson Geomatics",
  url: "https://miningpropertymaps.com",
  image: "https://miningpropertymaps.com/opengraph-image.png",
  logo: "https://miningpropertymaps.com/images/general/logo.png",
  description:
    "Professional land and geospatial services in British Columbia. GIS mapping, mineral claim staking, LiDAR, digital elevation models, geological modelling, land valuations, and legal dispute support.",
  email: "chris@miningpropertymaps.com",
  areaServed: {
    "@type": "State",
    name: "British Columbia",
  },
  founder: {
    "@type": "Person",
    name: "Chris Adamson",
    jobTitle: "Registered Inspector (R.I.)",
  },
  sameAs: [
    "https://www.linkedin.com/company/adamson-geomatics/",
    "https://www.facebook.com/profile.php?id=61561908187975",
    "https://x.com/Christalball93",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
