const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lagoona.example.com';
const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/profile', '/dashboard'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
