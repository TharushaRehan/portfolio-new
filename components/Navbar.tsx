import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <header
      className={cn(
        "container supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="flex justify-between items-center py-5">
        <h1 className="text-2xl font-bold">Tharusha Perera</h1>
        <nav className="hidden lg:block">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={buttonVariants({ variant: "link" })}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-purple/0 via-purple to-purple/0" />
    </header>
  );
};

export default Navbar;
