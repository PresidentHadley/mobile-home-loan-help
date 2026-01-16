export type StateLanding = {
  slug: string;
  code: string; // 2-letter
  name: string;
};

export const PRIORITY_STATES: StateLanding[] = [
  { slug: "california", code: "CA", name: "California" },
  { slug: "florida", code: "FL", name: "Florida" },
  { slug: "georgia", code: "GA", name: "Georgia" },
  { slug: "louisiana", code: "LA", name: "Louisiana" },
  { slug: "michigan", code: "MI", name: "Michigan" },
  { slug: "mississippi", code: "MS", name: "Mississippi" },
  { slug: "missouri", code: "MO", name: "Missouri" },
  { slug: "new-york", code: "NY", name: "New York" },
  { slug: "ohio", code: "OH", name: "Ohio" },
  { slug: "oklahoma", code: "OK", name: "Oklahoma" },
  { slug: "oregon", code: "OR", name: "Oregon" },
  { slug: "pennsylvania", code: "PA", name: "Pennsylvania" },
  { slug: "south-carolina", code: "SC", name: "South Carolina" },
  { slug: "texas", code: "TX", name: "Texas" },
  { slug: "virginia", code: "VA", name: "Virginia" }
];

export function getStateLandingBySlug(slug: string): StateLanding | undefined {
  return PRIORITY_STATES.find((s) => s.slug === slug);
}

