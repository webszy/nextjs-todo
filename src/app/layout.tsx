import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import type {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Run Your TODO| TO-DO.RUN',
  description: 'A useful to do list',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
