import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigationSection from '@/app/components/navigation/navigation.component'
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
        <NavigationSection></NavigationSection>
        <div className='children'>
          {children}
        </div>
        <footer>
          <p>Site Web réalisés avec &#10084; et 100% français</p>
        </footer>
      </body>
    </html>
  )
}

