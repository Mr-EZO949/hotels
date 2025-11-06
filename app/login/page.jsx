import LoginPageContent from '../../components/auth/LoginPageContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lagoona.example.com';
const canonicalHost = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
const title = 'Вход в Lagoona Hotels';
const description =
  'Авторизуйтесь в личном кабинете Lagoona Hotels, чтобы управлять бронированиями и персональными данными.';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/login',
  },
  openGraph: {
    url: `${canonicalHost}/login`,
    title,
    description,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return <LoginPageContent />;
}
