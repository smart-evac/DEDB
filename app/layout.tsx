import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Escape Smartly — Dynamic Evacuation Decision Board (DEDB)',
  description:
    'Escape Smartly (DEDB) is a dynamic evacuation decision board that reroutes people to safer exits in real time when fire, smoke, flood, gas, crowding, or structural hazards make normal routes unsafe.',
  keywords: [
    'evacuation',
    'emergency',
    'disaster response',
    'DEDB',
    'Escape Smartly',
    'dynamic exit routing',
    'IoT safety',
  ],
  authors: [{ name: 'Escape Smartly Team' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Escape Smartly — Dynamic Evacuation Decision Board',
    description:
      'Real-time evacuation guidance that redirects people to safer exits the moment a route becomes unsafe.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1418',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
