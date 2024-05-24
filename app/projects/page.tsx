import MagicButton from "@/components/ui/magic-button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsBack } from "react-icons/bs";

const ProjectsPage = () => {
  return (
    <main
      className="py-20 relative bg-black-100 flex justify-center items-center
                flex-col mx-auto sm:px-10 px-5 overflow-clip"
    >
      <h1 className="heading">
        All <span className="text-purple">Projects</span>
      </h1>
    </main>
  );
};

export default ProjectsPage;
