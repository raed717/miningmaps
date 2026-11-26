import { RootShell, rootMetadata } from "../_catchAll/root-shell";

// Root layout for the Spanish pages, so the server HTML says <html lang="es">.
// Switching language crosses root layouts, which Next does with a full page load.
export const metadata = rootMetadata;

export default function SpanishRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
