"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { navSections } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SectionTracker() {
  const [activeSection, setActiveSection] = useState(
    navSections[0]?.id ?? "the-house-value-built"
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setProgress(value);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

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
        { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 }
      );
      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const activeIndex = useMemo(
    () => navSections.findIndex((section) => section.id === activeSection),
    [activeSection]
  );

  return (
    <aside className="sticky top-28 hidden self-start xl:block">
      <div className="w-56 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
            Reading progress
          </p>
          <span className="text-sm text-[var(--foreground)]">{Math.round(progress)}%</span>
        </div>
        <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-strong))]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="space-y-1">
          {navSections.map((section, index) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "flex items-start gap-3 rounded-2xl px-3 py-3 transition",
                activeSection === section.id
                  ? "bg-[rgba(255,255,255,0.08)]"
                  : "hover:bg-[rgba(255,255,255,0.05)]"
              )}
            >
              <span
                className={cn(
                  "mt-1 h-2.5 w-2.5 rounded-full border border-[rgba(255,255,255,0.2)]",
                  activeSection === section.id
                    ? "bg-[var(--accent)]"
                    : index < activeIndex
                      ? "bg-[var(--foreground)]"
                      : "bg-transparent"
                )}
              />
              <span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                  {section.eyebrow}
                </span>
                <span className="text-sm text-[var(--foreground)]">{section.label}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
