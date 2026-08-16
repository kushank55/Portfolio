"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#dsa", label: "DSA" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-bg/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#top" className="text-sm sm:text-base text-accent font-semibold tracking-tight">
          ~/{personal.handle}
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-text-dim">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-border rounded-md px-3 py-1.5 text-text hover:border-accent hover:text-accent transition-colors"
          >
            Résumé
          </a>
        </div>

        <button
          className="md:hidden text-text-dim hover:text-accent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg px-5 py-4 flex flex-col gap-4 text-sm text-text-dim">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
            onClick={() => setOpen(false)}
          >
            Résumé →
          </a>
        </div>
      )}
    </header>
  );
}
