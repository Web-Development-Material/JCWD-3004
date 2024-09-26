import React from 'react'

interface Layout {
    children?: React.ReactNode;
}

function Layout({ children } : Layout) {
  return (
    <div className="bg-red-700 text-black w-screen h-screen flex flex-col justify-center items-center">
        {children}
    </div>
  )
}

export default Layout