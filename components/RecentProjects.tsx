"use client";

import { projects } from "@/data";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";
import MagicButton from "./ui/magic-button";

const RecentProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  //

  //
  return (
    <div className="py-20" id="projects">
      <h1 className="heading capitalize">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div
        className="flex flex-wrap items-center justify-center p-4
      gap-x-24 gap-y-8 mt-10"
        ref={ref}
      >
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          const width = id % 2 === 0 ? "-50vw" : "50vw";

          return (
            <motion.div
              key={id}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex
          items-center justify-center sm:w-[570px] w-[80vw]"
              initial={{ x: width }}
              animate={isInView ? { x: 0 } : "hidden"}
              transition={{ type: "spring", stiffness: 20 }}
            >
              <PinContainer title={link} href={link}>
                <div
                  className="relative flex items-center justify-center
              sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] 
              mb-10"
                >
                  <div
                    className="relative w-full h-full overflow-hidden
                lg:rounded-3xl bg-[#13162d]"
                  >
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1
                  className="font-bold lg:text-2xl md:text-xl text-base
               line-clamp-1"
                >
                  {title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm 
              line-clamp-2"
                >
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full 
                      bg-black lg:w-10 lg:h-10 w-8 h-8 flex 
                      justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p
                      className="flex lg:text-xl md:text-xs text-sm 
                  text-purple"
                    >
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          );
        })}
        <Link href={"/projects"}>
          <MagicButton
            title="Show All"
            icon={<ArrowRight />}
            position="right"
            containerClasses="hover:opacity-50 transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
