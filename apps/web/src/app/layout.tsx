import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adamson Geomatics | Chris Adamson, R.I.",
  description:
    "Professional land and geospatial services in British Columbia. GIS mapping, mineral claim staking, LiDAR, digital elevation models, geological modelling, land valuations, and legal dispute support.",
  icons: {
    icon: [
      { url: "/images/general/miniLogo.ico", sizes: "any" },
      { url: "/images/general/miniLogo.ico", type: "image/x-icon" },
    ],
    shortcut: "/images/general/miniLogo.ico",
    apple: "/images/general/miniLogo.ico",
  },
  openGraph: {
    title: "Adamson Geomatics | Chris Adamson, R.I.",
    description:
      "Professional land and geospatial services in BC — claim staking, GIS mapping, LiDAR, 3D geological modelling, and more.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
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
