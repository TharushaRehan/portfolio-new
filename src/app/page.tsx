"use client";

import { Header } from "@/components/layout";
import { Hero } from "@/components/pages/home";
import { AuroraBackground } from "@/components/custom";
import { TechStack } from "@/components/pages/home";

export default function Home() {
  return (
    <main>
      <Header />
      <AuroraBackground className="">
        <Hero />
      </AuroraBackground>
      <TechStack />
    </main>
  );
}
