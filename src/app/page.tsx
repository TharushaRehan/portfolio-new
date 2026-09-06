"use client";

import { Header } from "@/components/layout";
import { Hero } from "@/components/pages/home";
import { AuroraBackground } from "@/components/custom";
import { TechStack } from "@/components/pages/home";
import { Footer } from "@/components/layout";

export default function Home() {
  return (
    <main>
      <Header />
      <AuroraBackground className="">
        <Hero />
      </AuroraBackground>
      <TechStack />
      <Footer />
    </main>
  );
}
