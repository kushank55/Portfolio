"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TagPill from "./TagPill";

type Language = { name: string; percentage: number };

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#4ade80",
  JavaScript: "#f5b942",
  Python: "#38bdf8",
  "C++": "#f87171",
  C: "#a78bfa",
  HTML: "#fb923c",
  CSS: "#c084fc",
  Java: "#f472b6",
};

function colorFor(name: string, index: number) {
  if (LANG_COLORS[name]) return LANG_COLORS[name];
  const fallback = ["#4ade80", "#f5b942", "#38bdf8", "#f87171", "#a78bfa", "#fb923c"];
  return fallback[index % fallback.length];
}

export default function Skills() {
  const [languages, setLanguages] = useState<Language[] | null>(null);
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github-languages")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.ok) {
          setLanguages(data.languages);
          setRepoCount(data.repoCount);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch(() => !cancelled && setStatus("error"));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="skills" className="px-5 sm:px-8 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="04" command="cat package.json | jq .skills" title="Technical Skills" />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <h3 className="text-sm text-text-faint mb-3 tracking-wide">
                <span className="text-accent-2">0{i + 1}</span> {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TagPill key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-bg-card p-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h3 className="text-sm text-text-faint tracking-wide">
              Languages across my repositories
              {repoCount != null && (
                <span className="text-text-faint/70"> · {repoCount} repos</span>
              )}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              live
            </span>
          </div>

          {status === "loading" && (
            <p className="text-sm text-text-faint">Fetching live language stats from GitHub…</p>
          )}
          {status === "error" && (
            <p className="text-sm text-text-faint">
              Couldn&apos;t reach GitHub right now — check back in a bit.
            </p>
          )}

          {status === "ready" && languages && languages.length > 0 && (
            <div className="space-y-3">
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-bg-elevated">
                {languages.map((lang, i) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: colorFor(lang.name, i) }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {languages.map((lang, i) => (
                  <div key={lang.name} className="flex items-center gap-2 text-text-dim">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: colorFor(lang.name, i) }}
                    />
                    {lang.name}
                    <span className="text-text-faint">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
