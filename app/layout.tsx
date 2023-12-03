import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Body/Header'
import Footer from '@/components/Body/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Powerhouse Media & Entertainment',
  description: 'PowerHouse Media & Entertainment based in Mumbai is one of the best data-driven Social Media /Digital Marketing Agencies in Mumbai with a diversified client base and a team of young experts in the field of Digital Media & Graphics. We provide effective solutions for all your digital marketing needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            {children}
            <Footer/>
          </ThemeProvider></body>
    </html>
  )
}
