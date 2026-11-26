import { RootShell, rootMetadata } from "../_catchAll/root-shell";

// Root layout for the French pages, so the server HTML says <html lang="fr">.
// Switching language crosses root layouts, which Next does with a full page load.
export const metadata = rootMetadata;

export default function FrenchRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
