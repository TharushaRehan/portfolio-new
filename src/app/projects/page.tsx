import type { Metadata } from "next";
import { SectionLabel } from "@/components/common";
import { Footer, Header } from "@/components/layout";
import { ProjectGrid } from "@/components/pages/projects";

export const metadata: Metadata = {
  title: "Projects | Tharusha Perera",
  description:
    "Full-stack, front-end and mobile projects built by Tharusha Perera.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-ink text-ink-foreground">
      <Header />
      <section className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="mb-16 space-y-5">
          <SectionLabel index={1} text="All projects" />
          <h1 className="max-w-3xl text-5xl font-light leading-[1.05] tracking-tighter md:text-7xl">
            Things I&apos;ve designed, built and shipped.
          </h1>
        </div>
        <ProjectGrid />
      </section>
      <Footer />
    </main>
  );
}
