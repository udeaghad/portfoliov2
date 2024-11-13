import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const Menu = () => {
  return (
    <div className='w-full h-screen bg-slate-300 absolute'>
      <DarkModeToggle />
    </div>
  )
}

export default Menu