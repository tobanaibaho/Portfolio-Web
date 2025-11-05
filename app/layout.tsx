import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Toba Jordi Naibaho Portofolio',
  description: 'Created with Jordi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
