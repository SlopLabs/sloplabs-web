import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "SlopOS",
    logo: "/slopos-logo.png",
    summary:
      "A complete operating system with a Rust kernel built entirely by AI. From bootloader to userspace, every line of code was generated and validated through AI-driven development.",
    href: "https://slopos.sloplabs.net",
    github: "https://github.com/SlopLabs/slopos",
    status: "Active",
    tags: ["OS", "Kernel", "Rust", "AI-built"],
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1c2140,_#0f1326_45%,_#090b16_100%)] text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-24 h-72 w-72 animate-[glow_10s_ease-in-out_infinite] rounded-full bg-[#5c3a2d]/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-32 h-96 w-96 animate-[drift_14s_ease-in-out_infinite] rounded-full bg-[#1c3f3a]/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 animate-[glow_12s_ease-in-out_infinite] rounded-full bg-[#4d3f12]/50 blur-3xl"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pt-10 pb-20 sm:px-10">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-6">
          <p className="text-lg font-semibold tracking-wide text-white">
            SlopLabs
          </p>
          <Link
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20"
            href="https://github.com/SlopLabs"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center gap-8 text-center">
          <p className="text-sm font-semibold tracking-[0.5em] text-slate-400 uppercase">
            We build with AI
          </p>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Seeing how far AI can take real software.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            SlopLabs is a hobby collective experimenting with AI-built systems —
            from operating system kernels to developer tools. We build things,
            put them out there, and see where it goes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200"
              href="#projects"
            >
              What we&apos;re working on
            </a>
            <Link
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
              href="https://github.com/SlopLabs"
              target="_blank"
              rel="noreferrer"
            >
              Follow on GitHub
            </Link>
          </div>
        </section>

        {/* Featured Project */}
        <section id="projects" className="flex flex-col gap-10">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.4em] text-slate-400 uppercase">
              Current Project
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl">
              The thing we&apos;re poking at right now.
            </h2>
          </div>

          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.8)] backdrop-blur"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-1 flex-col gap-5 p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl">
                      {project.name}
                    </h3>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      {project.status}
                    </span>
                  </div>
                  <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Link
                      className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Visit project</span>
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </Link>
                    <Link
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                      >
                        <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.372 6.839 9.73.5.096.682-.223.682-.495 0-.245-.01-1.05-.014-1.905-2.782.624-3.369-1.224-3.369-1.224-.454-1.183-1.11-1.498-1.11-1.498-.908-.636.068-.623.068-.623 1.003.072 1.531 1.057 1.531 1.057.892 1.568 2.341 1.115 2.91.852.092-.666.35-1.115.636-1.371-2.22-.26-4.555-1.14-4.555-5.072 0-1.12.39-2.037 1.03-2.756-.103-.26-.447-1.309.098-2.73 0 0 .84-.276 2.75 1.052A9.244 9.244 0 0 1 12 7.077c.852.004 1.71.12 2.51.355 1.909-1.328 2.748-1.052 2.748-1.052.546 1.421.202 2.47.1 2.73.64.719 1.029 1.636 1.029 2.756 0 3.94-2.339 4.81-4.566 5.065.359.318.678.942.678 1.9 0 1.372-.012 2.477-.012 2.814 0 .274.18.595.688.494C19.137 20.62 22 16.783 22 12.253 22 6.59 17.523 2 12 2Z" />
                      </svg>
                      <span>View source</span>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-white/5 p-8 lg:w-80 lg:p-10">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={384}
                    height={256}
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Approach */}
        <section
          id="approach"
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.8)] backdrop-blur sm:p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold tracking-[0.4em] text-slate-400 uppercase">
              How we work
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-white">
              Let AI do the heavy lifting, see what happens.
            </h3>
            <p className="text-slate-300">
              This is a hobby — we&apos;re curious how far AI can go when you
              point it at hard problems and get out of the way. Everything we
              make ends up on GitHub.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-300">
            {[
              {
                title: "AI writes the code",
                detail:
                  "We give direction, AI does the implementation. We review, poke at it, and iterate.",
              },
              {
                title: "Everything on GitHub",
                detail:
                  "All code is public. If something interests you, fork it, open an issue, or just poke around.",
              },
              {
                title: "No grand plan",
                detail:
                  "We pick problems that seem fun, start building, and figure it out as we go.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1.5 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} SlopLabs</p>
          <Link
            className="inline-flex items-center gap-2 font-semibold text-slate-200 transition hover:text-white"
            href="https://github.com/SlopLabs"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.372 6.839 9.73.5.096.682-.223.682-.495 0-.245-.01-1.05-.014-1.905-2.782.624-3.369-1.224-3.369-1.224-.454-1.183-1.11-1.498-1.11-1.498-.908-.636.068-.623.068-.623 1.003.072 1.531 1.057 1.531 1.057.892 1.568 2.341 1.115 2.91.852.092-.666.35-1.115.636-1.371-2.22-.26-4.555-1.14-4.555-5.072 0-1.12.39-2.037 1.03-2.756-.103-.26-.447-1.309.098-2.73 0 0 .84-.276 2.75 1.052A9.244 9.244 0 0 1 12 7.077c.852.004 1.71.12 2.51.355 1.909-1.328 2.748-1.052 2.748-1.052.546 1.421.202 2.47.1 2.73.64.719 1.029 1.636 1.029 2.756 0 3.94-2.339 4.81-4.566 5.065.359.318.678.942.678 1.9 0 1.372-.012 2.477-.012 2.814 0 .274.18.595.688.494C19.137 20.62 22 16.783 22 12.253 22 6.59 17.523 2 12 2Z" />
            </svg>
            <span>SlopLabs on GitHub</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}
