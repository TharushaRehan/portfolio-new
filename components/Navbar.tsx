"use client";

import { navItems, socialMedia } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
//import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "container supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="flex justify-between items-center py-5">
        <Link href={"/"} className="text-2xl font-bold">
          Tharusha Perera
        </Link>
        <nav className="hidden lg:block">
          {navItems.map((item) => {
            const url = pathname != "/" ? `/${item.href}` : item.href;
            return (
              <Link
                key={item.name}
                href={url}
                className={buttonVariants({ variant: "link" })}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {socialMedia.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              className={buttonVariants({ variant: "outline" })}
            >
              <item.img />
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-purple/0 via-purple to-purple/0" />
    </header>
  );
};

export default Navbar;
