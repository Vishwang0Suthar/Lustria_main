import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Header from './modules/header/header'
import Footerblack from './modules/Footerblack/footer'




const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={` bg-[#fefefe] ${inter.className}`}>
      <Header/>
      {children}
      <Footerblack/>
      
      </body>
    </html>
  )
}
