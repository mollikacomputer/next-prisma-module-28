import React from 'react'
import "./globals.css"
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { Inter } from "next/font/google";
const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const RootLayout = ({children}:{children: React.ReactNode}) => {



  return (
 <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">


      <Toaster position='top-right' richColors />
    {/**Navbar */}
      {children}

    {/**Footer */}
    </body>
    </html>
  )
}

export default RootLayout
