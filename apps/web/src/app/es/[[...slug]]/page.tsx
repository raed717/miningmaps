import { forLocale } from "../../_catchAll/page-impl";

// Spanish pages; the shared implementation is in _catchAll/page-impl.tsx.
// Must stay a literal here: Next reads segment config statically.
export const revalidate = 300;

const route = forLocale("es");
export const generateMetadata = route.generateMetadata;
export const generateStaticParams = route.generateStaticParams;
export default route.Page;
