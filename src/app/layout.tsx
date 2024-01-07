import QueryWrapper from '@/components/query-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { DOMAIN } from '@/constant/config';
import { Metadata } from 'next';
import '../styles/globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Fix Creative Photography',
  description:
    'Jasa Photography & Video Wedding, Postwedding, Engagement, Decoration, Prewedding',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Fix Creative Photography',
    description:
      'Jasa Photography & Video weddings, Postwedding, Engagement, Decoration, Prewedding',
    images: [
      {
        url: `${DOMAIN}/assets/og.png`,
        alt: 'Fix Creative Photography',
        width: 600,
        height: 600,
      },
    ],
    type: 'website',
  },
  twitter: {
    images: [
      {
        url: `${DOMAIN}/assets/og.png`,
        alt: 'Fix Creative Photography',
        width: 600,
        height: 600,
      },
    ],
    title: 'Fix Creative Photography',
    description:
      'Jasa Photography & Video weddings, Postwedding, Engagement, Decoration, Prewedding',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/assets/favicon.png',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <QueryWrapper>{children}</QueryWrapper>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
