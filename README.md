<p align="center">
  <img src="https://github.com/canvydocs/canvydocs/blob/main/apps/nextjs/public/logo.svg" alt="CanvyDocs Logo" width="100" height="100">
</p>

<h1 align="center">CanvyDocs</h1>

<p align="center">
  The Open Source Miro Alternative.
</p>

<p align="center">
  <a href="https://github.com/canvydocs/canvydocs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-AGPL--3.0-blue.svg" alt="CanvyDocs is released under the AGPL-3.0 license." />
  </a>
  <a href="https://github.com/canvydocs/canvydocs/blob/main/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/Jn44PE98">
    <img src="https://img.shields.io/discord/1275590241926774856?color=7289da&label=discord&logo=discord&logoColor=white" alt="Discord Chat" />
  </a>
</p>

<p align="center">
  <a href="https://canvydocs.com">Website</a> •
  <a href="https://github.com/canvydocs/canvydocs/issues">Issues</a> •
  <a href="https://github.com/canvydocs/canvydocs/projects">Roadmap</a>
</p>

## About CanvyDocs

CanvyDocs is an open-source alternative to Miro, providing a powerful platform for planning, tracking, and collaborating on documents using an infinite canvas. Our goal is to offer a feature-rich, customizable solution for teams and individuals who need a flexible workspace for their ideas and projects.

Join us in creating the next generation of open collaboration infrastructure.

## Features

- 🚀 Infinite canvas for unlimited creativity
- 📝 Rich text editing and document collaboration
- 🔗 Real-time collaboration
- 🎨 Customizable templates and shapes
- 📊 Integration with popular tools and services
- 🔒 Self-hosted option for data privacy

## Tech Stack

- 🔷 [TypeScript](https://www.typescriptlang.org/) - Language
- ⚡ [Next.js](https://nextjs.org/) - Framework
- 🗄️ [Prisma](https://www.prisma.io/) - ORM
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - CSS
- 🧱 [shadcn/ui](https://ui.shadcn.com/) - Component Library
- 🔐 [NextAuth.js](https://next-auth.js.org/) - Authentication
- 📧 [react-email](https://react.email/) - Email Templates
- 🔄 [tRPC](https://trpc.io/) - API
- 🖌️ [Excalidraw](https://excalidraw.com/) - Whiteboarding and Diagramming
- 📝 [EditorJS](https://editorjs.io/) - Rich Text Editing
- 💳 [Stripe](https://stripe.com/) - Payments
- 🚀 [Vercel](https://vercel.com/) - Hosting

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (>= 1.1.10)
- [PostgreSQL](https://www.postgresql.org/) (>= 14)
- [Node.js](https://nodejs.org/) (>= 18)

```bash
# Install Bun if needed
curl -fsSL https://bun.sh/install | bash

# Verify
bun --version
```

### 1. Clone and install

```bash
git clone https://github.com/Emilien-Etadam/CanvyDocs.git
cd CanvyDocs
bun install
```

`bun install` runs a `postinstall` script that creates workspace symlinks automatically. If you ever see `Module not found: @canvydocs/*` errors, run `bun install` again or `node scripts/fix-workspace-links.mjs` manually.

### 2. Set up PostgreSQL

```bash
# Create a user and database (adapt to your setup)
sudo -u postgres createuser --superuser YOUR_USER
sudo -u postgres psql -c "ALTER USER YOUR_USER PASSWORD 'YOUR_PASSWORD';"
sudo -u postgres createdb canvydocs -O YOUR_USER
```

### 3. Configure environment variables

Create a `.env.local` file at the project root:

```bash
# Database
POSTGRES_URL='postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/canvydocs'
POSTGRES_DIRECT_URL='postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/canvydocs'

# App
NEXT_PUBLIC_APP_URL='http://localhost:3000'
IS_DEBUG=true

# Auth
NEXTAUTH_SECRET='generate-a-random-secret-here'
NEXTAUTH_URL='http://localhost:3000'

# Stripe (use dummy values for local dev without payments)
STRIPE_API_KEY='sk_test_dummy'
STRIPE_WEBHOOK_SECRET='whsec_dummy'

# Resend (use dummy values for local dev without emails)
RESEND_API_KEY='re_dummy'
RESEND_FROM='noreply@localhost'

# PostHog (optional)
NEXT_PUBLIC_POSTHOG_KEY='phc_dummy'
NEXT_PUBLIC_POSTHOG_HOST='https://app.posthog.com'
```

### 4. Push the database schema

```bash
bun run db:push
```

### 5. Start the development server

```bash
bun run dev:web
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Troubleshooting

**`Module not found: @canvydocs/*`**
Bun may not create workspace symlinks on some platforms (notably WSL2). Run:
```bash
node scripts/fix-workspace-links.mjs
```

**`Invalid environment variables`**
Check that all required variables are set in `.env.local`. The env validation files are:
- `apps/nextjs/src/env.mjs`
- `packages/auth/env.mjs`
- `packages/api/src/env.mjs`
- `packages/common/src/env.mjs`
- `packages/stripe/src/env.mjs`

**`check-dependency-version-consistency` errors**
This check is no longer in `postinstall` by default. You can still run it manually with `bun run check-deps`.

**Tailwind config viewer (optional)**
```bash
bun run tailwind-config-viewer
```
Open [http://localhost:3333](http://localhost:3333).

## Apps and Packages

| Directory | Package | Description |
|---|---|---|
| `apps/nextjs` | `@canvydocs/nextjs` | Main Next.js web application |
| `apps/auth-proxy` | `@canvydocs/auth-proxy` | Authentication proxy service |
| `packages/api` | `@canvydocs/api` | tRPC API routers |
| `packages/auth` | `@canvydocs/auth` | Authentication (NextAuth.js + Kysely) |
| `packages/common` | `@canvydocs/common` | Shared utilities and email templates |
| `packages/db` | `@canvydocs/db` | Database schema (Prisma + Kysely) |
| `packages/stripe` | `@canvydocs/stripe` | Stripe billing integration |
| `packages/ui` | `@canvydocs/ui` | Shared UI components (Radix + shadcn/ui) |
| `tooling/*` | `@canvydocs/*-config` | ESLint, Prettier, Tailwind, TypeScript configs |

## Self Hosting

Self hosting docs coming soon.

## Developer Setup

The project uses [Turborepo](https://turbo.build/repo) to orchestrate the monorepo. Useful commands:

```bash
bun run dev:web    # Start the web app (excludes Stripe listener)
bun run dev        # Start all packages in dev mode
bun run build      # Build all packages
bun run lint       # Lint all packages
bun run typecheck  # Type-check all packages
bun run db:push    # Push Prisma schema to the database
```

## Discord

Join our Discord server to stay up to date with the latest news and updates: [Join Discord](https://discord.gg/canvydocs)
