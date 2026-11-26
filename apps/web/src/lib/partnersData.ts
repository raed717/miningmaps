/** Partners listed on the Services page ("Partners" tab), in display order. */
export type Partner = {
  /** Also the key of the translated description (services translations, partnersSection.descriptions). */
  id: string;
  name: string;
  /** Shown under the name (translated in partnersSection.kinds). */
  kind: "business" | "group";
  url: string;
  /** Square image in public/, shown as a circle. Without one, the card shows an icon for the kind. */
  logo?: string;
  /**
   * Offer for visitors who mention our code to this partner, in dollars.
   * Grants Land Services: they pay us a $500 bonus per client we send, and we pass $250 to the client.
   */
  discount?: { code: string; amount: number };
};

export const partners: Partner[] = [
  {
    id: "grants-land-services",
    name: "Grants Land Services",
    kind: "business",
    url: "https://www.facebook.com/share/14zveTJpKfL/",
    logo: "/images/partners/grants-land-services-logo.png",
    discount: { code: "AdamsonGeomatics", amount: 250 },
  },
  {
    id: "mining-claims-for-sale",
    name: "Mining Claims for Sale",
    kind: "group",
    url: "https://www.facebook.com/groups/276728690489308/",
  },
];
