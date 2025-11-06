import './globals.css';
import Providers from '../components/Providers';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lagoona.example.com';
const canonicalHost = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
const defaultTitle = 'Lagoona Hotels — Коллекция отелей 2025';
const defaultDescription =
  'Премиальная коллекция отелей Lagoona 2025 года: авторские программы, круглосуточный сервис и удобное онлайн-бронирование.';

export const metadata = {
  metadataBase: new URL(canonicalHost),
  title: {
    default: defaultTitle,
    template: '%s | Lagoona Hotels',
  },
  description: defaultDescription,
  keywords: [
    'Lagoona Hotels',
    'лакшери отели',
    'премиальное размещение',
    'бронирование отелей',
    'Lagoona 2025',
  ],
  applicationName: 'Lagoona Hotels',
  authors: [{ name: 'Lagoona Hotels' }],
  creator: 'Lagoona Hotels',
  publisher: 'Lagoona Hotels',
  alternates: {
    canonical: '/',
    languages: {
      ru: '/?lang=ru',
      en: '/?lang=en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: ['en_US'],
    url: canonicalHost,
    title: defaultTitle,
    description: defaultDescription,
    siteName: 'Lagoona Hotels',
    images: [
      {
        url: '/assets/img/31.jpg',
        width: 1200,
        height: 630,
        alt: 'Lagoona Hotels — коллекция отелей 2025 года',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/assets/img/31.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'travel',
  other: {
    'theme-color': '#121212',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
