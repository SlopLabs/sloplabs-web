import { SlopLabsStacked } from "@/components/wordmark";

const links = [
  { label: "SlopOS", href: "https://slopos.sloplabs.net" },
  { label: "GitHub", href: "https://github.com/SlopLabs" },
];

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col px-6">
      <main className="flex flex-1 items-center justify-center">
        <div className="animate-rise flex max-w-[32rem] flex-col items-center text-center">
          <SlopLabsStacked className="h-[5.5rem] w-auto sm:h-24" />

          <p className="text-ink-dim mt-12 text-[15.5px] leading-[1.7] text-balance">
            Vibe coding hard things, for fun. Some of it works. Mostly SlopOS,
            an operating system that boots on real hardware.
          </p>

          <nav className="mt-12 flex items-center gap-7 font-mono text-[13px]">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-ink-faint hover:text-slop transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </main>

      <footer className="text-ink-faint pb-10 text-center font-mono text-[11px] tracking-[0.08em]">
        &copy; {new Date().getFullYear()} SlopLabs
      </footer>
    </div>
  );
}
