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

export function MobileNav() {
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
      </SheetContent>
    </Sheet>
  );
}
