"use client";

import { workExperience } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/moving-border";

const Experience = () => {
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef, { once: true });
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: false });
  return (
    <div className="py-20" id="experience">
      <motion.h1
        ref={headerRef}
        className="heading capitalize"
        initial={{ x: "-20vw" }}
        transition={{ type: "spring", stiffness: 20 }}
        animate={headerIsInView ? { x: 0 } : "hidden"}
      >
        My <span className="text-purple">work experience</span>
      </motion.h1>
      {/* className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10" */}
      <div className="mt-12">
        {workExperience.map((card) => {
          const width = card.id % 2 === 0 ? "-50vw" : "50vw";
          return (
            <motion.div
              ref={contentRef}
              key={card.id}
              initial={{ x: width }}
              animate={contentIsInView ? { x: 0 } : "hidden"}
              transition={{ type: "spring", stiffness: 20 }}
            >
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 
            dark:border-slate-800"
                disabled={true}
              >
                <div
                  className="flex lg:flex-row flex-col lg:items-center p-3
            py-6 md:p-5 lg:p-10 gap-2"
                >
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="text-start text-lg mt-1 font-semibold">
                      {card.company}
                    </p>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
