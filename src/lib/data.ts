export const personal = {
  name: "Kushank Garg",
  handle: "kushank-garg",
  role: "Software Engineer",
  tagline: "Open to SWE / Full-Stack roles — 2027 grad",
  location: "Jaipur, Rajasthan · India",
  email: "kgarg1925@gmail.com",
  phone: "+91 89304 00000",
  github: "https://github.com/kushank55",
  githubUsername: "kushank55",
  linkedin: "https://www.linkedin.com/in/kushank123/",
  leetcode: "https://leetcode.com/u/kushank55/",
  leetcodeUsername: "kushank55",
  codeforces: "https://codeforces.com/profile/kushank55",
  codeforcesUsername: "kushank55",
  resumeUrl: "/resume.pdf",
};

export const heroFacts = [
  { label: "name", value: "Kushank Garg" },
  { label: "role", value: "Software Engineer" },
  { label: "education", value: "B.Tech CSE · LNMIIT '27" },
  { label: "focus", value: "Full-Stack · AI Systems" },
  { label: "stack", value: "React · Next.js · Node.js · AWS" },
  { label: "status", value: "open to opportunities" },
];

export const aboutBlurb =
  "I'm a Computer Science undergraduate at LNMIIT Jaipur, graduating in 2027. Two software engineering internships in, I spend most of my time shipping production web apps and AI-driven features with React, Next.js, TypeScript, and cloud infrastructure — and staying sharp on the data structures and algorithms that make the rest of it hold up.";

export const aboutCards = [
  {
    title: "Full-stack, end to end",
    body: "React and Next.js on the front, Node.js and Express behind it, PostgreSQL and MongoDB underneath. I own features from the UI down to the schema rather than handing them across a wall.",
  },
  {
    title: "AI features, shipped",
    body: "OCR pipelines, document intelligence, and AI-assisted workflows wired into real product surfaces — built to be reviewed and trusted by humans, not just demoed.",
  },
  {
    title: "Shipped, not sandboxed",
    body: "Two internships spent on systems already carrying real users — a multi-region audit platform across three jurisdictions, and production web apps built for real client workflows.",
  },
  {
    title: "Cloud-native by default",
    body: "AWS (EC2, S3, RDS, Route53, Cognito, IAM, CI/CD) and Docker underneath everything I deploy — infrastructure as a first-class part of the build, not an afterthought.",
  },
];

export const stats = [
  { label: "DSA problems solved", value: "500+" },
  { label: "SWE internships", value: "2" },
  { label: "Public repos", value: "5" },
  { label: "API endpoints shipped", value: "30+" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  meta?: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Kritu Capitals",
    role: "AI and Full Stack Intern",
    period: "June 2026 – Present",
    location: "Remote",
    bullets: [
      "Built and shipped 4+ full-stack features (company workspace, compliance views, review/adjustments flow, document OCR path) for a multi-region audit platform covering 3 jurisdictions (USA, Canada, India) using React, TypeScript, Node.js/Express, and PostgreSQL.",
      "Designed and implemented a REST adjustments API (4 endpoints: create, list, status update, delete) and migrated manual review entries from browser-only storage to server-side persistence, improving cross-session reliability for auditors.",
      "Integrated a third-party OCR pipeline for document text extraction with clear error handling and env-based configuration, supporting image + multi-page PDF uploads and human-reviewable structured outputs.",
      "Improved product reliability by fixing empty-state/listing bugs and wiring end-to-end UI → API → DB flows, contributing to a 50+ screen auditor/client workspace with role-based navigation and faster, more consistent dashboard behavior.",
    ],
    tech: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "AWS"],
  },
  {
    company: "Aikav Technologies",
    role: "Full Stack Intern",
    period: "May 2025 – July 2025",
    location: "Remote",
    meta: "Completion Certificate",
    bullets: [
      "Developed responsive, high-performance web interfaces using Next.js, TypeScript, and Tailwind CSS.",
      "Architected dynamic frontend components and managed state transitions using React.js and modern hooks.",
      "Implemented robust backend logic, focusing on RESTful API integration and PostgreSQL database connectivity.",
      "Streamlined collaborative workflows and version control using Git/GitHub within an Agile-based SDLC.",
      "Optimized cross-device compatibility and user experience through mobile-first, responsive UI design principles.",
    ],
    tech: ["TypeScript", "React.js", "Next.js", "Node.js", "PostgreSQL", "Jira", "Agile"],
  },
];

