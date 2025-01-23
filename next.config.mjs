
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

