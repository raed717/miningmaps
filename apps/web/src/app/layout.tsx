// @ts-ignore
import "./globals.css";
// @ts-ignore
import "leaflet/dist/leaflet.css";
// @ts-ignore
import "react-medium-image-zoom/dist/styles.css";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Mining Maps",
  description: "Mining Maps Application",
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
          storageKey="vite-ui-theme"
        >
          <div className="grid h-svh grid-rows-[auto_1fr]">
            <Header />
            {children}
          </div>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
