// Cloudinary delivery helpers: add on-the-fly transformations to an uploaded asset's URL.
// https://res.cloudinary.com/<cloud>/image/upload/v123/name.jpg
//   -> https://res.cloudinary.com/<cloud>/image/upload/c_limit,w_900,q_auto,f_auto/v123/name.jpg

const UPLOAD_SEGMENT = "/image/upload/";

export function isCloudinaryImageUrl(url: string): boolean {
  return url.includes("res.cloudinary.com") && url.includes(UPLOAD_SEGMENT);
}

/** Lowercase file extension without the query string, e.g. "pdf", "jpg"; "" when there is none. */
export function fileExtension(url: string): string {
  const path = url.split(/[?#]/)[0];
  const match = /\.([a-z0-9]{2,5})$/i.exec(path);
  return match ? match[1].toLowerCase() : "";
}

export function isPdfUrl(url: string): boolean {
  return fileExtension(url) === "pdf";
}

/**
 * The URL as an image of at most `width` px wide (never upscaled).
 * PDFs uploaded to Cloudinary are rendered as a JPG of `pdfPage` (1-based, default the first page).
 * Non-Cloudinary URLs are returned unchanged (PDFs from elsewhere can't be rendered: returns undefined).
 */
export function cloudinaryImage(url: string, width: number, pdfPage = 1): string | undefined {
  if (!isCloudinaryImageUrl(url)) return isPdfUrl(url) ? undefined : url;
  const pdf = isPdfUrl(url);
  const page = Number.isInteger(pdfPage) && pdfPage >= 1 ? pdfPage : 1;
  const transform = pdf ? `pg_${page},c_limit,w_${width},q_auto` : `c_limit,w_${width},q_auto,f_auto`;
  let out = url.replace(UPLOAD_SEGMENT, `${UPLOAD_SEGMENT}${transform}/`);
  if (pdf) out = out.replace(/\.pdf(?=($|[?#]))/i, ".jpg");
  return out;
}
