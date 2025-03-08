import { ProjectDetailsProps } from "@/types";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Work Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#stack" },
  { name: "Education", href: "#education" },
  { name: "Blogs", href: "blogs" },
  { name: "Contact", href: "#contact" },
];

export const myRoles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Front-End Developer",
  "Mobile Application Developer",
];

export const projects = [
  {
    id: 1,
    title: "Shiny UI",
    des: "A modern UI library for React developers, designed to simplify the development process and enhance the user experience.",
    img: "/shinyui.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    github: "https://github.com/TharushaRehan/shinyui",
    link: "https://shinyui.vercel.app",
  },
  {
    id: 2,
    title: "Notion Clone",
    des: "Inspired by Notion, designed to enhance productivity and streamline note-taking and organization.",
    img: "/notion-clone.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Convex",
      "Edgestore",
    ],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    github: "https://github.com/TharushaRehan/notion-clone",
    link: "https://tharusha-perera-notion-clone.vercel.app/",
  },
  {
    id: 3,
    title: "AI Image SaaS Platform",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/ai-image-saas.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "MongoDB",
      "Stripe",
    ],
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/clerk.webp",
      "/stripe.svg",
    ],
    link: "https://image-platform-one.vercel.app/",
    github: "https://github.com/TharushaRehan/image-platform",
  },
];

export const webApps: ProjectDetailsProps[] = [
  {
    id: 1,
    title: "Notion Clone",
    description:
      "I have developed a robust and versatile web application inspired by Notion, designed to enhance productivity and streamline note-taking and organization. This application incorporates several key features to provide a seamless user experience:",
    features: [
      {
        title: "User Authentication (Clerk)",
        des: "Secure user registration and login functionality to protect user data and personalize the experience.",
      },
      {
        title: "Database (Convex)",
        des: "Manage users' documents seamlessly, providing robust and scalable database solutions for efficient data handling.",
      },
      {
        title: "Image Uploads (Edge Store)",
        des: "Enhance your documents by uploading cover images and icons, providing a visually appealing and customized touch to your notes.",
      },
      {
        title: "Dynamic Content Creation (BlockNote)",
        des: "Utilize a block-based note editor to format text, insert images, embed links, and organize information in a flexible and interactive manner.",
      },
      {
        title: "File Management",
        des: "Create, edit, and manage documents efficiently, with the ability to structure content using an intuitive block-based editor.",
      },
    ],
    images: ["/notion-clone.png", "/notion-clone.png"],
    iconList: [
      {
        label: "Next.js",
        img: "/next.svg",
      },
      {
        label: "TypeScript",
        img: "/ts.svg",
      },
      {
        label: "Tailwind CSS",
        img: "/tail.svg",
      },
      {
        label: "Clerk",
        img: "/clerk.webp",
      },
      {
        label: "Convex",
        img: "/convex.svg",
      },
      {
        label: "Edgestore",
        img: "/edgestore.png",
      },
    ],
    github: "https://github.com/TharushaRehan/notion-clone",
    liveLink: "https://tharusha-perera-notion-clone.vercel.app/",
    //tag: "Full-Stack",
  },
  {
    id: 2,
    title: "AI Image SaaS Platform",
    description:
      "This is a cloud-based image editing SaaS application that empowers you to bring your creative vision to life with a powerful and user-friendly suite of tools. This app also includes payments and credits system",
    features: [
      {
        title: "Generative Fill",
        des: "Unleash your creativity with generative fill. Replace unwanted backgrounds with unique, AI-generated content that seamlessly blends with your image.",
      },
      {
        title: "Background Removal",
        des: "Isolate your subject from its background with a single click. This feature is perfect for creating stunning product images, removing unwanted elements from photos, and creating clean compositions.",
      },
      {
        title: "Image Recolor",
        des: "Transform the color of your images with ease. Enter the object you want to recolor with a new color to achieve the perfect aesthetic.",
      },
      {
        title: "Image Restoration",
        des: "Breathe new life into old or damaged photos. This feature will remove scratches, noise, and imperfections, restoring your cherished memories to their former glory.",
      },
    ],
    images: ["/ai-image-saas.png", "/ai-image-saas.png"],
    iconList: [
      {
        label: "Next.js",
        img: "/next.svg",
      },
      {
        label: "TypeScript",
        img: "/ts.svg",
      },
      {
        label: "Tailwind CSS",
        img: "/tail.svg",
      },
      {
        label: "Clerk",
        img: "/clerk.webp",
      },
      {
        label: "MongoDB",
        img: "/mongodb.svg",
      },
      {
        label: "Stripe",
        img: "/stripe.svg",
      },
    ],
    github: "https://github.com/TharushaRehan/image-platform",
    liveLink: "https://image-platform-one.vercel.app/",
    //tag: "Full-Stack",
  },
  {
    id: 3,
    title: "Blog Application",
    description:
      "Get ready to share your voice and captivate your audience with a beautifully crafted blog built using cutting-edge web technologies. This blog app leverages the power of Next.js, Tailwind CSS, and Framer Motion, used a Figma design, to provide a seamless and visually stunning user experience.",
    features: [],
    images: ["/blog-app-frontend.png"],
    iconList: [
      {
        label: "Next.js",
        img: "/next.svg",
      },
      {
        label: "TypeScript",
        img: "/ts.svg",
      },
      {
        label: "Tailwind CSS",
        img: "/tail.svg",
      },
      { label: "Framer Motion", img: "/framer.svg" },
    ],
    github: "",
    liveLink: "",
    //tag: "Front-End",
  },
];

