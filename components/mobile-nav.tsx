"use client";

import { MenuIcon } from "lucide-react";
import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="block lg:hidden">
        <Button variant="ghost" size="icon" className="px-2">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
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
