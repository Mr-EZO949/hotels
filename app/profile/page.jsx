import ProfilePageContent from '../../components/profile/ProfilePageContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lagoona.example.com';
const canonicalHost = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
const title = 'Личный кабинет Lagoona Hotels';
const description =
  'Просматривайте историю бронирований, актуальные предложения и персональные настройки в личном кабинете Lagoona Hotels.';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/profile',
  },
  openGraph: {
    url: `${canonicalHost}/profile`,
    title,
    description,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProfilePage() {
  return <ProfilePageContent />;
}
