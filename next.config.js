/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/post-question',
          destination: `http://localhost:4000/post-question`,
        },
        {
          source: '/post-answer',
          destination: `http://localhost:4000/post-answer`,
        },
        {
          source: '/qas',
          destination: `http://localhost:4000/qas`,
        },
        {
          source: '/external-opps-api',
          destination: `http://localhost:4000/external-opps-api`,
        },
        {
          source: '/get-similar-questions',
          destination: 'http://localhost:4000/get-similar-questions',
        },
      ],
    };
  },
};

module.exports = nextConfig;
