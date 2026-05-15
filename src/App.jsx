
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './home/Home'

import Notfound from './not-found/Notfound'
import RootLayout from './components/RootLayout'
import MealList from './meals/MealList'
import Meal from './meals/Meal'
import SearchMeal from './meals/SearchMeal'


export default function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
        index:true,
        element:<Home/>
        },
        {
path:"meal-list/:category",
element:<MealList/>
        },
        {
          path:"meal/:id",
          element:<Meal/>
        },
        {
       path:"search-meal",
       element:<SearchMeal/>
        },
     
    {
      path:'*',
      element:<Notfound/>

    }
      ]
      
    }
   
  ])
  return <RouterProvider router={router}/>
}
   
