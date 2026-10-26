// Lightweight bot filtering for public forms (contact, newsletter).
// Flagged submissions should get a fake success response so bots don't adapt.

/** Default: humans can't fill a multi-field form faster than this. */
const MIN_FILL_MS = 3000;

/** A single run of letters with no spaces, e.g. "xFvRYobfGQjEUXKqZLEoxOa". */
const RANDOM_TOKEN = /^[A-Za-z]{12,}$/;

export type SpamSignals = {
  /** Value of the hidden honeypot field; real users leave it empty. */
  honeypot?: string;
  /** Milliseconds between the form rendering and submission, measured in the browser. */
  elapsedMs?: number;
  /** Free-text fields to check for random-string gibberish. */
  text?: (string | undefined)[];
  /** Fastest plausible human submission for this form. */
  minFillMs?: number;
};

/** Returns the reason a submission looks automated, or null if it looks human. */
export function detectSpam({
  honeypot,
  elapsedMs,
  text = [],
  minFillMs = MIN_FILL_MS,
}: SpamSignals): string | null {
  if (honeypot) return "honeypot filled";
  // Missing timing means the request didn't come from our form (direct API post).
  if (elapsedMs === undefined) return "missing timing";
  if (elapsedMs < minFillMs) return `submitted in ${elapsedMs}ms`;
  if (text.some((t) => t && RANDOM_TOKEN.test(t.trim()))) return "random-string text";
  return null;
}
