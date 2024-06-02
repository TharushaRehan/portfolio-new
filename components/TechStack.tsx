"use client";

import { techStack } from "@/data";
import Image from "next/image";

//import { motion } from 'framer-motion';

const TechStack = () => {
  return (
    <div className="py-20" id="stack">
      <h1 className="heading capitalize">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="mt-20 sm:space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStack.map((item) => (
          <div
            key={item.label}
            className="py-4 px-5 border border-white-200/25 rounded-lg"
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
                  />
                  <span>{icon.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
