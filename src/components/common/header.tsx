import React from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-20 py-5 z-10">
      <Link href="/" className="text-2xl font-bold">
        Tharusha Perera
      </Link>
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
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
