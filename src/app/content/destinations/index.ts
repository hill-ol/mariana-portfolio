export type Destination = {
  slug: string;
  /** Sequence shown on the card — "Destination No. 01". */
  order: number;
  city: string;
  /** Country, state, or region shown under the city. */
  region: string;
  /** ISO 3166-1 alpha-2, for the small country chip. */
  countryCode: string;
  /** Marks the "Home Base" card so it can be labelled differently. */
  isHomeBase?: boolean;
  /** Card heading, e.g. "Plaza de España & Orange Blossoms". */
  headline: string;
  /** Italic pull-quote. */
  quote: string;
  /** Supporting detail paragraph. */
  blurb: string;
  /** Overlay label sitting on the photo. */
  photoLabel: string;
  /** Decorative, rendered as low-contrast texture rather than content. */
  coordinates: string;
  /** Pill in the bottom-right of the card. */
  tag: string;
  /**
   * Omitted until real photography exists — the card renders a tinted
   * placeholder in its place, which avoids broken-image icons.
   */
  image?: { src: string; alt: string };
};

export const destinations: Destination[] = [
  {
    slug: "seville",
    order: 1,
    city: "Seville",
    region: "Spain",
    countryCode: "ES",
    headline: "Plaza de España & Orange Blossoms",
    quote:
      "Immersing in international marketing, Spanish fluency, and vibrant Andalusian brand aesthetics.",
    blurb:
      "Focusing on cross-border communications, EU brand strategies, and cultural nuances in consumer storytelling.",
    photoLabel: "Currently Enrolled",
    coordinates: "37.3891° N, 5.9845° W",
    tag: "Fall 2026",
  },
  {
    slug: "london",
    order: 2,
    city: "London",
    region: "United Kingdom",
    countryCode: "GB",
    headline: "Global Media & Brand Culture",
    quote:
      "Exploring Mayfair editorial trends, West End PR, and British retail storytelling.",
    blurb:
      "Investigating premium luxury positioning, traditional heritage brand campaigns, and European press office dynamics.",
    photoLabel: "Global Study Tour",
    coordinates: "51.5074° N, 0.1278° W",
    tag: "Academic Residency",
  },
  {
    slug: "oakland",
    order: 3,
    city: "Oakland & SF Bay",
    region: "California",
    countryCode: "US",
    headline: "West Coast Innovation",
    quote:
      "Creative tech intersections, boutique social media strategy, and dynamic startup ecosystems.",
    blurb:
      "Engaging with rapid digital-first content creation, growth experiments, and modern UI/UX design sprints.",
    photoLabel: "N.U. Mills College",
    coordinates: "37.8044° N, 122.2712° W",
    tag: "Semester Immersions",
  },
  {
    slug: "boston",
    order: 4,
    city: "Boston",
    region: "Massachusetts",
    countryCode: "US",
    isHomeBase: true,
    headline: "Academic Headquarters",
    quote:
      "Combined Business & Communications honors, co-op culture, and academic foundations.",
    blurb:
      "Rigorous analytical coursework, agency client pitches, leadership in collegiate marketing societies, and mentor initiatives.",
    photoLabel: "Northeastern Base",
    coordinates: "42.3398° N, 71.0892° W",
    tag: "Expected Grad: May 2028",
  },
];

export const destinationSlugs = destinations.map(({ slug }) => slug);

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}
