import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true, // يقلل CSS غير المستخدم تلقائياً
  },
}
export default nextConfig;
