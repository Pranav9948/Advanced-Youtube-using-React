import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglemenu } from '../Slices/ToggleSlice'
import { YT_SEARCH_API } from '../constants/constants'
import {searchSliceAction} from '../Slices/searchSlice'


function Header() {

   const dispatch = useDispatch()

   const [searchQuery, setSearchQuery] = useState('')
   const [searchSuggestion, setSearchSuggestion] = useState([])
   const [showBox,setShowBox]=useState(false)

   const search=useSelector((state)=>state.search)

   useEffect(() => {


      const timer = setTimeout(() => {


         if(search[searchQuery]){

            console.log('x1')
            setSearchSuggestion(search[searchQuery])
         }

         else{

            console.log('x2')
         getSearchedProducts()

         dispatch(searchSliceAction(
            {
               [searchQuery]:searchSuggestion
            }
         ))

          

         }


      }, 1000)

      return () => {

         clearInterval(timer)
      }

   }, [searchQuery])


   const getSearchedProducts = async () => {


      console.log('API CALL')
      const data = await fetch(YT_SEARCH_API + searchQuery)



      const jsonData = await data.json()
      setSearchSuggestion(jsonData[1])

      console.log("abc", jsonData[1])

   }





   return (

      <div className='pt-5 grid grid-flow-col'>

         <div className='flex  col-span-2'>

            <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="menuIcon" className='h-9 ps-8 cursor-pointer' onClick={() => dispatch(togglemenu())} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtubeIcon" className='h-9 ps-9' />

         </div>

         <div className='flex-col' style={{ marginLeft: '-300px' }}>


            <div className="flex">
               <input type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder='   search here' className='border-black w-10/12 h-11 rounded-l-full col-span-9 ps-5'
               
                onFocus={()=>setShowBox(true)}
                onBlur={()=>setShowBox(false)}


               />
               <button><img src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" className=' h-11 rounded-r-full p-3 bg-gray-400' alt="button" /></button>

            </div>


            {  showBox &&
               searchSuggestion.length > 0 &&

               <div className='bg-gray-100 w-[440px] mt-2 ms-2 fixed'>

                  {
                     searchSuggestion.map((resultz, idx) => {

                        return (

                           <div>
                              <li key={idx} className='list-none border border-gray-200 p-1 ps-5'>


                                 {resultz}
                              </li>

                           </div>
                        )
                     })
                  }

               </div>
            }


         </div>





         <div className='col-span-1'>

            <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user" className='h-10  ms-20' />

         </div>

      </div>
   )
}

export default Header