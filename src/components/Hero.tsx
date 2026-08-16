"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { heroFacts, personal, stats } from "@/lib/data";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 sm:pt-24 pb-16 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-accent-2 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
          {personal.location.includes("India") ? "Available for opportunities" : ""}
          {personal.location.includes("India") ? " · " : ""}
          2027 grad
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-accent text-sm mb-3"
            >
              $ <Typewriter text="whoami" className="text-accent-2" /></motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-text leading-[1.05]"
            >
              Kushank Garg
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-5 text-base sm:text-lg text-text-dim max-w-xl leading-relaxed"
            >
              Final-year CSE undergrad at LNMIIT Jaipur. I build production web apps and
              AI-assisted features — audit workspaces, OCR pipelines, real-time voice
              interviews — end to end with React, Next.js, Node.js, and AWS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-bg hover:bg-accent/90 transition-colors"
              >
                View work
                <ArrowRight size={16} />
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-text hover:border-accent hover:text-accent transition-colors"
              >
                Résumé
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-text hover:border-accent hover:text-accent transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center gap-1.5 text-sm text-text-faint"
            >
              <MapPin size={14} />
              {personal.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-bg-card px-4 py-3">
                  <div className="text-xl sm:text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-text-faint mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-border bg-bg-card overflow-hidden shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-bg-elevated">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-text-faint">kushank@portfolio: ~</span>
            </div>
            <div className="p-5 sm:p-6 font-mono text-sm space-y-3">
              <div>
                <span className="text-accent">➜</span> <span className="text-accent-2">whoami</span>
              </div>
              {heroFacts.map((fact) => (
                <div key={fact.label} className="flex gap-3">
                  <span className="text-text-faint w-24 shrink-0">{fact.label}</span>
                  <span className="text-text">{fact.value}</span>
                </div>
              ))}
              <div className="pt-2">
                <span className="text-accent">➜</span> <span className="text-accent-2">cat now.txt</span>
              </div>
              <p className="text-text-dim leading-relaxed">
                Interning at Kritu Capitals, shipping features on a live multi-region audit
                platform.
              </p>
              <div className="pt-1 flex items-center gap-1.5">
                <span className="text-accent">➜</span>
                <span className="h-4 w-2 bg-accent caret-blink" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
