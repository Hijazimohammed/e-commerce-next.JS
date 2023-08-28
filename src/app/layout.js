import Theme from '@/components/organism/ThemeProvider/Theme.';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}