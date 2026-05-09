/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    return {
      fallback: [
        { source: '/post-question', destination: `${apiBase}/post-question` },
        { source: '/post-answer', destination: `${apiBase}/post-answer` },
        {
          source: '/update-question-answered/:id',
          destination: `${apiBase}/update-question-answered/:id`,
        },
        { source: '/qas', destination: `${apiBase}/qas` },
        {
          source: '/external-opps-api',
          destination: `${apiBase}/external-opps-api`,
        },
        {
          source: '/get-similar-questions',
          destination: `${apiBase}/get-similar-questions`,
        },
        {
          source: '/check-duplicate-answer',
          destination: `${apiBase}/check-duplicate-answer`,
        },
        {
          source: '/check-toxicity',
          destination: `${apiBase}/check-toxicity`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
