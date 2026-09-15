export type Project = {
  /** URL segment, e.g. /work/regal-princess-parties */
  slug: string;
  title: string;
  /** Client, employer, or course this work was done for. */
  context: string;
  /** Omitted where the source outline does not specify one. */
  timeframe?: string;
  /** Small pill label on the folder card, e.g. "Product Design". */
  category: string;
  /** Second line on the folder card, e.g. "Paper Wireframes & Research". */
  subtitle: string;
  /** One-line framing used on cards and previews. */
  summary: string;
  /** Long-form write-up, one string per paragraph. */
  body: string[];
  /** The "What I did" bullets. */
  contributions: string[];
  skills: string[];
};

export const projects: Project[] = [
  {
    slug: "regal-princess-parties",
    title: "Regal Princess Takeover",
    context: "Regal Princess Parties — Franklin, MA",
    timeframe: "Summer 2025",
    category: "Summer '25",
    subtitle: "Social Media & Viral Video",
    summary:
      "Grew a children's party company's social presence from scratch, using engagement analysis to build a content strategy aimed at the parents who actually book.",
    body: [
      "Throughout my time with Regal Princess Parties in Franklin, MA, I have had the opportunity to plan and work events, but also to grow and develop the company's social media pages.",
      "I was tasked with strategizing and developing content for the company's Instagram and Facebook pages, as the owner wanted to develop an official online presence.",
      "Before I filmed anything new, I went back and analyzed the account's past posts to identify what was actually driving engagement and what wasn't, looking at things like pacing, timing, and the kinds of moments that made people stop scrolling. I also looked at similar posts on other companies' social media pages to gather inspiration and to put myself in the perspective of a consumer.",
      "From there, I identified my target audience as parents of young children, the ones actually deciding whether to trust and book the company for their own events. Once I understood that, I approached every video with intention, thinking through what would resonate with a parent evaluating the brand rather than just what looked good on camera.",
      "I then regularly attended parties and events and filmed content, which I then edited using CapCut, keeping in mind my target audience, suggestions from the owner of the company, and my overall vision for the social media pages.",
    ],
    contributions: [
      "Analyzed existing content performance and competitor social media pages to inform strategy",
      "Identified the target audience as parents of young children, and developed content accordingly",
      "Applied audience insights to shape filming and editing decisions across every project",
      "Filmed and edited short-form video content for Instagram and TikTok using CapCut",
    ],
    skills: [
      "CapCut",
      "Content strategy",
      "Audience research",
      "Target audience identification",
      "Competitive analysis",
      "Digital marketing",
    ],
  },
  {
    slug: "nu-journalism-takeover",
    title: "NU Journalism Instagram Takeover",
    context: "Digital Storytelling and Social Media — Northeastern University",
    timeframe: "Spring 2026",
    category: "Social Takeover",
    subtitle: "Instagram Strategy & Reels",
    summary:
      "Revived a dormant student journalism account with a team of classmates, researching platform trends to earn attention from a student audience.",
    body: [
      "For my Digital Storytelling and Social Media course during Spring 2026, a team of classmates and I performed a full takeover of the NU_journalism Instagram account, tasked with revamping the page after it had been inactive for some time.",
      "We were given complete creative freedom, so one of the biggest challenges wasn't a lack of direction, it was too much of it. Before creating any content, we had to think critically about who we were actually trying to reach and what would realistically get a Northeastern student to stop scrolling and engage with a journalism account specifically.",
      "We looked at current trends on Instagram and TikTok, studied what content was performing well on similar student-run or university accounts, and used that research to shape a content strategy rather than just posting things we personally thought were fun.",
      "From there, we brainstormed as a team and landed on content that felt authentic to student life at Northeastern and its surrounding areas.",
      "I created a reel featuring the Museum of Fine Arts, a spot many Northeastern students don't realize is free to visit with their Husky ID. My goal was to capture students' attention through an aesthetic edit paired with trending audio, and to make students believe they could actually attend the museum easily, given its free cost and close proximity to campus.",
      "Throughout the takeover, my team and I also tracked engagement and analytics in real time, using that data to understand what was resonating and adjusting our approach for future posts.",
    ],
    contributions: [
      "Collaborated with my team to align our ideas and strategies for the takeover",
      "Strategically planned the edit, including trending audio selection and an aesthetic style aimed at student viewers",
      "Filmed and edited the final reel in CapCut",
      "Tracked engagement on the post to help inform our team's content decisions going forward",
    ],
    skills: [
      "CapCut",
      "Content strategy",
      "Video editing",
      "Trend analysis",
      "Team collaboration",
    ],
  },
  {
    slug: "pawsitive-paws",
    title: "Pawsitive Paws Resort Launch",
    context: "Pawsitive Paws Resort",
    timeframe: "Summer 2026",
    category: "Brand Launch",
    subtitle: "Social Strategy & Canva Visuals",
    summary:
      "Built a brand-new dog boarding company's social presence from the ground up, working directly with the owner to make trust the center of the strategy.",
    body: [
      "This past summer, I helped a new dog boarding company, Pawsitive Paws Resort, establish a presence on social media. Their social media presence started out very minimal, so I was tasked with creating a plan and building it from the ground up.",
      "Before filming anything, I met with the owner to understand their vision for the business and what they wanted potential customers to feel when visiting their page. Using their input, I then put together a marketing plan to guide what I captured. I thought through who the target audience actually was, dog owners looking for a boarding facility they could trust, and what would make them feel confident choosing a brand-new company over an established one. Throughout the process, I checked in with the owner to make sure the content aligned with how they wanted their brand represented, and adjusted along the way. That collaboration shaped which moments I prioritized capturing, dogs playing, comfortable boarding spaces, and everyday interactions that would help potential customers picture their own dog being safe and happy there.",
      "I used CapCut to edit short-form reels for Instagram and Facebook, keeping the tone warm and authentic rather than overly polished, since trust was the main thing I was trying to build.",
      "I also utilized Canva to create visuals for the company to use, either as pinned posts or highlights on the social media pages. These served to communicate what the business offered, based directly on the priorities the owner shared with me.",
    ],
    contributions: [
      "Communicated directly with the company owner to understand their brand vision",
      "Developed a marketing plan to guide content for a brand-new business",
      "Identified dog owners as the target audience and focused content on building trust and brand credibility",
      "Filmed and edited short-form video content for Instagram and Facebook using CapCut, incorporating client feedback",
      "Created visuals using Canva to inform potential customers about the business's offerings",
    ],
    skills: [
      "Canva",
      "CapCut",
      "Client communication",
      "Marketing strategy",
      "Brand development",
      "Content creation",
      "Target audience identification",
      "Social media management",
    ],
  },
  {
    slug: "northeastern-london-app",
    title: "UX/UI App Design with Figma",
    context: "Experience and Interaction — Northeastern University",
    timeframe: "Fall 2024",
    category: "Product Design",
    subtitle: "Paper Wireframes & Research",
    summary:
      "Took an app for Northeastern University London students through the full UX/UI process, spending most of the project defining the problem before designing a solution.",
    body: [
      "Throughout my Experience and Interaction course in Fall 2024, I had the opportunity to learn the full UX/UI design process from start to finish, and to apply it by designing a functioning app for Northeastern University London students.",
      "Before designing anything, I spent the majority of my time focused on identifying and truly understanding the problem, which ended up being the most valuable part of the whole project. I conducted preliminary research through interviews and surveys to understand how Northeastern London students actually navigate the city: where they got confused, what information they wished they had, and what their emotional experience was like in an unfamiliar place.",
      "Rather than jumping to solutions, I treated this like a consumer behavior study, trying to understand not just what students needed, but why they made the choices they did and what was driving their frustration.",
      "I took that data and translated it into a journey map and an ecosystem map using Figma and Miro, which let me visualize the full experience a student was having, from their mindset before even opening an app to the moments that stood out along the way. That process shaped every decision I made afterward, because I wasn't designing for a generic user, I was designing around real patterns and pain points I had identified.",
      "From there, I moved into design, starting with low-fidelity wireframes to map out the basic structure, then developing high-fidelity wireframes as the concept became clearer. I tested these wireframes with real participants, watching how they naturally tried to interact with the interface and listening to where they got confused or hesitated, which told me a lot about actual user behavior. I used that feedback to make changes before building anything final.",
      "Once I had a clear direction, I built the final product in Figma, thinking through both the UI, how each page looked, and the UX, how users would move through the app and what would naturally draw their attention based on the behavior patterns I'd already observed.",
    ],
    contributions: [
      "Conducted user research through interviews and surveys to understand student behavior, motivations, and pain points",
      "Analyzed research data to identify patterns in how users made decisions",
      "Utilized Figma and Miro to create journey maps and ecosystem maps to visualize the user experience holistically",
      "Designed and usability-tested low-fidelity and high-fidelity wireframes, using observed user behavior to guide revisions",
      "Built a final interactive product in Figma, balancing UI design with UX flow based on insights",
    ],
    skills: [
      "Figma",
      "Miro",
      "User research",
      "Consumer behavior analysis",
      "Data collection",
      "UX/UI design process",
      "Wireframing",
      "Usability testing",
    ],
  },
  {
    slug: "data-visualization",
    title: "Market Cap Data Visualization",
    context: "Communications coursework — Northeastern University",
    timeframe: "Spring 2026",
    category: "Data Storytelling",
    subtitle: "Flourish & Design Thinking",
    summary:
      "Turned a ranking of the world's 100 largest companies into a bubble visualization in Flourish, using size and color to convey a scale that a bar chart would flatten.",
    body: [
      "For an assignment in one of my Communications classes during Spring 2026, I was tasked with pulling information from a dataset and creating a data visualization to capture it in a creative way using Flourish.",
      "Before building anything, I had to think about what story the data was actually telling, not just what the numbers were. The dataset ranked the 100 largest companies in the world by market capitalization in 2025, but a table or bar chart wouldn't have captured how dramatic the gap is between a company like Apple and a company ranked 90th.",
      "I decided a bubble/circle format would communicate that scale visually in a way numbers alone couldn't, since size and position do a lot of the storytelling before someone even reads a label. I placed the largest companies in the center using the biggest bubbles and darkest colors, and let the smaller companies fade outward in both size and shade.",
      "This project reinforced how much design thinking goes into data visualization beyond just plotting numbers. Developing a spreadsheet into something visually intuitive meant constantly asking how a viewer would interpret size, color, and placement. It's an intersection I'm interested in: using creative design choices to make data more digestible and more persuasive, which feels directly relevant to how brands communicate insights in marketing and consumer research.",
    ],
    contributions: [
      "Sourced and interpreted a real-world dataset",
      "Selected a visualization format to represent scale visually",
      "Made deliberate design choices around size, color gradient, and placement to guide viewer interpretation",
      "Built the final interactive visualization using Flourish",
    ],
    skills: [
      "Flourish",
      "Data visualization",
      "Data analytics",
      "Design thinking",
      "Data storytelling",
    ],
  },
];

export const projectSlugs = projects.map(({ slug }) => slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
