/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/_next/:path*',
            destination: 'https://joogps.com/_next/:path*'
          }
        ];
      }
};

export default nextConfig;
