"use client";

import Header from "@/components/common/header";
import Hero from "@/components/common/hero";
import FloatingIconsHeroDemo from "@/components/common/tech-stack";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <AuroraBackground className="p-0">
        <Header />
        <Separator className="bg-gray-100" />
        <Hero />
      </AuroraBackground>
      <FloatingIconsHeroDemo />
    </main>
  );
}
