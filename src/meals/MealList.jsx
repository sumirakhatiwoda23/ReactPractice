import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { baseUrl } from '../config/api';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function MealList() {
    const {category}=useParams();
    const nav=useNavigate();
  const[data,setData]=useState([]);
  const[load,setLoad]=useState(false);
  const[err,setErr]=useState();

  const getData=async()=>{
    setLoad(true);
    try {
      const response=await axios.get(`${baseUrl}/filter.php`,{
        params:{
          c: category
        }
      })
      setLoad(false);
      setData(response.data.meals) 
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
console.log(data);

return (
  <div className='my-11 text-center'>
    <h2 className='text-2xl mb-6 text-white font-bold'>{category} Meals</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
      {data.map((meal) => (
        <Card
          key={meal.idMeal}
         onClick={() => nav(`/meal/${meal.idMeal}`)} 
          className='cursor-pointer hover:scale-105 transition-transform'
        >
          <CardContent className='p-0'>
            <img 
              src={meal.strMealThumb} 
              alt={meal.strMeal}
              className='w-full rounded-t-lg'
            />
          </CardContent>
          <CardFooter className='justify-center py-3'>
            <CardTitle className='text-[#E3B55E] text-sm'>
              {meal.strMeal}
            </CardTitle>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
)
}
