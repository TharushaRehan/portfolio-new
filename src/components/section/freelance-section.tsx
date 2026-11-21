import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { CalendarDays } from "lucide-react";

export function AvailableDot() {
  return (
    <span className="relative flex size-2.5" aria-hidden>
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75 motion-reduce:animate-none" />
      <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
    </span>
  );
}

export default function FreelanceSection() {
  return (
    <div className="border rounded-xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm font-medium">
          <AvailableDot />
          Available for freelance
        </div>
        <h2 className="text-2xl font-bold tracking-tighter">
          Have a project in mind?
        </h2>
        <p className="text-muted-foreground text-sm text-balance">
          I take on freelance web and mobile work, from new builds to features
          on existing apps. Book a free 30-minute call and let&apos;s talk it
          through.
        </p>
      </div>
      <Button asChild size="lg" className="rounded-xl shrink-0 gap-2">
        <a href={DATA.contact.calUrl} target="_blank" rel="noopener noreferrer">
          <CalendarDays className="size-4" aria-hidden />
          Book a call
        </a>
      </Button>
    </div>
  );
}
