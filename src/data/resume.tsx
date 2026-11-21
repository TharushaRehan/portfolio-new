import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Tharusha Perera",
  initials: "TP",
  url: "https://tharusha-perera-portfolio.vercel.app",
  description:
    "Software Engineer building web and mobile apps people love. Full-stack with Next.js, React Native and TypeScript.",
  summary:
    "I'm a dedicated, detail-oriented Software Engineer with experience in [mobile and web application development](/#projects). I specialize in building user-friendly interfaces, scalable backend services and seamless integrations. I'm currently a full-stack engineer at Upview Technologies, after leading development as an intern at Cloud99X, and I hold a [BEng (Hons) in Software Engineering](/#education) from the University of Westminster. With strong problem-solving skills and leadership experience, I focus on shipping high-quality products that meet user needs and business goals.",
  avatarUrl: "/avatars/profile-pic-4.jpg",
  skills: [
    { name: "React Native", icon: ReactLight },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Framer Motion", icon: Icons.framermotion },
    { name: "NestJS", logo: "/skills/nestjs.svg" },
    { name: "Expo", logo: "/skills/expo.svg", invertInDark: true },
    { name: "Supabase", logo: "/skills/supabase.svg" },
    { name: "Firebase", logo: "/skills/firebase.svg" },
    { name: "MongoDB", logo: "/skills/mongodb.svg" },
    { name: "Stripe", logo: "/skills/stripe.svg" },
    { name: "GCP", logo: "/skills/google-cloud.svg" },
    { name: "Swift", logo: "/skills/swift.svg" },
    { name: "Kotlin", logo: "/skills/kotlin.svg" },
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "tharushaperera088@gmail.com",
    calUrl: "https://cal.com/tharusha-perera/30min",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TharushaRehan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tharusha-perera/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tharushaperera088@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Upview Technologies",
      logoUrl: "/companies/upview.png",
      positions: [
        {
          title: "Software Engineer - Full Stack",
          start: "September 2025",
          end: "Present",
          description:
            "Full-stack mobile and web development across frontend, backend and API integration with React Native, Next.js, TypeScript, Supabase, Razorpay, Stripe and GCP. Collaborate with cross-functional teams to deliver high-quality features and seamless integrations, taking ownership of projects end to end.",
        },
        {
          title: "Associate Software Engineer - Full Stack",
          start: "March 2025",
          end: "August 2025",
          description:
            "Built features across mobile and web apps with React Native, Next.js and TypeScript, working on frontend, backend and API integrations alongside cross-functional teams.",
        },
      ],
    },
    {
      company: "Cloud99X",
      logoUrl: "/companies/cloud99x.png",
      positions: [
        {
          title: "Software Engineer - Intern",
          start: "July 2023",
          end: "July 2024",
          description:
            "Lead developer on the team, building mobile and web applications with advanced functionality using React Native, React.js, TypeScript, Firebase, NestJS and GCP. Delivered intuitive user interfaces, robust backend services and seamless integrations that met user requirements and business objectives.",
        },
      ],
    },
  ],
  education: [
    {
      school: "University of Westminster",
      href: "https://www.westminster.ac.uk",
      degree: "BEng (Hons) Software Engineering",
      logoUrl: "/education/westminster.png",
      invertInDark: true,
      start: "2021",
      end: "2025",
    },
    {
      school: "ICBT Campus",
      href: "https://icbt.lk",
      degree: "Diploma in English",
      logoUrl: "/education/icbt.png",
      start: "2021",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "AI Image SaaS Platform",
      href: "https://image-platform-one.vercel.app/",
      dates: "",
      active: true,
      description:
        "A cloud-based image editing SaaS with AI generative fill, background removal, recolor and restoration, plus a payments and credits system.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Clerk",
        "MongoDB",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://image-platform-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TharushaRehan/image-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ai-image-saas.png",
      video: "",
    },
    {
      title: "Notion Clone",
      href: "https://tharusha-perera-notion-clone.vercel.app/",
      dates: "",
      active: true,
      description:
        "A Notion-inspired workspace for note-taking and organization with auth, a realtime database, image uploads and block-based editing.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Clerk",
        "Convex",
        "Edgestore",
      ],
      links: [
        {
          type: "Website",
          href: "https://tharusha-perera-notion-clone.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TharushaRehan/notion-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/notion-clone.png",
      video: "",
    },
    {
      title: "Shiny UI",
      href: "https://shinyui.vercel.app",
      dates: "",
      active: true,
      description:
        "A modern UI library for React developers with responsive, customizable, interactive components and dark mode.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "MDX",
      ],
      links: [
        {
          type: "Website",
          href: "https://shinyui.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TharushaRehan/shinyui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/shinyui.png",
      video: "",
    },
    {
      title: "SaaS Landing Page - Dark Theme",
      href: "https://saas-website-dark-tp.vercel.app/",
      dates: "",
      active: true,
      description:
        "A sleek, modern landing page for a SaaS product, built from a Framer UI design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://saas-website-dark-tp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TharushaRehan/saas-website-dark",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Blog Application",
      href: "https://blog-app-frontend-tp.vercel.app/",
      dates: "",
      active: true,
      description:
        "A polished blog built from a Figma design with Next.js, Tailwind CSS and Framer Motion.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://blog-app-frontend-tp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TharushaRehan/blog-app-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/blog-app-frontend.png",
      video: "",
    },
    {
      title: "Apple's Weather App",
      href: "https://github.com/TharushaRehan/ios-weather-app",
      dates: "",
      active: true,
      description:
        "A SwiftUI app inspired by Apple's Weather with real-time, location-based updates, forecasts and unit settings.",
      technologies: ["Swift", "SwiftUI", "OpenWeatherMap API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/TharushaRehan/ios-weather-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
