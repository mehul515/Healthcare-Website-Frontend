"use client"

import { Inter } from 'next/font/google'
import "./globals.css";
import Header from './_components/Header';
import Footer from './_components/Footer'
import { usePathname } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const params = usePathname();
  console.log(params)
  const showHeader = (params=="/login" || params=="/signup") ? false : true;
  return (
    <html lang="en">
      <body className={`${inter.className} px-3 md:px-12`} >
        {showHeader&&<Header/>}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
