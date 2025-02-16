import { ProjectDetailsProps } from "@/types";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import ImageSwiper from "./image-swiper";

const ProjectDetails = ({
  id,
  title,
  description,
  images,
  features,
  iconList,
  github,
  liveLink,
  isMobile,
}: ProjectDetailsProps) => {
  return (
    <div key={id} className="p-5 border border-input rounded-md space-y-3">
      <p className="text-lg font-semibold">{title}</p>

      <ImageSwiper images={images} />

      <p className="font-light">{description}</p>
      <p className="text-purple">Features</p>
      {features.map((feature) => (
        <ul key={feature.title} className="list-disc pl-5">
          <li className="font-medium text-sm">{feature.title}</li>
          {/* <p className="text-sm font-light">{feature.des}</p> */}
        </ul>
      ))}
      <p className="text-purple">Tech Stack</p>
      <div className="flex gap-3 flex-wrap">
        {iconList.map((icon, index) => (
          <p
            key={index}
            className="text-xs border px-2 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black"
          >
            {icon.label}
          </p>
        ))}
      </div>
      <div className="flex justify-between items-center pt-5">
        <Link href={github} className={buttonVariants({ variant: "outline" })}>
          <FaGithub />
          <span>Source Code</span>
          <ArrowRight />
        </Link>
        {!isMobile && (
          <Link
            href={liveLink || "#"}
            className={cn(buttonVariants({ variant: "link" }), "text-purple")}
          >
            <span>Check Live Link</span>
            <ArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