export type Project = {
  name: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "MockView AI",
    category: "AI · Full-Stack",
    year: "2026",
    tagline: "AI-powered mock interview & resume analysis platform",
    description:
      "A full-stack AI mock interview platform with real-time voice sessions, streamed AI responses, and an ATS resume analyzer — built to give candidates the kind of structured feedback a human coach would, on demand.",
    bullets: [
      "Engineered and deployed MockView AI, a full-stack AI mock interview platform on Vercel using Next.js 16, React 19, TypeScript, Prisma, and Supabase PostgreSQL, with NextAuth authentication and 14+ REST API routes powering interview, resume, and dashboard workflows.",
      "Built real-time voice interview sessions with the Web Speech API (speech-to-text/text-to-speech) and streaming responses from Google Gemini 2.5 Flash via the Vercel AI SDK, supporting 3 interview types (behavioral, technical, system design) and 3 difficulty levels, plus optional resume-personalized questioning.",
      "Implemented AI-driven performance evaluation scoring candidates 0–100 across 4 weighted dimensions — Communication (25%), Technical (30%), Problem Solving (25%), and Confidence (20%) — with actionable coach tips, transcript review, and STAR-method answer rewriting.",
      "Developed an ATS resume analyzer that parses PDFs, returns a 0–100 ATS score, evaluates 6 resume sections, flags 10–15 role-critical keywords, and surfaces 4–8 prioritized improvements, integrated with a progress dashboard tracking streaks, goals, and historical interview metrics.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Gemini 2.5 Flash",
      "Vercel AI SDK",
      "Web Speech API",
    ],
    github: "https://github.com/kushank55/MockView",
    live: "https://mock-view-six.vercel.app/",
  },
  {
    name: "RoadGuard",
    category: "Full-Stack",
    year: "2025",
    tagline: "Real-time workshop management & roadside service platform",
    description:
      "A full-stack workshop management system connecting managers, mechanics, and customers around live service requests — with role-based access, geolocation, and multilingual support baked in from the start.",
    bullets: [
      "Engineered a full-stack web app for real-time workshop management and service requests, supporting 3 user roles (manager, mechanic, customer) with 15+ API endpoints. Added a robust authentication system using JWT, role-based access control, and OTP verification via email.",
      "Integrated Cloudinary for image management and Leaflet for interactive maps with geolocation services, while implementing i18n for multilingual support, enhancing accessibility across 25+ React components.",
      "Built a modular, maintainable codebase with Zustand, 10+ custom React hooks, and scalable REST APIs across 8 database models, while enforcing code quality via ESLint and TypeScript strictness to enable rapid development.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Leaflet",
      "Zustand",
      "JWT",
      "Cloudinary",
      "i18n",
    ],
    github: "https://github.com/kushank55/Road-Gaurd",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Node.js", "Express.js", "Next.js"],
  },
  {
    title: "Libraries & Tools",
    items: [
      "C++ STL",
      "Zustand",
      "Redux",
      "Zod",
      "Docker",
      "NextAuth",
      "Nuqs",
      "Leaflet",
      "ShadCN",
      "Framer Motion",
    ],
  },
  {
    title: "Developer Tools",
    items: ["GitHub", "Bitbucket", "Postman", "MongoDB Compass", "Netlify", "Jira", "Figma", "APIs"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "Route53", "Cognito", "IAM", "CI/CD", "Docker"],
  },
  {
    title: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "OOPs",
      "DBMS",
      "Operating Systems",
      "Low-Level Design",
    ],
  },
];

export const dsaTopics = [
  "Arrays & Two Pointers",
  "Binary Search",
  "Linked Lists",
  "Stacks & Queues",
  "Trees & BST",
  "Graphs (BFS/DFS)",
  "Dynamic Programming",
  "Greedy",
  "Heaps & Priority Queues",
  "Bit Manipulation",
  "Sliding Window",
  "Recursion & Backtracking",
];

export const education = [
  {
    school: "The LNM Institute of Information Technology (LNMIIT)",
    period: "Aug 2023 – May 2027",
    degree: "B.Tech, Computer Science & Engineering",
    location: "Jaipur, Rajasthan",
  },
];

export const achievements = [
  {
    title: "500+ DSA problems solved",
    body: "Solved more than 500 problems across different platforms in Data Structures and Algorithms.",
  },
];
