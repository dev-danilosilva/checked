import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { LanguageProvider } from './i18n/LanguageContext';
import './globals.css';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'checked — The checklist app that gets out of your way',
  description:
    'No accounts. No cloud sync. No subscriptions. Your lists stay on your device — private, fast, and always available.',
  openGraph: {
    title: 'checked',
    description: 'The checklist app that gets out of your way.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="font-mono antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
