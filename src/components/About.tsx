"use client";

import { motion } from "framer-motion";
import { aboutBlurb, aboutCards } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-8 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" command="cat about.md" title="About" />

        <p className="text-text-dim leading-relaxed max-w-3xl mb-10">{aboutBlurb}</p>

        <div className="grid sm:grid-cols-2 gap-5">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-bg-card p-5 hover:border-accent-dim transition-colors"
            >
              <h3 className="text-accent font-semibold mb-2">### {card.title}</h3>
              <p className="text-text-dim text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
