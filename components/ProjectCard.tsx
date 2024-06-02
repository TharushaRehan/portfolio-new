import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Feature {
  title: string;
  des: string;
}

interface Props {
  id: number;
  title: string;
  des: string;
  features?: Array<Feature>;
  img: string;
  iconLists: string[];
  github: string;
  liveLink?: string;
}

const ProjectCard = ({
  id,
  title,
  des,
  features,
  img,
  iconLists,
  github,
  liveLink,
}: Props) => {
  return (
    <div key={id} className="border border-neutral-800 p-4 rounded-xl">
      <div className="bg-[#13162d] pt-5 px-3 rounded-lg items-center justify-center flex">
        <img src={img} alt={title} className="" />
      </div>
      <div className="mt-5 space-y-4">
        <h3 className="text-xl md:text-2xl font-medium md:font-bold">
          {title}
        </h3>
        <p>{des}</p>
        <div>
          <p className="text-lg text-purple font-bold mb-3">Features</p>
          {features?.map((feature) => (
            <p key={feature.title} className="mb-2">
              <span className="font-semibold ">{feature.title}</span>
              <span className="text-gray-400"> - {feature.des}</span>
            </p>
          ))}
        </div>

        <div className="flex items-center">
          {iconLists.map((icon, index) => (
            <div
              key={icon}
              className="border border-neutral-800 rounded-full 
                      bg-black w-10 h-10 flex 
                      justify-center items-center"
              style={{
                transform: `translateX(-${5 * index * 2}px)`,
              }}
            >
              <img src={icon} alt={icon} className="p-2" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-sm md:text-lg">Source Code</p>
            <ArrowRight className="w-4 h-4" />
            <Link
              href={github}
              className="border border-neutral-800 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center rounded-full"
              target="_blank"
            >
              <img src="/git.svg" alt="Github" />
            </Link>
          </div>
          {liveLink && (
            <Link href={liveLink} target="_blank">
              <p className="text-purple text-sm md:text-lg">Check Live Site</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
