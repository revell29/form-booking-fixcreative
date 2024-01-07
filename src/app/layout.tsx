import QueryWrapper from '@/components/query-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import '../styles/globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
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
