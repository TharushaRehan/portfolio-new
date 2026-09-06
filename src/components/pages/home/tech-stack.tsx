import * as React from "react";
import {
  FloatingTechStack,
  type FloatingTechStackProps,
} from "@/components/custom/floating-tech-stack";
import {
  IconAndroidStudio,
  IconExpo,
  IconFigma,
  IconFirebase,
  IconGitHub,
  IconJavaScript,
  IconKotlin,
  IconMongoDB,
  IconNestJS,
  IconNextjs,
  IconStripe,
  IconSupabase,
  IconSwift,
  IconTypeScript,
  IconVercel,
  IconVSCode,
} from "@/constants";

// Define the icons with their unique positions for the demo.
const demoIcons: FloatingTechStackProps["icons"] = [
  { id: 1, icon: IconNextjs, className: "top-[10%] left-[10%]" },
  { id: 2, icon: IconTypeScript, className: "top-[20%] right-[8%]" },
  { id: 3, icon: IconExpo, className: "bottom-[12%] left-[10%]" },
  { id: 4, icon: IconFigma, className: "bottom-[10%] right-[10%]" },
  { id: 5, icon: IconGitHub, className: "top-[5%] left-[30%]" },
  { id: 6, icon: IconSwift, className: "top-[5%] right-[30%]" },
  { id: 7, icon: IconVercel, className: "bottom-[8%] left-[25%]" },
  { id: 8, icon: IconStripe, className: "top-[40%] left-[15%]" },
  { id: 9, icon: IconKotlin, className: "bottom-[30%] right-[25%]" },
  { id: 10, icon: IconJavaScript, className: "bottom-[8%] left-[70%]" },
  { id: 11, icon: IconVSCode, className: "top-[50%] right-[5%]" },
  { id: 12, icon: IconSupabase, className: "top-[55%] left-[5%]" },
  { id: 13, icon: IconNestJS, className: "top-[5%] left-[55%]" },
  { id: 14, icon: IconAndroidStudio, className: "bottom-[5%] right-[45%]" },
  { id: 15, icon: IconFirebase, className: "top-[25%] right-[20%]" },
  { id: 16, icon: IconMongoDB, className: "top-[60%] left-[30%]" },
];

const TechStack = () => {
  return (
    <FloatingTechStack
      title="Tech Stack"
      subtitle="Explore the technologies I use in my projects"
      ctaText="View Projects"
      ctaHref="/projects"
      icons={demoIcons}
    />
  );
};

TechStack.displayName = "TechStack";

export { TechStack };
