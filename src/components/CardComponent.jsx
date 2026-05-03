import React from 'react'

export default function CardComponent({title,color}) {
  return (
    <div>
      <div className={`h-50 w-60 ${color} p-3 m-3`}>
        <h1 className='text-2xl font-bold'> {title}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}
