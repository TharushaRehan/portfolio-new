import * as React from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds for one full loop */
  duration?: number;
  pauseOnHover?: boolean;
};

/**
 * Infinite horizontal marquee. Renders the children twice and slides the
 * track by -50% so the loop is seamless.
 */
const Marquee = ({
  children,
  className,
  duration = 40,
  pauseOnHover = false,
}: MarqueeProps) => (
  <div
    className={cn(
      "group flex overflow-hidden mask-x-from-90% mask-x-to-100%",
      className,
    )}
  >
    <div
      className={cn(
        "flex w-max shrink-0 animate-marquee motion-reduce:animate-none",
        pauseOnHover && "group-hover:[animation-play-state:paused]",
      )}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="flex shrink-0 items-center">{children}</div>
      <div className="flex shrink-0 items-center" aria-hidden>
        {children}
      </div>
    </div>
  </div>
);

Marquee.displayName = "Marquee";

export { Marquee };
