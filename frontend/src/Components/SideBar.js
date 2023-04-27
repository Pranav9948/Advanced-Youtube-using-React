import React from 'react'
import { useSelector } from 'react-redux'

function SideBar() {


const  result =useSelector((state)=>state.menu.toggle)
const remove=useSelector((state)=>state.remove.toggle)

console.log('12',result)
console.log("32",remove)

if(!result) return ;
if(!remove) return ;

  return (

   
    
  
    <div className="col-span-2 w-32 bg-gray-300 shadow-xl">

    <ul className="list-none ps-7 pt-4">
    <li className="pt-2">Home</li>
    <li className="pt-2">Shorts</li>
    <li className="pt-2">Videos</li>
    <li className="pt-2">Live</li>

     <h4 className="font-bold mt-4 mb-4" style={{marginLeft:'-15px'}}>Subscripitions</h4>

     <li className="pt-2">Music</li>
     <li className="pt-2">Sportz</li>
     <li className="pt-2">Gaming</li>
     <li className="pt-2">Movies</li>


    <h4 className="font-bold mt-4 mb-4" style={{marginLeft:'-15px'}}>Watch Later</h4>

      <li className="pt-2">Music</li>
      <li className="pt-2">Sportz</li>
      <li className="pt-2">Gaming</li>
      <li className="pt-2">Movies</li>
      
    </ul>
</div> 



  )
}

export default SideBar