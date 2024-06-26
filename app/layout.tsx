import type { Metadata } from 'next'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { inter } from './fonts';
import { Analytics } from "@vercel/analytics/react";
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Rick And Morty',
    default: 'Rick And Morty'
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
