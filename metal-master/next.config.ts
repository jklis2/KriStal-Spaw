import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: "export",
  basePath: '/metalMaster',
  images: {
    domains: ["picsum.photos"], // Dodanie obsługi obrazów z picsum.photos
  },
};

export default nextConfig;
