// fetch users data from API and generate UI using useEffect

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
//   const [users, setUsers] = useState([]);
const [users,setUsers]=useState([])

//   const getData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       setUsers(response.data);
//     } catch (err) {
//       console.log("error:", err);
//     }
//   };
const getData=async()=>{
    try {
        const response=await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        
    } catch (err) {
        console.log("error: ",err)
        
    }
}

//   useEffect(() => {
//     getData();
//   }, []);


useEffect(()=>{
    getData();
},[])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-2">
              {user.name}
            </h2>

            <p className="text-sm text-gray-500 mb-2">
              @{user.username}
            </p>

            <p className="text-sm">
              <strong>Email:</strong> {user.email}
            </p>

            <p className="text-sm">
              <strong>Phone:</strong> {user.phone}
            </p>

            <p className="text-sm mb-2">
              <strong>Website:</strong> {user.website}
            </p>

            <div className="mt-3">
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p className="text-sm text-gray-600">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-sm text-gray-600">
                {user.address.city} - {user.address.zipcode}
              </p>
              <p className="text-xs text-gray-500">
                Geo: {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            </div>

            <div className="mt-3">
              <h3 className="font-semibold text-gray-700">Company</h3>
              <p className="text-sm">{user.company.name}</p>
              <p className="text-xs text-gray-500 italic">
                {user.company.catchPhrase}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <h1>Users</h1>
      {
        users.map((person,index)=>{
           return(
           <div key={person.id} className="flex flex-row">
        
                <h1>{person.username}</h1>
                <p>{person.email}</p>
                <p>{person.phone} </p>
                <p>{person.website}</p>
         <h1> {person.name} </h1>
         <p>Address</p>
         <p> City: {person.address.city}</p>
         <p> Street: {person.address.street}</p>
         <p> Suite: {person.address.street}</p>
         <p> ZipCode: {person.address.zipcode}</p>
      

           
            </div>
        )})
      }
    </div>
  );
}