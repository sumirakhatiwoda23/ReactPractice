import React, { useEffect, useState } from 'react'
import { baseUrl } from '../config/api'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function CategoryMealList() {
  const nav=useNavigate();
  const[data,setData]=useState([]);
  const[load,setLoad]=useState(false);
  const[err,setErr]=useState();

  const getData=async()=>{
    setLoad(true);
    try {
      const response=await axios.get(`${baseUrl}/categories.php`)
      setLoad(false);
      setData(response.data.categories) 
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  }
  useEffect(()=>{
getData();
  },[])
if(load) return <h1>Loading...</h1>
if(err)return <h1 className='text-red-300'>{err}</h1>

  return (
    <div className='my-11 text-center'>

        <h2>Meal Category</h2>
        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-6 justify-items-center  gap-10'>
        {
          data.map((category)=>{
            return <div  onClick={()=>nav(`/meal-list/${category.strCategory}`)}
            className='cursor-pointer'
            key={category.idCategory}>
              <img src={category.strCategoryThumb} alt="" />
              <h3 className='text-[#E3B55E]'>{category.strCategory}</h3>

            </div>
          })
        }
        </div>
    </div>
  )
}
