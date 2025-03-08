"use client";

import { workExperience } from "@/data";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="container pb-20" id="experience">
      <h1 className="heading capitalize">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 flex flex-col gap-y-5">
        {workExperience.map((item) => {
          return (
            <div
              key={item.id}
              className="p-3 py-6 md:p-5 lg:p-10 gap-2 border rounded-lg"
            >
              <div className="flex flex-col gap-y-2 lg:flex-row flex-1 justify-between items-center">
                <h1 className="text-xl md:text-2xl font-semibold self-start lg:self-auto text-purple/80">
                  {item.title}
                </h1>
                <p className="block self-start lg:hidden text-lg">
                  {item.company}
                </p>
                <p className="self-start lg:self-auto">{item.year}</p>
              </div>
              <p className="text-lg mt-1 font-medium hidden lg:block">
                {item.company}
              </p>
              <p className="text-black/50 dark:text-white-100 mt-3 text-sm lg:text-base">
                {item.desc}
              </p>
              <p className="mt-3 font-semibold text-lg">Skills</p>
              <div className="mt-3 flex flex-wrap gap-5">
                {item.skills.map((skill) => (
                  <div key={skill.label} className="flex items-center gap-3">
                    <Image
                      src={skill.img}
                      alt={skill.label}
                      width={10}
                      height={10}
                      className="w-10 h-10 border rounded-md p-2"
                    />
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
            // <div key={card.id}>
            //   <div
            //     className="flex lg:flex-row flex-col lg:items-center p-3
            // py-6 md:p-5 lg:p-10 gap-2 border rounded-lg"
            //   >
            //     <div className="lg:ms-5">
            //       <div className="flex justify-between">
            //         <h1 className="text-xl md:text-2xl font-bold">
            //           {card.title}
            //         </h1>
            //         <p className="self-end">{card.year}</p>
            //       </div>
            //       <p className="text-lg mt-1 font-medium">{card.company}</p>
            //       <p className="text-black/50 dark:text-white-100 mt-3 font-semibold">
            //         {card.desc}
            //       </p>
            //       <p className="mt-3 font-semibold text-lg">Skills</p>
            //       <div className="mt-3 flex flex-wrap gap-5">
            //   {card.skills.map((skill) => (
            //     <div
            //       key={skill.label}
            //       className="flex items-center gap-3"
            //     >
            //       <Image
            //         src={skill.img}
            //         alt={skill.label}
            //         width={10}
            //         height={10}
            //         className="w-10 h-10 border rounded-md p-2"
            //       />
            //       <span>{skill.label}</span>
            //     </div>
            //   ))}
            // </div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
