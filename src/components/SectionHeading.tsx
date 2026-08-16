type SectionHeadingProps = {
  command: string;
  title: string;
  index?: string;
  subtitle?: string;
};

export default function SectionHeading({ command, title, index, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {index && (
        <div className="text-accent-2/80 text-xs tracking-widest mb-2">{index}</div>
      )}
      <div className="flex items-center gap-2 text-text-dim text-sm mb-3">
        <span className="text-accent">$</span>
        <span>{command}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-text-dim max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}
