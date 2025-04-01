import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Enables proper SSR for styled-components
  },
  reactStrictMode: true,
};

export default nextConfig;
