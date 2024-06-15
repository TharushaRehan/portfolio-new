"use client";

import { techStack } from "@/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const TechStack = () => {
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef, { once: true });
  const stackRef = useRef(null);
  const stackIsInView = useInView(stackRef, { once: true });
  //

  //
  return (
    <div className="py-20" id="stack">
      <motion.h1
        ref={headerRef}
        className="heading capitalize"
        initial={{ x: "-20vw" }}
        transition={{ type: "spring", stiffness: 20 }}
        animate={headerIsInView ? { x: 0 } : "hidden"}
      >
        My <span className="text-purple">Tech Stack</span>
      </motion.h1>
      <div className="mt-20 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStack.map((item) => {
          const width = item.id % 2 === 0 ? "-50vw" : "50vw";
          const strings = ["x", "y"];
          const randomIndex = Math.random() < 0.5 ? 0 : 1;
          const side = strings[randomIndex];

          return (
            <motion.div
              ref={stackRef}
              key={item.label}
              className="py-4 px-5 border border-white-200/25 rounded-lg"
              initial={{ x: width }}
              animate={stackIsInView ? { x: 0 } : "hidden"}
              transition={{ type: "spring", stiffness: 20 }}
            >
              <p className="text-sm md:text-lg lg:text-xl">{item.label}</p>
              {item.description && (
                <p className="text-sm text-white-100">{item.description}</p>
              )}
              <div className="mt-5 flex flex-wrap gap-5">
                {item.icons.map((icon) => (
                  <div key={icon.label} className="flex items-center gap-3">
                    <Image
                      src={icon.img}
                      alt={icon.label}
                      width={20}
                      height={20}
                      className="w-6 h-6"
                    />
                    <span>{icon.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
