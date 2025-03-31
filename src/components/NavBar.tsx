import React from 'react'
import { Link } from '@react-navigation/native'

function NavBar() {

  return (
    <div className='p-10 bg-nav-blue w-fit rounded-2xl'>
        <img src='kitty.png' alt='logo' className='profile mb-12 h-15 w-15 border-2 border-black' onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}></img>
        <img src='home.svg' alt='home' className='my-8'></img>
        <img src='chat.svg' alt='char' className='my-8'></img>
        <img src='bell.svg' alt='notification' className='my-8'></img>
        <img src='settings.svg' alt='settings' className='my-8'></img>
        <img src='exit.svg' alt='exit' className='mt-16 -mb-4'></img>
    </div>
  )
}

export default NavBar

