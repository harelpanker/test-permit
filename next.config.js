/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.graphcms.com',
        pathname: '**',
      },
    ],
  },
  experimental: { appDir: true },
  async redirects() {
    return [
      {
        source: '/company',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/oparebac',
        destination:
          '/blog/relationship-based-access-control-rebac-with-open-policy-agent-opa',
        permanent: true,
      },
      {
        source: '/blog/google-drive-authurization-how-to',
        destination: '/blog/build-authorization-like-google',
        permanent: true,
      },
      {
        source: '/blog/what-is-abac',
        destination: '/blog/what-is-attribute-based-access-control',
        permanent: true,
      },
      {
        source: '/blog/how-reddit-built-authorization-with-opa',
        destination:
          '/blog/how-reddit-scaled-to-millions-of-decisions-per-second',
        permanent: true,
      },
    ];
  },
  // https://nextjs.org/docs/app/api-reference/next-config-js/headers#x-frame-options
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};
