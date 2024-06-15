type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  github: string;
  liveLink?: string;
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Tech Stack", link: "#stack" },
  { name: "Work Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const myRoles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Front-End Developer",
  "Mobile Application Developer",
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
  },
  {
    id: 3,
    title: "AI Image SaaS Platform",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/clerk.webp",
      "/stripe.svg",
    ],
    link: "https://image-platform-one.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const webApps = [
  {
    id: 1,
    title: "Notion Clone",
    des: "I have developed a robust and versatile web application inspired by Notion, designed to enhance productivity and streamline note-taking and organization. This application incorporates several key features to provide a seamless user experience:",
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
    img: "/notion-clone.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/clerk.webp"],
    github: "https://github.com/TharushaRehan/notion-clone",
    liveLink: "https://tharusha-perera-notion-clone.vercel.app/",
    tag: "Full-Stack",
  },
  {
    id: 2,
    title: "AI Image SaaS Platform",
    des: "This is a cloud-based image editing SaaS application that empowers you to bring your creative vision to life with a powerful and user-friendly suite of tools. This app also includes payments and credits system",
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
    img: "/ai-image-saas.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/clerk.webp",
      "/mongodb.svg",
      "/stripe.svg",
    ],
    github: "https://github.com/TharushaRehan/image-platform",
    liveLink: "https://image-platform-one.vercel.app/",
    tag: "Full-Stack",
  },
  {
    id: 3,
    title: "Blog Application",
    des: "Get ready to share your voice and captivate your audience with a beautifully crafted blog built using cutting-edge web technologies. This blog app leverages the power of Next.js, Tailwind CSS, and Framer Motion, used a Figma design, to provide a seamless and visually stunning user experience.",
    features: [],
    img: "/blog-app-frontend.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/framer.svg"],
    github: "",
    liveLink: "",
    tag: "Front-End",
  },
];

export const mobileApps = [
  {
    id: 1,
    title: "Video Sharing App",
    des: "dsdsds",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/ts.svg"],
    github: "https://github.com/TharushaRehan/notion-clone",
    tag: "Full-Stack",
  },
  {
    id: 2,
    title: "Meal Preperation App",
    des: "",
    img: "",
    iconLists: ["/kotlin.svg", "/sqlite.png"],
    github: "",
    tag: "Full-Stack",
  },
  {
    id: 3,
    title: "Dice Game",
    des: "",
    img: "",
    iconLists: [],
    github: "",
    tag: "Full-Stack",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer - Intern",
    company: "Cloud99X",
    desc: "As an Intern, I played a key role in developing mobile and web applications featuring advanced functionalities. My responsibilities spanned both frontend and backend development using on-demand technologies. I focused on delivering intuitive user interfaces, robust backend services, and seamless integrations, ensuring the delivery of a high-quality product that met user requirements and business objectives.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const education = [
  {
    id: 1,
    title: "BEng (Hons) Software Engineering",
    campus: "University of Westminster, UK",
    year: "2021 September - Present",
  },
  {
    id: 2,
    title: "Diploma in English",
    campus: "ICBT Campus - Sri Lanka",
    year: "2021 April",
  },
  {
    id: 3,
    title: "GCE Advanced Level - Commerce Stream (with ICT)",
    campus: "Holy Cross College, Kalutara",
    results: "A1, B1, C1",
    year: "2018 - 2020",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/TharushaRehan",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tharusha-perera/",
  },
];

export const techStack = [
  {
    id: 1,
    label: "Programming Laguages",
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
    ],
  },
  {
    id: 2,
    label: "Web Development",
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
    ],
  },
  {
    id: 3,
    label: "Mobile Development",
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
        label: "Kotlin",
        img: "/kotlin.svg",
      },
    ],
  },
  {
    id: 4,
    label: "Backend Services",
    description:
      "Tools which provides authentication, database, storage and many more.",
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
        label: "Clerk",
        img: "/clerk.webp",
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
    icons: [
      {
        label: "Android Studio",
        img: "/as.svg",
      },
      {
        label: "Vercel",
        img: "/vercel-icon.svg",
      },
      {
        label: "Stripe",
        img: "/stripe.svg",
      },
      {
        label: "GitHub",
        img: "/git.svg",
      },
      {
        label: "Postman",
        img: "/postman.svg",
      },
      {
        label: "VS Code",
        img: "/vs.svg",
      },
    ],
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];
