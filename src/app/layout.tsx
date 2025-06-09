import './tailwind.css';
import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Stelios Mavro | Full-Stack Engineer',
  description:
    'Personal site, portfolio, and developer blog for Stelios Mavro — a full-stack focused on AI-powered applications, automation, and developer tools.',
  metadataBase: new URL('https://mavro.dev'),
  openGraph: {
    title: 'Stelios Mavro | Full-Stack Engineer',
    description:
      'Personal site, portfolio, and developer blog for Stelios Mavro — a full-stack focused on AI-powered applications, automation, and developer tools.',
    url: 'https://mavro.dev',
    siteName: 'mavro.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stelios Mavro | Full-Stack Engineer',
    description:
      'Personal site, portfolio, and developer blog for Stelios Mavro — a full-stack focused on AI-powered applications, automation, and developer tools.',
    site: '@steliosmavro',
  },
  icons: {
    icon: '/logo.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-[#101014]/80 supports-[backdrop-filter]:dark:bg-[#101014]/60">
          <nav className="layout-container flex items-center justify-between py-3">
            <Link
              href="/"
              className="nav-logo bg-gradient-to-r from-brand to-accent bg-clip-text text-xl font-bold tracking-tight text-transparent transition-all duration-300 hover:scale-105"
            >
              mavro.dev
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link
                href="/projects"
                className="nav-link decoration-accent decoration-[2px] underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="nav-link decoration-accent decoration-[2px] underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="nav-link decoration-accent decoration-[2px] underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                className="nav-link decoration-accent decoration-[2px] underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </nav>
        </header>
        <div className="layout-container min-h-[80vh]">{children}</div>
        <footer className="border-t border-slate-200 bg-[#f3f6fa] py-8 text-center text-xs text-slate-500 dark:border-slate-800">
          <nav className="layout-container flex justify-center gap-4 pb-6 pt-8 text-sm text-slate-500">
            <a href="mailto:stelios@mavro.dev">Email</a>
            <a
              href="https://www.linkedin.com/in/steliosmavro"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://x.com/mavrodev" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </nav>
          <div className="mt-2">
            &copy; {new Date().getFullYear()} Stelios Mavro. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