export const mobileApps: ProjectDetailsProps[] = [
  {
    id: 1,
    title: "Video Sharing App",
    description: "dsdsds",
    images: ["/p1.svg"],
    features: [],
    iconList: [
      {
        label: "React.js",
        img: "/re.svg",
      },
      {
        label: "TypeScript",
        img: "/ts.svg",
      },
    ],
    github: "https://github.com/TharushaRehan/notion-clone",
    //tag: "Full-Stack",
  },
  {
    id: 2,
    title: "Meal Preparation App",
    description: "",
    images: [""],
    features: [],
    iconList: [
      { label: "Kotlin", img: "/kotlin.svg" },
      { label: "SQLite", img: "/sqlite.png" },
    ],
    github: "",
    //tag: "Full-Stack",
  },
  {
    id: 3,
    title: "Dice Game",
    description: "",
    images: [""],
    features: [],
    iconList: [],
    github: "",
    //tag: "Full-Stack",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Associate Software Engineer - Full-Stack",
    company: "Upview Technologies",
    desc: "",
    year: "March 2025 - Present",
    skills: [
      {
        label: "React Native",
        img: "/re.svg",
      },
      {
        label: "TypeScript",
        img: "/ts.svg",
      },
      {
        label: "Supabase",
        img: "/supabase.svg",
      },
    ],
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Software Engineer - Intern",
    company: "Cloud99X",
    desc: "As an Intern, I played a key role in developing mobile and web applications featuring advanced functionalities. My responsibilities spanned both frontend and backend development using on-demand technologies. As the lead developer in the team, I focused on delivering intuitive user interfaces, robust backend services, and seamless integrations, ensuring the delivery of a high-quality product that met user requirements and business objectives.",
    year: "July 2023 - July 2024",
    skills: [
      {
        label: "React Native",
        img: "/re.svg",
      },
      {
        label: "React.js",
        img: "/re.svg",
      },
      {
        label: "TypeScript",
        img: "/ts.svg",
      },
      {
        label: "HTML",
        img: "/html.svg",
      },
      {
        label: "CSS",
        img: "/css.svg",
      },
      {
        label: "Tailwind CSS",
        img: "/tail.svg",
      },
      {
        label: "Firebase",
        img: "/firebase.svg",
      },
      {
        label: "Nest.js",
        img: "/nestjs.svg",
      },
      {
        label: "GCP",
        img: "/gcp.svg",
      },
    ],
    className: "md:col-span-2",
  },
];

