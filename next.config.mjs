/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Match all paths under this hostname
      },
    ],
  },
};

export default nextConfig;

// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'res.cloudinary.com',
//           pathname: '/**', // Match all paths under this hostname
//         },
//       ],
//     },
//   };
