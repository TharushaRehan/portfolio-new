"use client";

import { Header } from "@/components/layout";
import { Hero } from "@/components/pages/home";
import { AuroraBackground } from "@/components/custom";
import { TechStack } from "@/components/pages/home";

export default function Home() {
  return (
    <main>
      <AuroraBackground className="p-0">
        <Header />
        <Hero />
      </AuroraBackground>
      <TechStack />
    </main>
  );
}
