"use client";

import { motion } from "framer-motion";
import { achievements, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="px-5 sm:px-8 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="06"
          command="cat education.json && cat achievements.json"
          title="Education & Achievements"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm text-text-faint mb-3 tracking-wide">Education</h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-lg border border-border bg-bg-card p-5"
                >
                  <h4 className="font-semibold text-text">{edu.school}</h4>
                  <p className="text-sm text-text-faint mt-1">{edu.period}</p>
                  <p className="text-sm text-text-dim mt-2">{edu.degree}</p>
                  <p className="text-xs text-text-faint mt-2">{edu.location}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-text-faint mb-3 tracking-wide">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-lg border border-border bg-bg-card p-5"
                >
                  <h4 className="font-semibold text-accent">{item.title}</h4>
                  <p className="text-sm text-text-dim mt-2 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
