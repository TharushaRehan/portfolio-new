import { cn } from "@/lib/utils";

type SectionLabelProps = {
  /** Section number, rendered as `{01}` */
  index: number;
  text: string;
  className?: string;
};

const SectionLabel = ({ index, text, className }: SectionLabelProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-x-2 font-mono text-sm opacity-70",
      className,
    )}
  >
    <span className="size-2 rounded-full bg-lime" />
    {`{${String(index).padStart(2, "0")}} — ${text}`}
  </span>
);

SectionLabel.displayName = "SectionLabel";

export { SectionLabel };
