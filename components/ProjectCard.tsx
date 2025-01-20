"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectCardProps } from "@/types";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ProjectCard = ({
  id,
  title,
  des,
  features,
  images,
  iconLists,
  github,
  liveLink,
  tag,
}: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const side = id % 2 === 0 ? "-50vw" : "50vw";

  return (
    <motion.div
      ref={ref}
      key={id}
      className="border p-4 rounded-xl"
      initial={{ x: side }}
      animate={isInView ? { x: 0 } : "hidden"}
      transition={{ type: "spring", stiffness: 20 }}
    >
      <p className="border-2 rounded-2xl w-fit px-5 py-2 mb-5 bg-gradient-to-r from-purple to-70% to-blue-300 text-black font-medium">
        {tag}
      </p>
      <div className="bg-[#13162d] p-3 rounded-xl items-center justify-center flex border">
        <Carousel className="px-2 mx-5 py-2 md:px-5 md:mx-8 md:py-5">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  alt={title}
                  className="w-full rounded-lg"
                  width={800}
                  height={800}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
              key={icon.label}
              className="border border-neutral-800 rounded-full 
                      bg-black flex 
                      justify-center items-center"
              style={{
                transform: `translateX(-${5 * index * 2}px)`,
              }}
            >
              {/* <Image
                src={icon}
                alt={icon}
                width={10}
                height={10}
                className="w-10 h-10 p-2"
              /> */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      src={icon.img}
                      alt={icon.label}
                      width={10}
                      height={10}
                      className="w-10 h-10 p-2"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="">{icon.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-sm md:text-lg">Source Code</p>
            <ArrowRight className="w-4 h-4" />
            <Link
              href={github}
              className="border border-neutral-800 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center rounded-full hover:opacity-50 transition-all duration-300"
              target="_blank"
            >
              <Image src="/git.svg" alt="Github" width={24} height={50} />
            </Link>
          </div>
          {liveLink && (
            <Link href={liveLink} target="_blank">
              <p className="text-purple text-sm md:text-lg hover:opacity-50 transition-all duration-300 flex items-center gap-2 hover:mr-2">
                Check Live Site
                <ArrowRight size={20} />
              </p>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
