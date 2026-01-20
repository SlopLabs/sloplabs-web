import Link from "next/link";

const projects = [
  {
    name: "SlopOS",
    summary:
      "A complete operating system with a Rust kernel built entirely by AI.",
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
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 animate-[glow_10s_ease-in-out_infinite] rounded-full bg-[#5c3a2d]/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 animate-[drift_14s_ease-in-out_infinite] rounded-full bg-[#1c3f3a]/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 animate-[glow_12s_ease-in-out_infinite] rounded-full bg-[#4d3f12]/50 blur-3xl"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-10 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg font-semibold text-white">
              S
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                SlopLabs
              </p>
              <p className="text-lg font-semibold text-white">
                AI-native systems studio
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm font-semibold text-slate-400">
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#approach">
              Approach
            </a>
            <Link
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20"
              href="https://github.com/SlopLabs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </nav>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-slate-400">
              We build with AI
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Programs and operating systems shaped by generative engineering.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              SlopLabs is a collective shipping tools, kernels, and experiments
              where AI co-authors every layer. We iterate fast, publish often,
              and keep everything open.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200"
                href="#projects"
              >
                Explore projects
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
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.8)] backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
                Lab status
              </p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                New drops weekly
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                ["Primary repo", "1"],
                ["Systems in flight", "1"],
                ["AI copilots", "4"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="text-2xl font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
                Projects
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl">
                A living catalog of AI-built systems.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-slate-400">
              Add a new project by editing the <code>projects</code> array in
              <code>src/app/page.tsx</code>.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg"
              >
                <Link
                  className="absolute inset-0"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} website`}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                        {project.status}
                      </span>
                      <Link
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-white/40 hover:bg-white/15"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} on GitHub`}
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-current"
                        >
                          <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.372 6.839 9.73.5.096.682-.223.682-.495 0-.245-.01-1.05-.014-1.905-2.782.624-3.369-1.224-3.369-1.224-.454-1.183-1.11-1.498-1.11-1.498-.908-.636.068-.623.068-.623 1.003.072 1.531 1.057 1.531 1.057.892 1.568 2.341 1.115 2.91.852.092-.666.35-1.115.636-1.371-2.22-.26-4.555-1.14-4.555-5.072 0-1.12.39-2.037 1.03-2.756-.103-.26-.447-1.309.098-2.73 0 0 .84-.276 2.75 1.052A9.244 9.244 0 0 1 12 7.077c.852.004 1.71.12 2.51.355 1.909-1.328 2.748-1.052 2.748-1.052.546 1.421.202 2.47.1 2.73.64.719 1.029 1.636 1.029 2.756 0 3.94-2.339 4.81-4.566 5.065.359.318.678.942.678 1.9 0 1.372-.012 2.477-.012 2.814 0 .274.18.595.688.494C19.137 20.62 22 16.783 22 12.253 22 6.59 17.523 2 12 2Z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    {project.summary}
                  </p>
                </div>
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.8)] backdrop-blur lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
              Approach
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-white">
              Build fast, publish the trail, invite collaborators.
            </h3>
            <p className="text-slate-300">
              Every project ships with AI notebooks, reproducible prompts, and
              human commentary so new contributors can trace every decision.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-300">
            {[
              {
                title: "AI-first workflow",
                detail:
                  "We pair each system with a prompt log and a verification checklist.",
              },
              {
                title: "Open repositories",
                detail:
                  "Everything lives on GitHub with issues labeled for easy onboarding.",
              },
              {
                title: "Design for change",
                detail:
                  "Modular stacks and contract tests keep the systems flexible.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400">
          <p>SlopLabs builds in the open with AI, always.</p>
          <Link
            className="font-semibold text-slate-200 transition hover:text-white"
            href="https://sloplabs.net"
            target="_blank"
            rel="noreferrer"
          >
            sloplabs.net
          </Link>
        </footer>
      </div>
    </main>
  );
}
