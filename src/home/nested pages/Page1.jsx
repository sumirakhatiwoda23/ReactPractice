import React from 'react'
import { NavLink } from 'react-router'

export default function Page1() {
  return (
    <div>

        <h1>This is page 1</h1>
        <NavLink to={'/'} className="underline text-pink-700">go back home</NavLink>
    </div>
  )
}
