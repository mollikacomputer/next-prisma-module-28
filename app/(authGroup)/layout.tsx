import React from 'react'

const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
    // <div className='flex justify-cente'>
    <div className='max-w-7xl mx-auto'>
      {children}
    </div>
  )
}

export default AuthLayout
