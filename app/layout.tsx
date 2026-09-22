import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const manrope = localFont({
  src: [
    { path: '../public/fonts/manrope-regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/manrope-semibold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/manrope-extrabold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Benso — Knitwear, thoughtfully made', template: '%s | Benso Garment' },
  description: 'Premium knitwear, thoughtfully made in Tirupur, India. Meet Benso Garment Pvt Ltd, manufacturing and exporting garments for women, men, children and infants since 1995.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={manrope.variable}>{children}</body></html>;
}
