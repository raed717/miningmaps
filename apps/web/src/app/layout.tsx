import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Mining Maps",
  description: "Mining Maps Application",
  icons: {
    icon: "/images/general/miniLogo.ico",
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
