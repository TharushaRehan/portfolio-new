import { education } from "@/data";
import { Button } from "./ui/moving-border";

const Education = () => {
  return (
    <div className="py-20" id="education">
      <h1 className="heading capitalize">
        My <span className="text-purple">education</span>
      </h1>
      <div className="mt-12">
        {education.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            containerClassName="w-full mb-5"
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
        ))}
      </div>
    </div>
  );
};

export default Education;
