import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corentin CLAUDEL',
  description: 'Une fenêtre sur la vie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <nav>
            <a href="./" id="accueil">Accueil</a>
            <a href="./parcours" id="parcours">Parcours</a>
            <a href="./portfolio" id="portfolio">PortFolio</a>
          </nav>
        {children}</body>
    </html>
  )
}
