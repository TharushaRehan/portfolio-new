import { buttonVariants } from "@/components/ui/button";
import {
  frontEndProjects,
  fullStackProjects,
  mobileProjects,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";

const AllProjectsPage = () => {
  return (
    <div className="container py-10">
      <p className="heading">
        All <span className="text-purple">Projects</span>
      </p>
      <section className="pt-10">
        <p className="text-xl text-purple">Full-Stack</p>
        <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {fullStackProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 border border-input rounded-md space-y-3"
            >
              <p className="text-lg font-semibold">{project.title}</p>
              <p className="font-light">{project.description}</p>
              <p className="text-purple">Features</p>
              {project.features.map((feature) => (
                <ul key={feature.title} className="list-disc pl-5">
                  <li className="font-medium text-sm">{feature.title}</li>
                  {/* <p className="text-sm font-light">{feature.des}</p> */}
                </ul>
              ))}
              <p className="text-purple">Tech Stack</p>
              <div className="flex gap-3 flex-wrap">
                {project.iconList.map((icon, index) => (
                  <p
                    key={index}
                    className="text-xs border px-2 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black"
                  >
                    {icon.label}
                  </p>
                  // <Image
                  //   key={index}
                  //   src={icon.img}
                  //   alt=""
                  //   width={24}
                  //   height={24}
                  // />
                ))}
              </div>
              <div className="flex justify-between items-center pt-5">
                <Link
                  href={project.github}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <FaGithub />
                  <span>Source Code</span>
                  <ArrowRight />
                </Link>
                <Link
                  href={project.liveLink || "#"}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-purple"
                  )}
                >
                  <span>Check Live Link</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-10">
        <p className="text-xl text-purple">Front-End</p>
        <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {frontEndProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 border border-input rounded-md space-y-3"
            >
              <p className="text-lg font-semibold">{project.title}</p>
              <p className="font-light">{project.description}</p>
              <p className="text-purple">Features</p>
              {project.features.map((feature) => (
                <ul key={feature.title} className="list-disc pl-5">
                  <li className="font-medium text-sm">{feature.title}</li>
                  {/* <p className="text-sm font-light">{feature.des}</p> */}
                </ul>
              ))}
              <p className="text-purple">Tech Stack</p>
              <div className="flex gap-3">
                {project.iconList.map((icon, index) => (
                  <p
                    key={index}
                    className="text-xs border px-2 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black"
                  >
                    {icon.label}
                  </p>
                  // <Image
                  //   key={index}
                  //   src={icon.img}
                  //   alt=""
                  //   width={24}
                  //   height={24}
                  // />
                ))}
              </div>
              <div className="flex justify-between items-center pt-5">
                <Link
                  href={project.github}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <FaGithub />
                  <span>Source Code</span>
                  <ArrowRight />
                </Link>
                <Link
                  href={project.liveLink || "#"}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-purple"
                  )}
                >
                  <span>Check Live Link</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-10">
        <p className="text-xl text-purple">Mobile Apps</p>
        <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {mobileProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 border border-input rounded-md space-y-3"
            >
              <p className="text-lg font-semibold">{project.title}</p>
              <p className="font-light">{project.description}</p>
              <p className="text-purple">Features</p>
              {project.features.map((feature) => (
                <ul key={feature.title} className="list-disc pl-5">
                  <li className="font-medium text-sm">{feature.title}</li>
                  {/* <p className="text-sm font-light">{feature.des}</p> */}
                </ul>
              ))}
              <p className="text-purple">Tech Stack</p>
              <div className="flex gap-3">
                {project.iconList.map((icon, index) => (
                  <p
                    key={index}
                    className="text-xs border px-2 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black"
                  >
                    {icon.label}
                  </p>
                  // <Image
                  //   key={index}
                  //   src={icon.img}
                  //   alt=""
                  //   width={24}
                  //   height={24}
                  // />
                ))}
              </div>
              <div className="flex justify-between items-center pt-5">
                <Link
                  href={project.github}
                  className={buttonVariants({ variant: "outline" })}
                >
                  <FaGithub />
                  <span>Source Code</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProjectsPage;
