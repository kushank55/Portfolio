export default function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-bg-elevated px-2.5 py-1 text-xs text-text-dim hover:border-accent-dim hover:text-accent transition-colors">
      {label}
    </span>
  );
}
