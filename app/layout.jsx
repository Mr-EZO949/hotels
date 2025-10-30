import './globals.css';
import Providers from '../components/Providers';

export const metadata = {
  title: 'Lagoona Hotels | 2025 коллекция',
  description:
    'Современная коллекция отелей Lagoona с обновленными предложениями на 2025 год и удобным онлайн-бронированием.',
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
