"use client";

import { motion } from "framer-motion";
import { Code2, Download, Mail, Phone } from "lucide-react";
import { personal } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "GitHub", value: "github.com/kushank55", href: personal.github, icon: GithubIcon },
  { label: "LinkedIn", value: "linkedin.com/in/kushank123", href: personal.linkedin, icon: LinkedinIcon },
  { label: "LeetCode", value: "leetcode.com/u/kushank55", href: personal.leetcode, icon: Code2 },
  { label: "Codeforces", value: "codeforces.com/profile/kushank55", href: personal.codeforces, icon: Code2 },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-8 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="07" command="./contact --kushank" title="Let's build something" />

        <p className="text-text-dim max-w-2xl leading-relaxed mb-10">
          I&apos;m open to software engineering and full-stack / AI engineering roles, and always
          up for a conversation about production systems, DSA, or a hard bug you&apos;re stuck on.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-bg-card p-4 hover:border-accent hover:bg-bg-elevated transition-colors group"
            >
              <link.icon size={18} className="text-accent shrink-0" />
              <div className="overflow-hidden">
                <div className="text-xs text-text-faint">{link.label}</div>
                <div className="text-sm text-text truncate group-hover:text-accent transition-colors">
                  {link.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg hover:bg-accent/90 transition-colors"
        >
          <Download size={16} />
          Download résumé
        </a>
      </div>
    </section>
  );
}
