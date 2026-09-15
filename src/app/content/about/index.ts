/**
 * Copy for the About Me page. Kept here rather than in the component so the
 * wording can be edited without touching JSX, matching the pattern in
 * content/projects and content/destinations.
 */

/** Pill in the intro — what she's currently looking for. */
export const status = "Looking for a Spring 2027 Co-op";

/* The philosophy quote now lives in content/process — it reads as the thesis
   for that page, and having it here too would be duplicated copy. */

/** DRAFT copy. Deliberately does not repeat the home page hero. */
export const intro = [
  "I'm a junior at Northeastern University, studying Business Administration & Communication with a concentration in Marketing. Most of my work sits where audience research meets content production: figuring out who I'm actually talking to, then building the thing that reaches them.",
  "That's meant growing social accounts from scratch for small businesses, taking over a dormant university account with a team, and running a full UX research cycle before designing an app. Different surfaces, same habit — understand the person on the other side first.",
];

export const credentials = {
  school: "Northeastern University",
  degree: "BS, Business Administration & Communication",
  concentration: "Concentration in Marketing",
  graduation: "Expected May 2028",
};

export const travelNote =
  "I love to travel and experience new cultures — and I'm currently studying abroad in Seville, Spain.";

/**
 * Left undefined until a real file exists. The page renders a non-interactive
 * placeholder in its place rather than a dead link.
 */
export const resumeHref: string | undefined = undefined;

/**
 * Left undefined until a real image exists at, say,
 * `public/mariana-headshot.jpg`. The page renders a monogram card instead.
 */
export const headshot: { src: string; alt: string } | undefined = undefined;

export type ToolkitGroup = {
  label: string;
  items: string[];
};

/**
 * Consolidated from the per-project `skills` arrays in content/projects, plus
 * languages, which were not surfaced anywhere before.
 */
export const toolkit: ToolkitGroup[] = [
  {
    label: "Tools",
    items: ["CapCut", "Canva", "Figma", "Miro", "Flourish"],
  },
  {
    label: "Craft",
    items: [
      "Content strategy",
      "Audience research",
      "Competitive analysis",
      "Trend analysis",
      "Brand development",
      "Wireframing",
      "Usability testing",
      "Data storytelling",
    ],
  },
  {
    label: "Ways of working",
    items: [
      "Consumer behavior analysis",
      "Client communication",
      "Team collaboration",
      "Design thinking",
    ],
  },
  {
    label: "Languages",
    items: ["English — native", "Spanish — fluent"],
  },
];
