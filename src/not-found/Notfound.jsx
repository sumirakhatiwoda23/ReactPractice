import React from 'react'
import { NavLink } from 'react-router'

export default function Notfound() {
  return (
    <div>
        <h1 className='text-2xl text-amber-700'>Page not found</h1>
        <NavLink to={"/"} className="text-2xl underline text-pink-800">
            Please go back
        </NavLink>
    </div>
  )
}
