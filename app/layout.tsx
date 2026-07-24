import React from 'react'
import "./globals.css"

const RootLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <html>
      <body>

      
    {/**Navbar */}
      
      {children}

    {/**Footer */}
    </body>
    </html>
  )
}

export default RootLayout
