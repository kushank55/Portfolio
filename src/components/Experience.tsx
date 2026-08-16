"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TagPill from "./TagPill";

export default function Experience() {
  return (
    <section id="experience" className="px-5 sm:px-8 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          command="git log --author='kushank' --work"
          title="Experience"
          subtitle="Two software engineering internships, both spent shipping features on systems already carrying real users."
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-bg-card p-6 hover:border-accent-dim transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <div>
                  <h3 className="text-lg font-semibold text-text">
                    {job.role} <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <p className="text-sm text-text-faint mt-1">
                    {job.period} · {job.location}
                    {job.meta ? ` · ${job.meta}` : ""}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm text-text-dim leading-relaxed">
                    <span className="text-accent-2 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <TagPill key={t} label={t} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
