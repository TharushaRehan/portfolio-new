"use client";

import { projects } from "@/data";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin";
import MagicButton from "./ui/magic-button";

const RecentProjects = () => {
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef, { once: true });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  //

  //
  return (
    <div className="py-20" id="projects">
      <motion.h1
        ref={headerRef}
        className="heading capitalize"
        initial={{ x: "-20vw" }}
        transition={{ type: "spring", stiffness: 20 }}
        animate={headerIsInView ? { x: 0 } : "hidden"}
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>
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
              <PinContainer title={title} href={link}>
                <div
                  className="relative flex items-center justify-center
              sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] 
              mb-10"
                >
                  <div
                    className="relative w-full h-full overflow-hidden
                lg:rounded-3xl bg-[#13162d]"
                  >
                    <Image
                      src="/bg.png"
                      alt="bg-img"
                      width={570}
                      height={320}
                    />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 rounded-l-2xl"
                    width={550}
                    height={320}
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
                      bg-black flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          width={10}
                          height={10}
                          className="w-10 h-10 p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={link}
                    target={"_blank"}
                    className="flex justify-center items-center"
                  >
                    <p
                      className="flex lg:text-xl md:text-xs text-sm 
                  text-purple"
                    >
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </Link>
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
