"use client";

import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const RecentProjects = () => {
  //

  //
  return (
    <div className="container pb-20" id="projects">
      <h1 className="heading capitalize">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map(({ id, title, des, img, techStack, github, link }) => {
          return (
            <div key={id} className="border rounded-lg p-4 space-y-5 w-full">
              <Image
                src={img}
                alt={title}
                className="rounded-xl w-full"
                width={550}
                height={320}
              />
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p
                className="lg:text-xl font-light text-sm
                line-clamp-2"
              >
                {des}
              </p>
              <div className="mt-7 mb-3 space-y-10">
                <div className="flex flex-wrap items-center gap-3">
                  {techStack.map((skill, index) => (
                    <p
                      key={index}
                      className="border rounded-md dark:text-black dark:bg-white text-white bg-black py-1 px-2 text-nowrap text-xs"
                    >
                      {skill}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <Link
                    href={github}
                    target="_blank"
                    className={`${buttonVariants({
                      variant: "outline",
                    })} gap-3`}
                  >
                    <FaGithub />
                    Source Code
                  </Link>
                  <Link
                    href={link}
                    target={"_blank"}
                    className="flex justify-center items-center text-nowrap"
                  >
                    <p className="flex lg:text-md text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link
          href="/projects"
          className={`${buttonVariants({
            variant: "outline",
          })} mt-10 gap-x-3 group`}
        >
          All Projects
          <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