export const education = [
  {
    id: 1,
    title: "BEng (Hons) Software Engineering",
    campus: "University of Westminster, UK",
    year: "2021 - 2025",
  },
  {
    id: 2,
    title: "Diploma in English",
    campus: "ICBT Campus - Sri Lanka",
    year: "2021 April",
  },
  // {
  //   id: 3,
  //   title: "GCE Advanced Level - Commerce Stream (with ICT)",
  //   campus: "Holy Cross College, Kalutara",
  //   results: "A1, B1, C1",
  //   year: "2018 - 2020",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: FaGithub,
    link: "https://github.com/TharushaRehan",
  },
  {
    id: 3,
    img: FaLinkedin,
    link: "https://www.linkedin.com/in/tharusha-perera/",
  },
];

export const techStack = [
  {
    id: 1,
    label: "Programming Languages",
    icons: [
      {
        label: "Java",
        img: "/java.svg",
      },
      {
        label: "Python",
        img: "/python.svg",
      },
      {
        label: "Kotlin",
        img: "/kotlin.svg",
      },
      {
        label: "Swift",
        img: "/swift.svg",
      },
    ],
  },
  {
    id: 2,
    label: "Web Development",
    description:
      "Frontend and Backend technologies used to build web applications.",
    icons: [
      {
        label: "HTML",
        img: "/html.svg",
      },
      {
        label: "CSS",
        img: "/css.svg",
      },
      {
        label: "JavaScript",
        img: "/js.svg",
      },
      {
        label: "TypeScript",
        img: "/ts.svg",
      },
      {
        label: "React.js",
        img: "/re.svg",
      },
      {
        label: "Next.js",
        img: "/next.svg",
      },
      {
        label: "Tailwind CSS",
        img: "/tail.svg",
      },
      {
        label: "Framer Motion",
        img: "/framer.svg",
      },
      {
        label: "NestJS",
        img: "/nestjs.svg",
      },
      // {
      //   label: "Express.js",
      //   img: "/expressjs.png",
      // },
    ],
  },
  {
    id: 3,
    label: "Mobile Development",
    description:
      "Technologies used to build native and cross-platform mobile applications. ",
    icons: [
      {
        label: "React Native",
        img: "/re.svg",
      },
      {
        label: "Expo",
        img: "/expo.svg",
      },
      {
        label: "Swift",
        img: "/swift.svg",
      },
      {
        label: "Kotlin",
        img: "/kotlin.svg",
      },
    ],
  },
  {
    id: 4,
    label: "Backend Services",
    description:
      "Tools which provides authentication, database, storage and payment services.",
    icons: [
      {
        label: "Supabase",
        img: "/supabase.svg",
      },
      {
        label: "Firebase",
        img: "/firebase.svg",
      },
      {
        label: "MongoDB",
        img: "/mongodb.svg",
      },
      {
        label: "GCP",
        img: "/gcp.svg",
      },
      {
        label: "Clerk",
        img: "/clerk.webp",
      },
      {
        label: "Stripe",
        img: "/stripe.svg",
      },
      {
        label: "SQLite",
        img: "/sqlite.png",
      },
    ],
  },
  {
    id: 5,
    label: "Other Tools",
    description: "Tools used to enhance the development process.",
    icons: [
      {
        label: "Android Studio",
        img: "/as.svg",
      },
      {
        label: "VS Code",
        img: "/vs.svg",
      },
      {
        label: "Xcode",
        img: "/tech/xcode.png",
      },
      {
        label: "Vercel",
        img: "/vercel-icon.svg",
      },

      {
        label: "GitHub",
        img: "/git.svg",
      },
      {
        label: "Postman",
        img: "/postman.svg",
      },
    ],
  },
];
