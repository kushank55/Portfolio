import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 sm:px-8 py-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-faint">
        <span>© {new Date().getFullYear()} {personal.name}</span>
        <span>Built with Next.js, TypeScript &amp; Tailwind CSS.</span>
      </div>
    </footer>
  );
}
