import { ProjectDetailsProps } from "@/types";

export const fullStackProjects: ProjectDetailsProps[] = [
  {
    id: 1,
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
    images: ["/ai-image-saas.png"],
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
  },
  {
    id: 2,
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
  },
];

export const frontEndProjects: ProjectDetailsProps[] = [
  {
    id: 1,
    title: "Shiny UI",
    description:
      "I have developed a modern UI library for React developers, designed to simplify the development process and enhance the user experience.",
    features: [
      {
        title: "Responsive Design",
        des: "Create seamless and visually appealing web experiences across all devices with a fully responsive design.",
      },
      {
        title: "Dark Mode",
        des: "Enhance user experience and reduce eye strain with a sleek and stylish dark mode option.",
      },
      {
        title: "Customizable Components",
        des: "Easily customize and integrate components into your projects to create unique and engaging user interfaces.",
      },
      {
        title: "Interactive Elements",
        des: "Engage users with interactive elements, animations, and transitions that bring your web projects to life.",
      },
    ],
    images: ["/shinyui.png"],
    iconList: [
      {
        label: "React",
        img: "/react.svg",
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
        label: "Framer Motion",
        img: "/framer.svg",
      },
      {
        label: "MDX",
        img: "/mdx.svg",
      },
    ],
    github: "",
    liveLink: "",
  },
  {
    id: 2,
    title: "SaaS Landing Page - Dark Theme",
    description:
      "I have developed a sleek and modern landing page for a SaaS application based on a UI design by Framer.",
    features: [],
    images: ["/saas-landing-page-dark.png"],
    iconList: [
      {
        label: "React",
        img: "/react.svg",
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
        label: "Framer Motion",
        img: "/framer.svg",
      },
    ],
    github: "https://github.com/TharushaRehan/saas-website-dark",
    liveLink: "https://saas-website-dark-tp.vercel.app/",
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
    github: "https://github.com/TharushaRehan/blog-app-frontend",
    liveLink: "https://blog-app-frontend-tp.vercel.app/",
  },
];

export const mobileProjects: ProjectDetailsProps[] = [
  {
    id: 1,
    title: "Apple's Weather App",
    description:
      "I have developed a mobile application inspired by Apple's Weather app, designed to provide users with real-time weather updates and forecasts. This application incorporates several key features to enhance the user experience:",
    features: [
      {
        title: "Real-Time Weather Updates",
        des: "Access real-time weather updates and forecasts to stay informed about the weather conditions in your area.",
      },
      {
        title: "Location-Based Weather Data",
        des: "Retrieve weather data based on your current location, providing personalized and accurate weather information.",
      },
      {
        title: "Weather Forecast",
        des: "View detailed weather forecasts for the upcoming days, including temperature, humidity, and precipitation levels.",
      },
      {
        title: "Customizable Settings (Change Units)",
        des: "Customize the app settings to suit your preferences, including temperature units, location services, and weather notifications.",
      },
    ],
    images: ["/apple-weather-app.png", "/apple-weather-app.png"],
    iconList: [
      {
        label: "Swift",
        img: "/swift.svg",
      },
      {
        label: "SwiftUI",
        img: "/swiftui.svg",
      },
      {
        label: "OpenWeatherMap API",
        img: "/expo.svg",
      },
    ],
    github: "https://github.com/TharushaRehan/ios-weather-app",
  },
  // {
  //   id: 2,
  //   title: "Music Player App",
  //   description:
  //     "I have developed a music player application designed to provide users with a seamless and intuitive music listening experience. This application incorporates several key features to enhance the user experience",
  //   features: [
  //     {
  //       title: "Music Library",
  //       des: "Access your music library and create playlists to organize your favorite songs and albums.",
  //     },
  //     {
  //       title: "Playback Controls",
  //       des: "Control music playback with ease, including play, pause, skip, shuffle, and repeat functions.",
  //     },
  //     {
  //       title: "Customizable Settings",
  //       des: "Customize the app settings to suit your preferences, including audio quality, equalizer settings, and playback speed.",
  //     },
  //     {
  //       title: "Offline Playback",
  //       des: "Download songs for offline playback, allowing you to enjoy your favorite music without an internet connection.",
  //     },
  //   ],
  //   images: ["/music-player-app.png", "/music-player-app.png"],
  //   iconList: [
  //     {
  //       label: "Expo",
  //       img: "/expo.svg",
  //     },
  //     {
  //       label: "React Native",
  //       img: "/rn.svg",
  //     },
  //     {
  //       label: "TypeScript",
  //       img: "/ts.svg",
  //     },
  //   ],
  //   github: "",
  // },
];
