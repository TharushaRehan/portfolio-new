export type ProjectCategory = "Full-Stack" | "Front-End" | "Mobile";

export type Project = {
  slug: string;
  title: string;
  /** Short label shown in braces, e.g. `{ AI SaaS platform }` */
  tag: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  /** Path under /public. Omit to render the styled fallback card. */
  image?: string;
  sourceUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Full-Stack",
  "Front-End",
  "Mobile",
];

export const PROJECTS: Project[] = [
  {
    slug: "ai-image-saas",
    title: "AI Image SaaS Platform",
    tag: "AI SaaS platform",
    category: "Full-Stack",
    summary:
      "A real Software-as-a-Service app with AI image features and a payments and credits system.",
    description:
      "A cloud-based image editing SaaS that gives users a powerful, user-friendly suite of AI tools, backed by authentication, a credits system and Stripe payments.",
    features: [
      "Generative Fill",
      "Background Removal",
      "Image Recolor",
      "Image Restoration",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "MongoDB", "Stripe"],
    image: "/projects/ai-image-saas.png",
    sourceUrl: "https://github.com/TharushaRehan/image-platform",
    liveUrl: "https://image-platform-one.vercel.app/",
    featured: true,
  },
  {
    slug: "notion-clone",
    title: "Notion Clone",
    tag: "Productivity app",
    category: "Full-Stack",
    summary:
      "Inspired by Notion, designed to enhance productivity and streamline note-taking and organization.",
    description:
      "A robust, versatile web app inspired by Notion for note-taking and organization, with real-time data, rich block-based editing and file uploads.",
    features: [
      "User Authentication (Clerk)",
      "Database (Convex)",
      "Image Uploads (Edge Store)",
      "Dynamic Content Creation (BlockNote)",
      "File Management",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Convex", "Edgestore"],
    image: "/projects/notion-clone.png",
    sourceUrl: "https://github.com/TharushaRehan/notion-clone",
    liveUrl: "https://tharusha-perera-notion-clone.vercel.app/",
    featured: true,
  },
  {
    slug: "shiny-ui",
    title: "Shiny UI",
    tag: "UI component library",
    category: "Front-End",
    summary:
      "A modern UI library for React developers, designed to simplify development and enhance the user experience.",
    description:
      "A modern UI library for React developers with responsive, customizable and interactive components, plus dark mode and MDX docs.",
    features: [
      "Responsive Design",
      "Dark Mode",
      "Customizable Components",
      "Interactive Elements",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"],
    image: "/projects/shinyui.png",
    sourceUrl: "https://github.com/TharushaRehan/shinyui",
    liveUrl: "https://shinyui.vercel.app",
    featured: true,
  },
  {
    slug: "saas-landing-page-dark",
    title: "SaaS Landing Page – Dark Theme",
    tag: "Landing page",
    category: "Front-End",
    summary: "A sleek, modern landing page for a SaaS product, built from a Framer UI design.",
    description:
      "A sleek and modern landing page for a SaaS application, recreated from a Framer UI design with smooth Framer Motion animations.",
    features: [],
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    sourceUrl: "https://github.com/TharushaRehan/saas-website-dark",
    liveUrl: "https://saas-website-dark-tp.vercel.app/",
  },
  {
    slug: "blog-app",
    title: "Blog Application",
    tag: "Blog",
    category: "Front-End",
    summary: "A beautifully crafted blog built from a Figma design.",
    description:
      "A blog app built from a Figma design with Next.js, Tailwind CSS and Framer Motion for a seamless, visually polished reading experience.",
    features: [],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/blog-app-frontend.png",
    sourceUrl: "https://github.com/TharushaRehan/blog-app-frontend",
    liveUrl: "https://blog-app-frontend-tp.vercel.app/",
  },
  {
    slug: "apple-weather-app",
    title: "Apple's Weather App",
    tag: "iOS app",
    category: "Mobile",
    summary:
      "A SwiftUI app inspired by Apple's Weather, with real-time updates and forecasts.",
    description:
      "A mobile app inspired by Apple's Weather app that provides real-time weather updates and forecasts for the user's location.",
    features: [
      "Real-Time Weather Updates",
      "Location-Based Weather Data",
      "Weather Forecast",
      "Customizable Settings (Change Units)",
    ],
    stack: ["Swift", "SwiftUI", "OpenWeatherMap API"],
    sourceUrl: "https://github.com/TharushaRehan/ios-weather-app",
    featured: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
