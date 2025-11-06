import SignUpPageContent from '../../components/auth/SignUpPageContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lagoona.example.com';
const canonicalHost = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
const title = 'Регистрация в Lagoona Hotels';
const description =
  'Создайте аккаунт Lagoona Hotels, чтобы получать персональные предложения, управлять бронированиями и сохранять предпочтения.';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/signup',
  },
  openGraph: {
    url: `${canonicalHost}/signup`,
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

export default function SignUpPage() {
  return <SignUpPageContent />;
}
