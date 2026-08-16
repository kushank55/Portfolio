"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { personal, projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TagPill from "./TagPill";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="px-5 sm:px-8 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          command="ls -la ~/projects"
          title="Projects"
          subtitle="Things I built end to end — architecture, implementation, and the unglamorous parts that make them actually work."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-lg border border-border bg-bg-card p-6 hover:border-accent-dim transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs text-accent-2 tracking-wide">{project.category}</span>
                <span className="text-xs text-text-faint">{project.year}</span>
              </div>

              <h3 className="text-lg font-bold text-text">{project.name}</h3>
              <p className="text-sm text-accent mt-0.5">{project.tagline}</p>
              <p className="text-sm text-text-dim mt-3 leading-relaxed">{project.description}</p>

              <ul className="mt-4 space-y-2 flex-1">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm text-text-dim leading-relaxed">
                    <span className="text-accent-2 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <TagPill key={t} label={t} />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-text-dim hover:text-accent transition-colors"
                >
                  <GithubIcon size={16} />
                  Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-dim hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={`${personal.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-dim hover:text-accent transition-colors underline decoration-border decoration-dashed"
          >
            See every repository on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
