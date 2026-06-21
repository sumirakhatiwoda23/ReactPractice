import { baseUrl } from '@/config/api';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

export default function SearchMeal() {
const [searchParams,setSearchParams]=useSearchParams();

   const nav=useNavigate();
   const[data,load,err]=useApi('search.php',{s:searchParams.get('s')})
 
if(load) return <h1>Loading...</h1>
if(err)return <h1 className='text-red-300'>{err}</h1>



console.log(data);



  return (
    <div className='p-5 text-white'>
      { data==null? <h1>Not data Available</h1> :
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
  data.map((meal)=>{
    return <div key={meal.idMeal}>
      <img
      className='cursor-pointer'
      onClick={()=>nav(`/meal/${meal.idMeal}`)}
      src={meal.strMealThumb} alt="" />
      <h3 className='text-[#F4722B]'>  {meal.strMeal} </h3>
      
    </div>
  })
}
      </div> 
      }








        
    </div>
  )
}
