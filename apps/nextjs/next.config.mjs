// @ts-check
import "./src/env.mjs";
import "@canvydocs/auth/env.mjs";

import { withNextDevtools } from "@next-devtools/core/plugin";
// import "@canvydocs/api/env"
import withMDX from "@next/mdx";

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@canvydocs/api",
    "@canvydocs/auth",
    "@canvydocs/db",
    "@canvydocs/common",
    "@canvydocs/ui",
    "@canvydocs/stripe",
  ],
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
    // serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: "standalone",
};

export default withNextDevtools(withMDX()(config));
