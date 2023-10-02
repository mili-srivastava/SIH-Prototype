import './globals.css'


export const metadata = {
  title: 'EcoVaran',
  description: 'EcoVaran.',
}

//import components
import {Navbar, Footer, UpperNavbar} from '@/components';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <UpperNavbar/>
      <Navbar/>
      {children}
      <Footer /></body>
    </html>
  )
}
