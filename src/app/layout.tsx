import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'DIM',
  description: 'DIRETORIA INTEGRADA METROPOLITANA',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
