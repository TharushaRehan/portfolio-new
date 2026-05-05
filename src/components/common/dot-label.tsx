import { cn } from "@/lib/utils";
import React from "react";

type DotLabelProps = {
  text: string;
  className?: string;
  dotClassName?: string;
};

const DotLabel = ({
  text,
  className = "",
  dotClassName = "",
}: DotLabelProps) => (
  <span className={cn(`inline-flex items-center gap-x-2`, className)}>
    <span
      className={cn(
        `bg-green-500 rounded-full w-3 h-3 animate-pulse`,
        dotClassName,
      )}
    />
    <span>{text}</span>
  </span>
);

DotLabel.displayName = "DotLabel";

export { DotLabel };
