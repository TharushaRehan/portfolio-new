"use client";

import * as React from "react";
import { PROJECT_CATEGORIES, PROJECTS, type ProjectCategory } from "@/constants";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

type Filter = "All" | ProjectCategory;
const FILTERS: Filter[] = ["All", ...PROJECT_CATEGORIES];

const ProjectGrid = () => {
  const [filter, setFilter] = React.useState<Filter>("All");
  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="space-y-14">
      <div aria-label="Filter projects" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const count =
            f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "h-10 rounded-full border px-5 text-sm transition-colors",
                filter === f
                  ? "border-lime bg-lime text-lime-foreground"
                  : "border-white/15 hover:bg-white/10",
              )}
            >
              {f} <span className="ml-1 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            eager={i < 2}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ))}
      </div>
    </div>
  );
};

ProjectGrid.displayName = "ProjectGrid";

export { ProjectGrid };
