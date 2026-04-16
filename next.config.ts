import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  // basePath: "/photo/page/2026_intellectual-journey",
  trailingSlash: true,
};

export default nextConfig;