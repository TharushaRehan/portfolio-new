"use client";

import { education } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/moving-border";

const Education = () => {
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef, { once: true });
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true });
  return (
    <div className="py-20" id="education">
      <motion.h1
        ref={headerRef}
        className="heading capitalize"
        initial={{ x: "-20vw" }}
        transition={{ type: "spring", stiffness: 20 }}
        animate={headerIsInView ? { x: 0 } : "hidden"}
      >
        My <span className="text-purple">education</span>
      </motion.h1>
      <div className="mt-12">
        {education.map((card) => {
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
                containerClassName="w-full mb-5"
                disabled={true}
              >
                <div className="space-y-2 w-full p-5">
                  <div className="flex items-center justify-between gap-10 md:gap-0">
                    <h1 className="text-start text-xl md:text-2xl font-bold text-wrap">
                      {card.title}
                    </h1>
                    <p className="text-end text-sm md:text-lg font-bold">
                      {card.year}
                    </p>
                  </div>
                  {card.results && (
                    <p className="text-start">Results - {card.results}</p>
                  )}
                  <p className="text-start">{card.campus}</p>
                </div>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
