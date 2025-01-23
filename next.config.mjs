// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'i.ibb.co', // Replace with your domain(s)
//                 pathname: '/**', // Match all paths
//             },
//         ],
//     },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Add this to enable static export
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Adjust to your image host if needed
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

