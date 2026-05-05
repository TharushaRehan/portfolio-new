"use client";

import { Header } from "@/components/layout";
import { Hero } from "@/components/home";
import { AuroraBackground } from "@/components/custom";
import { TechStack } from "@/components/home";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <AuroraBackground className="p-0">
        <Header />
        <Separator className="bg-gray-100" />
        <Hero />
      </AuroraBackground>
      <TechStack />
    </main>
  );
}
