import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GithubLogo,
} from "@phosphor-icons/react/ssr";

import { HeroItem, HeroStagger, Reveal } from "@/components/reveal";
import { SlopOsMark } from "@/components/wordmark";

const org = "https://github.com/SlopLabs";
const sloposRepo = "https://github.com/SlopLabs/slopos";
const sloposDocs = "https://slopos.sloplabs.net";
const slopccRepo = "https://github.com/SlopLabs/slopcc";

const method = [
  {
    key: "A human decides",
    body: "A person picks the problem, argues about the architecture, and rejects the approach when it is wrong. Nobody here hand-writes the implementation.",
  },
  {
    key: "The build checks the claim",
    body: "An agent will tell you the code is correct. That claim is worth nothing on its own, so each project carries gates that test the assertion instead of the intent.",
  },
  {
    key: "The repos stay public",
    body: "Every repository is public from the first commit, including the parts that do not work yet, and each one documents the edges you will hit.",
  },
];

const priorArt = [
  { name: "Asterinas", href: "https://github.com/asterinas/asterinas" },
  { name: "Linux", href: "https://kernel.org" },
  { name: "Redox", href: "https://www.redox-os.org" },
  { name: "seL4", href: "https://sel4.systems" },
  { name: "Verus", href: "https://github.com/verus-lang/verus" },
];

