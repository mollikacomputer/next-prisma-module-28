import React from 'react'
import "./globals.css"
import { Toaster } from '@/components/ui/sonner'

const RootLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <html>
      <body>

      <Toaster position='top-right' richColors />
    {/**Navbar */}
      
      {children}

    {/**Footer */}
    </body>
    </html>
  )
}

export default RootLayout
