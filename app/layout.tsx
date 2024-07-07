import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from '@next/font/local'

const myFont = localFont({
  src: [
    {
      path: '../public/abode-fonts/AdobeClean-Black.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/abode-fonts/AdobeClean-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMER Field & Demand Services Marketing',
  description:
    'Adobe Americas Field & Demand Serices Marketing offerings, portfolio and contacts.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} text-white min-h-screen backdrop flex justify-center`}
      >
        {children}
      </body>
    </html>
  )
}
