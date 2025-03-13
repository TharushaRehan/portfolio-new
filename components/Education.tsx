"use client";

import { education } from "@/data";

const Education = () => {
  return (
    <div className="container pb-20" id="education">
      <h1 className="heading capitalize">
        My <span className="text-purple">education</span>
      </h1>
      <div className="mt-12 space-y-5">
        {education.map((card) => {
          return (
            <div key={card.id}>
              <div
                className="space-y-2 w-full p-3
            py-6 md:p-5 lg:p-10 gap-2 border rounded-lg"
              >
                <div className="flex items-center justify-between gap-10 md:gap-0">
                  <h1 className="text-start text-xl md:text-2xl font-bold text-wrap">
                    {card.title}
                  </h1>
                  <p className="text-end text-sm md:text-lg font-bold">
                    {card.year}
                  </p>
                </div>
                <p className="text-start">{card.campus}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
