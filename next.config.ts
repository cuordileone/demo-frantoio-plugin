import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Pin the workspace root: this template lives nested inside the
  // web-studio hub repo, which has its own package.json/lockfile.
  // Without this, Turbopack infers the wrong root and warns about
  // multiple lockfiles.
  turbopack: {
    root: path.join(__dirname),
  },

  // Baseline security headers applied to every route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
