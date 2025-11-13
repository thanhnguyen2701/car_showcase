import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.imagin.studio',
      port: '', // để trống nếu không dùng port
      pathname: '/**', // cho phép tất cả đường dẫn con
    },
  ],
},
};

export default nextConfig;
