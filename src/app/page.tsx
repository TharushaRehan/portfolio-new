"use client";

import Header from "@/components/common/header";
import Hero from "@/components/common/hero";
import FloatingIconsHeroDemo from "@/components/common/tech-stack";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Header />
      <Separator />
      <Hero />
      <FloatingIconsHeroDemo />
    </main>
  );
}
