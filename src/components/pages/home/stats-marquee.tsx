import { Asterisk } from "lucide-react";
import { Marquee } from "@/components/common";
import { PROJECTS } from "@/constants";

const stats = [
  { value: "2+", label: "years of experience" },
  { value: `${PROJECTS.length}+`, label: "projects shipped" },
  { value: "2", label: "companies" },
  { value: "Web", label: "& mobile" },
];

const StatsMarquee = () => (
  <section aria-label="Highlights" className="bg-ink py-6 text-ink-foreground">
    <Marquee duration={35}>
      {stats.map((s) => (
        <div key={s.label} className="flex items-center">
          <p className="whitespace-nowrap px-8 text-3xl font-light tracking-tight md:text-4xl">
            <span className="text-lime">{s.value} /</span> {s.label}
          </p>
          <Asterisk className="size-8 text-lime" />
        </div>
      ))}
    </Marquee>
  </section>
);

StatsMarquee.displayName = "StatsMarquee";

export { StatsMarquee };
