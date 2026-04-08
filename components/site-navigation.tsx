"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDownRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navSections } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function TexasRoadhouseMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#ffca2c,#d62828)] shadow-[0_10px_24px_rgba(214,40,40,0.28)]">
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <path
            d="M24 4 28.7 17.5 43 17.7 31.6 26.4 35.7 40 24 31.9 12.3 40 16.4 26.4 5 17.7 19.3 17.5Z"
            fill="#fff5e8"
          />
        </svg>
      </div>
      <div className="leading-none">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent-soft)]">
          Strategic Analysis
        </p>
        <p className="font-display text-xl uppercase tracking-[0.08em] text-[var(--foreground)]">
          Texas <span className="text-[var(--accent-soft)]">Roadhouse</span>
        </p>
      </div>
    </div>
  );
}

export function SiteNavigation() {
  const [activeSection, setActiveSection] = useState(navSections[0]?.id ?? "the-house-value-built");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers = navSections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          rootMargin: "-30% 0px -55% 0px",
          threshold: 0.15
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleNavigate = () => setOpen(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <div className="flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(14,12,11,0.72)] px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <Link
            href={`#${navSections[0]?.id ?? "the-house-value-built"}`}
            className="shrink-0"
            onClick={handleNavigate}
          >
            <TexasRoadhouseMark />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navSections.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  activeSection === item.id
                    ? "bg-[rgba(243,180,27,0.14)] text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                document
                  .getElementById(navSections[3]?.id ?? "protect-the-line-out-the-door")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Recommendation
              <ArrowDownRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button
            aria-label="Toggle navigation"
            className="rounded-full border border-white/10 p-2 text-[var(--foreground)] xl:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-4 top-24 z-40 rounded-[2rem] border border-white/10 bg-[rgba(16,14,12,0.96)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:hidden">
          <div className="grid gap-2">
            {navSections.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavigate}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm",
                  activeSection === item.id
                    ? "bg-white/10 text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
