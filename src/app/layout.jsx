import { Glass_Antiqua } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const ore = Glass_Antiqua({ 
  subsets: ['latin'],
  weight:['400'] })
  


export const metadata = {
  title: 'Beginners React Class',
  description: 'Frontend 6B6 class 1 on React',
  keywords: 'React, Next, Javascript'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ore.className}>
        <Navbar />
        <div className='min-h-[70vh]'>
        {children}
        </div>
        

        <Footer />
        </body>
    </html>
  )
}
