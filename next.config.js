/** @type {import('next').NextConfig} */
/*const nextConfig = {};

export default nextConfig;
*/

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
        ],
      },
}

module.exports = nextConfig