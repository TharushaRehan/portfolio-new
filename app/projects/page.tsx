"use client";

import ProjectCard from "@/components/ProjectCard";
import { mobileApps, webApps } from "@/data";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const ProjectsPage = () => {
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef, { once: true });
  return (
    <main className="py-20 relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-20 px-5 overflow-clip ">
      <div className="w-full">
        <Link
          href={"/"}
          className="flex gap-2 border p-3 rounded-full w-fit hover:bg-gray-800 transition-all duration-300"
          id="back-btn"
        >
          <ArrowLeft />
          Go Back
        </Link>
        <motion.h1
          ref={headerRef}
          className="heading capitalize"
          initial={{ x: "-20vw" }}
          transition={{ type: "spring", stiffness: 20 }}
          animate={headerIsInView ? { x: 0 } : "hidden"}
        >
          All <span className="text-purple">Projects</span>
        </motion.h1>

        <div className="md:mt-20 mt-10">
          <h1 className="text-center text-black-100 bg-gradient-to-r from-purple to-green-300 font-medium text-xl md:text-2xl py-2 rounded-xl w-full md:w-fit md:px-10">
            Web Applications
          </h1>
          <div className="mt-10 grid md:grid-cols-1 lg:grid-cols-2 gap-10">
            {webApps.map((item) => (
              <ProjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                des={item.des}
                features={item.features}
                images={item.img}
                iconLists={item.iconLists}
                github={item.github}
                liveLink={item.liveLink}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
        <div className="md:mt-20 mt-10">
          <h1 className="text-center text-black-100 bg-gradient-to-r from-purple to-green-300 font-medium text-xl md:text-2xl py-2 rounded-xl w-full md:w-fit md:px-10">
            Mobile Applications
          </h1>
          <div className="mt-10 grid md:grid-cols-1 lg:grid-cols-2 gap-10">
            {mobileApps.map((item) => (
              <ProjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                des={item.des}
                images={item.img}
                features={item.features}
                iconLists={item.iconLists}
                github={item.github}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      </div>
      <Link
        href={"#back-btn"}
        className="flex gap-2 border p-3 rounded-full w-fit self-end mt-10 hover:bg-gray-800 transition-all duration-300"
      >
        <ArrowUp />
        Top
      </Link>
    </main>
  );
};

export default ProjectsPage;
