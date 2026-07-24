import React from 'react'

const RootLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
    {/**Navbar */}
      
      {children}

    {/**Footer */}
    </>
  )
}

export default RootLayout
