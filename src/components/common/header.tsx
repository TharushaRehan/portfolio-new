import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-20 py-5">
      <h1 className="text-2xl font-bold">Tharusha Perera</h1>
      <div className="flex items-center gap-x-3">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Projects
        </Link>
        <Link href="/blogs" className={cn(buttonVariants({ variant: "link" }))}>
          Blogs
        </Link>
      </div>
      <div className="flex items-center gap-x-5">
        <p className="text-sm text-gray-500">
          Email:{" "}
          <span className="text-gray-900">tharushaperera088@gmail.com</span>
        </p>
        <Button className="cursor-pointer">Contact Me</Button>
      </div>
    </header>
  );
};

export default Header;
