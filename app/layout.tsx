import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FD Oyewole',
  description:
    'Portfolio website for Oyewole Faith Oluwadamilare, a software engineer based in Lagos, Nigeria.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
