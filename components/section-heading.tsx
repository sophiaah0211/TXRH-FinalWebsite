import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Badge
        className={
          theme === "dark"
            ? "border-[rgba(64,51,44,0.1)] bg-white/70 text-[var(--ink-muted)]"
            : undefined
        }
      >
        {eyebrow}
      </Badge>
      <div className="space-y-4">
        <h2
          className={cn(
            "font-display text-4xl leading-tight sm:text-5xl",
            theme === "dark" ? "text-[var(--ink)]" : "text-[var(--foreground)]"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "text-base leading-7 sm:text-lg",
            theme === "dark" ? "text-[var(--ink-muted)]" : "text-[var(--muted-foreground)]"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
