import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/common";
import { ProjectCard } from "@/components/pages/projects";
import { FEATURED_PROJECTS } from "@/constants";

const FeaturedProjects = () => (
  <section id="projects" className="scroll-mt-24 bg-ink text-ink-foreground">
    <div className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-5">
          <SectionLabel index={1} text="Featured projects" />
          <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-tighter md:text-6xl">
            I blend product thinking with engineering.
          </h2>
        </div>
        <Link
          href="/contact"
          className="group inline-flex h-14 w-fit items-center gap-4 rounded-full bg-lime/15 pl-7 pr-2 font-medium text-lime transition-colors hover:bg-lime/25"
        >
          Work with me
          <span className="flex size-10 items-center justify-center rounded-full bg-lime text-lime-foreground transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-5" />
          </span>
        </Link>
      </div>

      <div className="mt-20 space-y-24">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>

    <div className="px-3 pb-3">
      <Link
        href="/projects"
        className="group flex h-48 items-center justify-center rounded-3xl bg-lime text-lime-foreground"
      >
        <span className="inline-flex items-center gap-4 text-lg font-medium">
          View all projects
          <span className="flex size-12 items-center justify-center rounded-full bg-lime-foreground text-lime transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-5" />
          </span>
        </span>
      </Link>
    </div>
  </section>
);

FeaturedProjects.displayName = "FeaturedProjects";

export { FeaturedProjects };
