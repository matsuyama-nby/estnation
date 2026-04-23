import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/photo/page/creative_with_refine",
  trailingSlash: true,
};

export default nextConfig;