# AGENTS.md — sloplabs-web

> Landing page for SlopLabs, built with the T3 Stack (Next.js 15 + TypeScript + Tailwind CSS v4).

## Quick Reference

| Action             | Command                        |
| ------------------ | ------------------------------ |
| Dev server         | `npm run dev` (uses `--turbo`) |
| Build              | `npm run build`                |
| Lint               | `npm run lint`                 |
| Lint + fix         | `npm run lint:fix`             |
| Type-check         | `npm run typecheck`            |
| Lint + types       | `npm run check`                |
| Format check       | `npm run format:check`         |
| Format fix         | `npm run format:write`         |
| Production preview | `npm run preview`              |

No test framework is configured. There are no test commands.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with Turbopack dev
- **Language**: TypeScript 5.8 (strict mode, `noUncheckedIndexedAccess`)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`
- **Fonts**: Space Grotesk (sans), Fraunces (display) — loaded via `next/font/google`
- **Env validation**: `@t3-oss/env-nextjs` + Zod (schema in `src/env.js`)
- **Linter**: ESLint 9 flat config with `typescript-eslint` recommended + type-checked rules
- **Formatter**: Prettier with `prettier-plugin-tailwindcss`
- **Package manager**: npm 11 (lockfile: `bun.lock` also present)
- **Module system**: ESM (`"type": "module"` in package.json)

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata
    page.tsx            # Landing page (single-page site)
  env.js                # T3 env validation schema (Zod)
  styles/
    globals.css         # Tailwind v4 import, @theme, keyframes
public/
  favicon.ico
```

This is a single-page site. All content lives in `src/app/page.tsx`.
Projects are defined as a const array at the top of that file.

## Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).

```typescript
// Use this:
import { env } from "@/env";
import "@/styles/globals.css";

// Not this:
import { env } from "../../env";
```

## TypeScript Rules

- **Strict mode** is on with `noUncheckedIndexedAccess: true`
- **`verbatimModuleSyntax: true`** — use `import type` for type-only imports
- Target: ES2022, module: ESNext, moduleResolution: Bundler
- Never use `as any`, `@ts-ignore`, or `@ts-expect-error`
- Run `npm run typecheck` to verify — must exit 0

## ESLint Rules

Flat config in `eslint.config.js`. Key rules:

| Rule                          | Setting | Notes                                      |
| ----------------------------- | ------- | ------------------------------------------ |
| `consistent-type-imports`     | warn    | Use `import { type Foo }` inline style     |
| `no-unused-vars`              | warn    | Prefix unused args with `_` (e.g., `_req`) |
| `array-type`                  | off     | Either `Foo[]` or `Array<Foo>` is fine     |
| `consistent-type-definitions` | off     | Either `type` or `interface` is fine       |
| `require-await`               | off     | Async without await is allowed             |
| `no-misused-promises`         | error   | Void return in JSX attributes is allowed   |

Type-checked linting is enabled (`recommendedTypeChecked`, `stylisticTypeChecked`).

## Formatting (Prettier)

Default Prettier config with `prettier-plugin-tailwindcss` (auto-sorts Tailwind classes).

No custom formatting options set — uses Prettier defaults:

- Double quotes for JSX, double quotes for JS/TS
- Semicolons
- 2-space indent (Prettier default)
- Trailing commas
- 80 char print width

Run `npm run format:write` to auto-format.

## Tailwind CSS v4

Uses the new v4 `@import "tailwindcss"` syntax in `globals.css` (not the v3 `@tailwind` directives).

Custom theme tokens defined via `@theme` block:

- `--font-sans` — Space Grotesk
- `--font-display` — Fraunces

Custom keyframes: `drift`, `glow` (used for background animations).

PostCSS config: `@tailwindcss/postcss` plugin.

## Code Style Patterns

### Imports

```typescript
// 1. External packages first
import Link from "next/link";
import { type Metadata } from "next";

// 2. Internal aliases
import "@/styles/globals.css";
import { env } from "@/env";
```

- Use `import { type X }` for type-only imports (inline style, not separate `import type`)
- Use `@/*` path alias for all internal imports

### Components

- Use `export default function ComponentName()` for page/layout components
- Props typed inline: `{ children }: Readonly<{ children: React.ReactNode }>`
- No separate props interfaces for simple components
- JSX uses Tailwind utility classes directly (no CSS modules, no styled-components)

### Naming

- Files: kebab-case is not enforced; Next.js conventions apply (`page.tsx`, `layout.tsx`)
- Components: PascalCase (`HomePage`, `RootLayout`)
- Variables/functions: camelCase
- Constants: camelCase (e.g., `const projects = [...]`)
- CSS variables: kebab-case with `--` prefix

### Environment Variables

- Schema defined in `src/env.js` using `@t3-oss/env-nextjs` + Zod
- Server vars: plain names (e.g., `NODE_ENV`)
- Client vars: must be prefixed with `NEXT_PUBLIC_`
- Access via `import { env } from "@/env"` — never use `process.env` directly
- Skip validation with `SKIP_ENV_VALIDATION=1` (useful for Docker builds)
- Update `.env.example` when adding new variables

### Error Handling

- No explicit error handling patterns established yet (small project)
- Follow Next.js conventions: use `error.tsx` for error boundaries when needed

## Pre-commit Checklist

Before committing, ensure:

1. `npm run check` passes (lint + typecheck)
2. `npm run format:check` passes (or run `format:write`)
3. `npm run build` succeeds
4. No `as any`, `@ts-ignore`, or `@ts-expect-error` in code
5. New env vars added to both `src/env.js` schema and `.env.example`
