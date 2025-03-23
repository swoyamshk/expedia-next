/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Pages Router takes precedence for specific routes
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/index", // Maps to pages/index.js
      },
    ];
  },
};

export default nextConfig;
