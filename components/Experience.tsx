"use client";

import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="container pb-20" id="experience">
      <h1 className="heading capitalize">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12">
        {workExperience.map((card) => {
          return (
            <div key={card.id}>
              <div
                className="flex lg:flex-row flex-col lg:items-center p-3
            py-6 md:p-5 lg:p-10 gap-2 border rounded-lg"
              >
                <div className="lg:ms-5">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-start text-xl md:text-2xl font-bold">
                        {card.title}
                      </h1>
                      <p className="text-start text-lg mt-1 font-medium">
                        {card.company}
                      </p>
                    </div>
                    <p>{card.year}</p>
                  </div>
                  <p className="text-start text-black/50 dark:text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
