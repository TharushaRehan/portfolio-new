"use client";

import React from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FloatingHeader = () => {
  const [open, setOpen] = React.useState(false);

  const links = [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-5 z-50",
        "mx-auto w-full max-w-7xl rounded-lg border shadow",
        "bg-background/95 supports-backdrop-filter:bg-background/80 backdrop-blur-lg",
      )}
    >
      <nav className="mx-auto flex items-center justify-between p-1.5">
        <Link
          href={"/"}
          className={cn(buttonVariants({ variant: "ghost" }), "h-auto")}
        >
          <p className="text-lg font-bold">TP</p>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-x-5">
            <p className="text-sm text-gray-500 hidden md:block">
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
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent
              className="bg-background/95 supports-backdrop-filter:bg-background/80 gap-0 backdrop-blur-lg"
              showCloseButton
              side="left"
            >
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    className={buttonVariants({
                      variant: "ghost",
                      className: "justify-start",
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <SheetFooter>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Contact Me
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

FloatingHeader.displayName = "FloatingHeader";

export { FloatingHeader };