export default function HomePage() {
  return (
    <div className="bg-canvas text-ink">
      <header className="border-line-faint bg-canvas/85 sticky top-0 z-40 h-16 border-b backdrop-blur-md">
        <nav className="mx-auto flex h-full max-w-[1180px] items-center gap-6 px-5 sm:px-8">
          <Link
            href="/"
            className="text-ink font-mono text-[15px] font-semibold tracking-tight"
          >
            SlopLabs
          </Link>

          <div className="ml-auto hidden items-center gap-1 md:flex">
            <a
              href="#projects"
              className="text-ink-dim hover:text-ink hover:bg-surface-2 rounded-panel px-3 py-1.5 font-mono text-[13px] transition-colors"
            >
              Projects
            </a>
            <a
              href="#method"
              className="text-ink-dim hover:text-ink hover:bg-surface-2 rounded-panel px-3 py-1.5 font-mono text-[13px] transition-colors"
            >
              Method
            </a>
          </div>

          <a
            href={org}
            target="_blank"
            rel="noreferrer"
            className="border-line-strong text-ink hover:border-ink-faint hover:bg-surface-2 rounded-panel ml-auto inline-flex h-9 items-center gap-2 border px-3.5 font-mono text-[13px] transition-colors active:translate-y-px md:ml-0"
          >
            <GithubLogo size={15} weight="fill" />
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-[1180px] px-5 pt-16 pb-20 sm:px-8 md:pt-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
            <HeroStagger>
              <HeroItem>
                <h1 className="max-w-[21ch] text-[clamp(2.1rem,4.4vw,3.15rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-balance">
                  We hand hard systems problems to AI agents.
                </h1>
              </HeroItem>

              <HeroItem>
                <p className="text-ink-dim mt-6 max-w-[46ch] text-[17px] leading-relaxed">
                  Then we build the gates that check what comes back. So far
                  that has produced an operating system that boots.
                </p>
              </HeroItem>

              <HeroItem>
                <div className="mt-9 flex flex-wrap gap-2.5">
                  <a
                    href="#projects"
                    className="bg-slop text-canvas hover:bg-slop-bright rounded-panel inline-flex h-11 items-center gap-2 px-5 font-mono text-[13.5px] font-medium whitespace-nowrap transition-colors active:translate-y-px"
                  >
                    See the projects
                    <ArrowRight size={15} weight="bold" />
                  </a>
                  <a
                    href={org}
                    target="_blank"
                    rel="noreferrer"
                    className="border-line-strong text-ink hover:border-ink-faint hover:bg-surface-2 rounded-panel inline-flex h-11 items-center gap-2 border px-5 font-mono text-[13.5px] font-medium whitespace-nowrap transition-colors active:translate-y-px"
                  >
                    <GithubLogo size={15} weight="fill" />
                    GitHub
                  </a>
                </div>
              </HeroItem>
            </HeroStagger>

            <div>
              <div className="border-line rounded-panel overflow-hidden border shadow-[0_28px_70px_-32px_rgba(0,0,0,0.9)]">
                <Image
                  src="/images/slopos-laptop.jpg"
                  alt="SlopOS running on a Lenovo laptop, with its terminal, file manager, system monitor and image viewer open on the desktop"
                  width={1600}
                  height={1200}
                  priority
                  sizes="(max-width: 1023px) 100vw, 56vw"
                  className="block h-auto w-full"
                />
              </div>
              <p className="text-ink-faint mt-3 font-mono text-xs leading-relaxed">
                SlopOS on a real laptop, drawn by a display driver the agents
                wrote.
              </p>
            </div>
          </div>
        </section>

        <section
          id="method"
          className="border-line-faint scroll-mt-20 border-t"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 md:py-32">
            <Reveal>
              <h2 className="max-w-[22ch] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance">
                We do not trust the output either.
              </h2>
              <p className="text-ink-dim mt-5 max-w-[60ch] text-[16.5px] leading-relaxed">
                Letting a model write a kernel is the easy part. The work is
                deciding what to point it at, and proving afterwards that the
                result holds.
              </p>
            </Reveal>

            <div className="divide-line-faint mt-12 divide-y">
              {method.map((m, i) => (
                <Reveal key={m.key} delay={i * 0.06}>
                  <div className="grid gap-3 py-7 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10">
                    <h3 className="text-slop text-[16px] font-medium tracking-tight">
                      {m.key}
                    </h3>
                    <p className="text-ink-dim max-w-[64ch] text-[16px] leading-relaxed">
                      {m.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-line-faint scroll-mt-20 border-t"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 md:py-32">
            <Reveal>
              <h2 className="text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.08] font-semibold tracking-[-0.03em]">
                Two repositories
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <article className="border-line rounded-panel mt-10 grid gap-8 border p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
                <div>
                  <div className="flex items-center gap-3">
                    <SlopOsMark className="h-7 w-auto" />
                    <span className="text-ink-faint font-mono text-[11.5px]">
                      boots on real hardware
                    </span>
                  </div>

                  <h3 className="mt-5 text-[clamp(1.4rem,2.4vw,1.85rem)] leading-[1.1] font-semibold tracking-[-0.025em] text-balance">
                    An x86_64 operating system, from the bootloader up.
                  </h3>

                  <p className="text-ink-dim mt-4 max-w-[52ch] text-[16px] leading-relaxed">
                    A framekernel in Rust with its own TCP stack, ACPI
                    interpreter, display driver and compositor. One crate holds
                    every line of{" "}
                    <code className="text-slop font-mono text-[0.9em]">
                      unsafe
                    </code>
                    , and Verus proves the invariants underneath it. The docs
                    site explains how those gates work and what still breaks.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    <a
                      href={sloposDocs}
                      className="bg-slop text-canvas hover:bg-slop-bright rounded-panel inline-flex h-11 items-center gap-2 px-5 font-mono text-[13.5px] font-medium whitespace-nowrap transition-colors active:translate-y-px"
                    >
                      Read the docs
                      <ArrowRight size={15} weight="bold" />
                    </a>
                    <a
                      href={sloposRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="border-line-strong text-ink hover:border-ink-faint hover:bg-surface-2 rounded-panel inline-flex h-11 items-center gap-2 border px-5 font-mono text-[13.5px] font-medium whitespace-nowrap transition-colors active:translate-y-px"
                    >
                      <GithubLogo size={15} weight="fill" />
                      Source
                    </a>
                  </div>
                </div>

                <div className="border-line rounded-panel overflow-hidden border">
                  <Image
                    src="/images/slopos-terminal.jpg"
                    alt="The SlopOS terminal after boot, showing an ASCII banner, the build string v0.2-slop on x86_64, and a win-loss balance of 2260"
                    width={900}
                    height={639}
                    sizes="(max-width: 1023px) 100vw, 52vw"
                    className="block h-auto w-full"
                  />
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={slopccRepo}
                target="_blank"
                rel="noreferrer"
                className="border-line hover:border-slop-line hover:bg-slop-wash group rounded-panel mt-4 grid gap-6 border p-6 transition-colors sm:p-9 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] md:items-center md:gap-10"
              >
                <div>
                  <h3 className="font-mono text-[19px] font-semibold tracking-tight">
                    slopcc
                  </h3>
                  <p className="text-ink-faint mt-2 font-mono text-[11.5px]">
                    scaffolding, lexer next
                  </p>
                </div>

                <p className="text-ink-dim text-[15.5px] leading-relaxed">
                  A C11 compiler in Rust: full preprocessor, GCC-compatible CLI,
                  LLVM IR out the back via inkwell. The goal is compiling the
                  Linux kernel, and eventually running the compiler on SlopOS
                  itself.
                </p>

                <ArrowUpRight
                  size={20}
                  className="text-ink-faint group-hover:text-slop transition-colors"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="border-line-faint border-t">
          <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 md:py-32">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
              <Reveal>
                <h2 className="max-w-[20ch] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance">
                  The agents invented none of this.
                </h2>
              </Reveal>

              <Reveal delay={0.06}>
                <p className="text-ink-dim max-w-[58ch] text-[16.5px] leading-relaxed">
                  Nobody thinks up demand paging on a beach. Paging, preemption,
                  wake races, TCP over a hostile network: all of it was solved
                  decades ago by people who wrote it down and gave it away. The
                  models learned kernels by reading their work, so the source
                  credits them at length.
                </p>

                <p className="text-ink-dim mt-4 max-w-[58ch] text-[16.5px] leading-relaxed">
                  We studied and reimplemented. We did not copy. The ideas are
                  theirs; only the slop is ours.
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {priorArt.map((p) => (
                    <li key={p.name}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="border-line text-ink-dim hover:border-slop-line hover:text-slop rounded-panel inline-flex h-9 items-center border px-3.5 font-mono text-[13px] transition-colors"
                      >
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 pb-24 sm:px-8 md:pb-32">
          <Reveal>
            <div className="border-line bg-surface rounded-panel border px-6 py-14 text-center sm:px-10 md:py-16">
              <h2 className="mx-auto max-w-[20ch] text-[clamp(1.6rem,3.2vw,2.35rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
                The name is a warning.
              </h2>
              <p className="text-ink-dim mx-auto mt-5 max-w-[54ch] text-[16px] leading-relaxed">
                This is a hobby, not a company. Nothing here is production
                software, and the repositories say so in more detail than a
                landing page can.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-2.5">
                <a
                  href={org}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slop text-canvas hover:bg-slop-bright rounded-panel inline-flex h-11 items-center gap-2 px-5 font-mono text-[13.5px] font-medium whitespace-nowrap transition-colors active:translate-y-px"
                >
                  <GithubLogo size={15} weight="fill" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-line-faint border-t">
        <div className="mx-auto max-w-[1180px] px-5 pt-14 pb-10 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))] md:gap-8">
            <div>
              <p className="font-mono text-[15px] font-semibold tracking-tight">
                SlopLabs
              </p>
              <p className="text-ink-faint mt-4 max-w-[36ch] text-[14px] leading-relaxed">
                Three kernel wizards shipwrecked on the island of Sloptopia,
                armed with Rust, mass token consumption, and zero fear of{" "}
                <code className="font-mono text-[0.9em]">unsafe</code>.
              </p>
            </div>

            <div>
              <h2 className="text-ink-faint mb-3 font-mono text-[11px] tracking-[0.12em] uppercase">
                SlopOS
              </h2>
              <a
                href={sloposDocs}
                className="text-ink-dim hover:text-slop block py-1.5 text-[14px] transition-colors"
              >
                Documentation
              </a>
              <a
                href={sloposRepo}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dim hover:text-slop block py-1.5 text-[14px] transition-colors"
              >
                Source
              </a>
            </div>

            <div>
              <h2 className="text-ink-faint mb-3 font-mono text-[11px] tracking-[0.12em] uppercase">
                Lab
              </h2>
              <a
                href={org}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dim hover:text-slop block py-1.5 text-[14px] transition-colors"
              >
                All repositories
              </a>
              <a
                href={slopccRepo}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dim hover:text-slop block py-1.5 text-[14px] transition-colors"
              >
                slopcc
              </a>
            </div>
          </div>

          <div className="border-line-faint text-ink-faint mt-12 flex flex-wrap justify-between gap-3 border-t pt-6 font-mono text-[12px]">
            <p>&copy; {new Date().getFullYear()} SlopLabs</p>
            <p>SlopOS is GPL-3.0-only. slopcc is Apache-2.0.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
