const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lagoona.example.com';
const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

export default function sitemap() {
  const routes = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/login', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/signup', changeFrequency: 'monthly', priority: 0.4 },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
