"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { dsaTopics, personal } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TagPill from "./TagPill";

type LeetCodeData = {
  ok: boolean;
  totalSolved?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
  ranking?: number | null;
  rating?: number | null;
  topPercentage?: number | null;
};

type CodeforcesData = {
  ok: boolean;
  rating?: number | null;
  maxRating?: number | null;
  rank?: string | null;
  maxRank?: string | null;
};

function useLiveStat<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        if (json.ok) {
          setData(json);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch(() => !cancelled && setStatus("error"));
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, status };
}

function StatCard({
  label,
  value,
  loading,
}: {
  label: string;
  value: string | number | null | undefined;
  loading: boolean;
}) {
  return (
    <div className="rounded-md border border-border bg-bg-elevated px-4 py-3">
      <div className="text-lg font-bold text-accent">
        {loading ? <span className="text-text-faint text-sm">…</span> : value ?? "—"}
      </div>
      <div className="text-xs text-text-faint mt-1">{label}</div>
    </div>
  );
}

export default function CodingStats() {
  const { data: leetcode, status: leetcodeStatus } = useLiveStat<LeetCodeData>("/api/leetcode");
  const { data: codeforces, status: codeforcesStatus } = useLiveStat<CodeforcesData>(
    "/api/codeforces"
  );

  const lcLoading = leetcodeStatus === "loading";
  const cfLoading = codeforcesStatus === "loading";

  return (
    <section id="dsa" className="px-5 sm:px-8 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          command="./solve --daily"
          title="Problem Solving"
          subtitle="Consistent DSA practice — reasoning about complexity before writing the first line of code."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-border bg-bg-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-text">LeetCode</h3>
                <p className="text-xs text-text-faint">@{personal.leetcodeUsername}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                live
              </span>
            </div>

            {leetcodeStatus === "error" ? (
              <p className="text-sm text-text-faint">Live stats unavailable right now.</p>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <StatCard label="Contest rating" value={leetcode?.rating} loading={lcLoading} />
                <StatCard label="Problems solved" value={leetcode?.totalSolved} loading={lcLoading} />
                <StatCard
                  label="Easy"
                  value={leetcode?.easySolved}
                  loading={lcLoading}
                />
                <StatCard
                  label="Medium / Hard"
                  value={
                    leetcode?.mediumSolved != null && leetcode?.hardSolved != null
                      ? `${leetcode.mediumSolved} / ${leetcode.hardSolved}`
                      : null
                  }
                  loading={lcLoading}
                />
              </div>
            )}

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-accent transition-colors"
            >
              View profile <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-lg border border-border bg-bg-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-text">Codeforces</h3>
                <p className="text-xs text-text-faint">@{personal.codeforcesUsername}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                live
              </span>
            </div>

            {codeforcesStatus === "error" ? (
              <p className="text-sm text-text-faint">Live stats unavailable right now.</p>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <StatCard label="Current rating" value={codeforces?.rating} loading={cfLoading} />
                <StatCard label="Max rating" value={codeforces?.maxRating} loading={cfLoading} />
                <StatCard
                  label="Rank"
                  value={codeforces?.rank ? capitalize(codeforces.rank) : null}
                  loading={cfLoading}
                />
                <StatCard
                  label="Max rank"
                  value={codeforces?.maxRank ? capitalize(codeforces.maxRank) : null}
                  loading={cfLoading}
                />
              </div>
            )}

            <a
              href={personal.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-accent transition-colors"
            >
              View profile <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>

        <div>
          <h3 className="text-sm text-text-faint mb-3 tracking-wide">Topics I work in</h3>
          <div className="flex flex-wrap gap-2">
            {dsaTopics.map((topic) => (
              <TagPill key={topic} label={topic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function capitalize(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
