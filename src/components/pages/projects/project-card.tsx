import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { IconGitHub, type Project } from "@/constants";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  /** Load the image immediately (cards above the fold) */
  eager?: boolean;
  sizes?: string;
  className?: string;
};

const ProjectCover = ({
  project,
  eager,
  sizes = "(min-width: 1280px) 1216px, 100vw",
}: ProjectCardProps) =>
  project.image ? (
    <Image
      src={project.image}
      alt={`${project.title} screenshot`}
      fill
      loading={eager ? "eager" : "lazy"}
      sizes={sizes}
      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  ) : (
    // Styled fallback when there's no screenshot yet
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,var(--lime)_0%,transparent_45%),linear-gradient(135deg,#1f1f1f,#0b0b0b)] transition-transform duration-700 ease-out group-hover:scale-[1.03]">
      <p className="px-6 text-center text-4xl font-light tracking-tighter text-white/90 md:text-6xl">
        {project.title}
      </p>
    </div>
  );

const ProjectCard = ({ className, ...props }: ProjectCardProps) => {
  const { project } = props;
  const href = project.liveUrl ?? project.sourceUrl;

  return (
    <article className={cn("group space-y-6", className)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="font-mono text-sm">
            <span className="text-lime">{"{ "}</span>
            {project.tag}
            <span className="text-lime">{" }"}</span>
            <span className="ml-3 opacity-50">{project.category}</span>
          </p>
          <h3 className="text-3xl font-light tracking-tighter md:text-4xl">
            {project.title}
          </h3>
          <p className="text-sm opacity-60">{project.stack.join(" · ")}</p>
        </div>
        <div className="flex items-center gap-2">
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code`}
              className="flex size-11 items-center justify-center rounded-full border border-current/15 transition-colors hover:bg-current/10"
            >
              <IconGitHub width={18} height={18} className="text-current" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="flex size-11 items-center justify-center rounded-full bg-lime text-lime-foreground transition-transform hover:rotate-45"
            >
              <ArrowUpRight className="size-5" />
            </a>
          )}
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden
        className="relative block aspect-video overflow-hidden rounded-2xl bg-white/5"
      >
        <ProjectCover {...props} />
      </a>
    </article>
  );
};

ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
