const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true, // Remova se não estiver usando a pasta "app"
  },
};

export default nextConfig;