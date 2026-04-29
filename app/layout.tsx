import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dzidzo SMS — School Management System',
  icons: {
    icon: '/Dzidzo SMS2.png',
  },
  description:
    'Dzidzo School Management System — smart, homegrown software for Zimbabwean schools. Admissions, exams, WhatsApp for parents, and more. By Afrainity Technologies.',
  openGraph: {
    title: 'Dzidzo SMS — School Management System',
    description:
      'Built for our schools, by those who know them best. Admissions, class & exam management, parent WhatsApp chatbot, and compliance reporting.',
    url: 'https://www.afrainity.com',
    siteName: 'Dzidzo SMS',
    locale: 'en_ZW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dzidzo SMS — School Management System',
    description:
      'School management built with local high schools — ZIMSEC, Cambridge, HEXCO. Affordable, low-bandwidth friendly.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
