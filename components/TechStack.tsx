"use client";

import { techStack } from "@/data";
import Image from "next/image";

const TechStack = () => {
  //

  //
  return (
    <div className="container pb-20" id="stack">
      <h1 className="heading capitalize">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="mt-20 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStack.map((item) => {
          return (
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
                      width={10}
                      height={10}
                      className="w-10 h-10 border rounded-md p-2"
                    />
                    <span>{icon.label}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
