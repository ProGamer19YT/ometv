import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Hayal Baku | Veb və idarəetmə sistemi',
  description:
    'Hayal Baku üçün public sayt və ayrıca admin idarəetmə sistemi.',
  keywords:
    'Hayal Baku, admin panel, masa rezervasiyası, menyu idarəetməsi, seo, qalereya',
  generator: 'OpenAI',
  openGraph: {
    title: 'Hayal Baku | Veb və idarəetmə sistemi',
    description:
      'Hayal Baku üçün ayrıca admin panel və idarə olunan public sayt strukturu.',
    locale: 'az_AZ',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1410',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="az" className="dark bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster richColors closeButton position="top-right" />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
