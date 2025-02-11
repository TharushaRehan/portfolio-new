"use client";

import { MenuIcon } from "lucide-react";
import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="block lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="flex items-center justify-center"
        >
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <SheetHeader className="hidden">
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col items-start">
          {navItems.map((item) => {
            const url = pathname == "/projects" ? `/${item.href}` : item.href;
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
      </SheetContent>
    </Sheet>
  );
}
