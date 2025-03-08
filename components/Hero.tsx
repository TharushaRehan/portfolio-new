"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { myRoles } from "@/data";

import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";

//

//
const Hero = () => {
  //
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1KMtotwnBI_89eDBrikygpyBg7xHNytuE/view?usp=sharing",
      "_blank"
    );
  };
  //
  return (
    <section className="container py-20">
      <div className="flex justify-between items-center">
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-3xl md:text-5xl text-nowrap">
            Hi, I&apos;m Tharusha 👋
          </h1>
          <div className="flex items-center">
            <p className="max-w-[300px] md:max-w-[400px] text-sm md:text-xl font-light">
              I&apos;m a
            </p>
            <FlipWords words={myRoles} />
          </div>
          <Button onClick={handleDownload} className="gap-x-3">
            Download CV <Download size={16} />
          </Button>
        </div>
        <Avatar className="h-24 w-24 md:h-60 md:w-60">
          <AvatarImage src="/profile_pic.jpg" alt="tharusha" />
          <AvatarFallback>TP</AvatarFallback>
        </Avatar>
      </div>
      <div className="pt-10" id="about">
        <h1 className="heading capitalize">
          About <span className="text-purple">me</span>
        </h1>
        <p className="pt-5 text-sm md:text-lg font-light">
          A dedicated and detail-oriented Software Engineer with experience in
          mobile and web application development. Proficient in modern
          technologies, I specialize in building user-friendly interfaces,
          scalable backend services, and seamless integrations. With strong
          problem-solving skills and leadership experience, I am committed to
          delivering high-quality solutions that align with user needs and
          business goals.
        </p>
      </div>
    </section>
  );
};

export default Hero;
