/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gamespot.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.insider.com", // Add this for i.insider.com
        pathname: "/**", // Match all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
