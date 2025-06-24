import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  ignoreDuringBuilds: true,

  //   output: "export",
  //   output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*", //클라이언트에서 요청하는 경로
        destination: "http://localhost:3001/api/:path*",
      },
    ];
  },
};

export default nextConfig;
