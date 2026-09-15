/**
 * The Creative Process page. Every stage below was derived from the five
 * write-ups in content/projects — this page states the method, and each
 * receipt points at the project that evidences it.
 *
 * `receipts[].slug` must match a slug in content/projects.
 */

/**
 * Thesis for the page. Moved here from content/about: it reads as the
 * statement this whole page expands on, and keeping it in both places would
 * just be duplicated copy.
 */
export const philosophy =
  "Rather than jumping to solutions, I treat the work like a consumer behavior study — trying to understand not just what people need, but why they make the choices they do.";

export const intro =
  "Five projects, five very different briefs — but the same sequence every time. This is the method, and the work that evidences it.";

export type ProcessStage = {
  /** Frame number on the filmstrip. */
  order: number;
  title: string;
  /** Short line under the title. */
  summary: string;
  body: string;
  /** Evidence from real projects. */
  receipts: { slug: string; note: string }[];
};

export const stages: ProcessStage[] = [
  {
    order: 1,
    title: "Understand before making anything",
    summary: "Research first, always.",
    body: "The temptation is to start producing, because producing feels like progress. I've found the opposite: the time spent understanding the situation before I make anything is what makes everything after it worth watching. Four of the five projects here began with research rather than a camera.",
    receipts: [
      {
        slug: "regal-princess-parties",
        note: "Analyzed the account's past posts for pacing, timing, and the moments that made people stop scrolling — before filming anything new.",
      },
      {
        slug: "northeastern-london-app",
        note: "Ran interviews and surveys to learn how students actually navigated the city, and where they got confused.",
      },
      {
        slug: "pawsitive-paws",
        note: "Met the owner first, to understand what they wanted customers to feel.",
      },
    ],
  },
  {
    order: 2,
    title: "Find who actually decides",
    summary: "Not the viewer — the person who chooses.",
    body: "An audience isn't the people who watch, it's the people who act. Naming the decision-maker changes what's worth filming, because you stop making things that look good and start making things that answer a question someone is quietly asking before they commit.",
    receipts: [
      {
        slug: "regal-princess-parties",
        note: "Identified parents of young children — the people actually deciding whether to trust and book the company.",
      },
      {
        slug: "pawsitive-paws",
        note: "Dog owners weighing a brand-new facility against an established one.",
      },
    ],
  },
  {
    order: 3,
    title: "Ask why, not just what",
    summary: "Behaviour over preference.",
    body: "Knowing what someone wants tells you what to build. Knowing why they want it tells you how to talk about it. I try to get to the reasoning and the friction underneath a preference, because that's where the useful insight usually is.",
    receipts: [
      {
        slug: "northeastern-london-app",
        note: "Treated it as a consumer behavior study: not just what students needed, but why they made the choices they did.",
      },
      {
        slug: "nu-journalism-takeover",
        note: "Researched what was performing on similar student-run accounts, instead of posting what we personally thought was fun.",
      },
    ],
  },
  {
    order: 4,
    title: "Let the insight pick the craft",
    summary: "Every production choice should trace back to a reason.",
    body: "This is the part I care most about. Tone, format, pacing, colour — none of it is a taste decision if you've done the first three steps properly. Each of these choices is an argument, and the research is the reason it holds.",
    receipts: [
      {
        slug: "pawsitive-paws",
        note: "Kept the tone warm and deliberately unpolished, because trust was the thing being built.",
      },
      {
        slug: "data-visualization",
        note: "Chose a bubble format over a bar chart so size and position carried the scale before anyone read a label.",
      },
      {
        slug: "nu-journalism-takeover",
        note: "Paired an aesthetic edit with trending audio to earn a student's attention in the first second.",
      },
    ],
  },
  {
    order: 5,
    title: "Measure, then adjust",
    summary: "Publishing is the midpoint, not the end.",
    body: "The first version is a hypothesis. Watching how people actually respond — in analytics, or over someone's shoulder during a usability test — is what turns one project into something I can repeat deliberately next time.",
    receipts: [
      {
        slug: "nu-journalism-takeover",
        note: "Tracked engagement in real time and fed it into the team's later posts.",
      },
      {
        slug: "northeastern-london-app",
        note: "Revised wireframes after watching where test participants hesitated.",
      },
    ],
  },
];
