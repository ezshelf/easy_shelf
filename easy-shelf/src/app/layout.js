import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header/Header'
import Footer from './footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Shelf',
  description: 'Simplify shoe access for disabled individuals',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
