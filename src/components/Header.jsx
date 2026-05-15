import { MedalIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div className='px-5 py-2 text-white flex items-baseline justify-between'>
      
      <Link to="/" className='flex items-center gap-3 cursor-pointer'>
        <MedalIcon size={50}/>
        <h1 className='text-xl font-bold'>The MealDB</h1>
      </Link>

    </div>
  )
}