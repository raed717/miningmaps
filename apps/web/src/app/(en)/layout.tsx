import { RootShell, rootMetadata } from "../_catchAll/root-shell";

// Root layout for the English pages, so the server HTML says <html lang="en">.
// Switching language crosses root layouts, which Next does with a full page load.
export const metadata = rootMetadata;

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
