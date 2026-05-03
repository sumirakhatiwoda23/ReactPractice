import React from 'react'
import { NavLink } from 'react-router'
import { FaAlignJustify } from "react-icons/fa";

export default function Header() {
  return (
    <div className='bg-black text-white font-semibold px-5 flex items-baseline justify-between'>
      <FaAlignJustify size={19}/>
      <nav className='flex gap-5'>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      
      </nav>
    </div>
  )
}