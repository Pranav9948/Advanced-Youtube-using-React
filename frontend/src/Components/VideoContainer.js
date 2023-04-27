import React, { useEffect, useState } from 'react'
import SingleVideo from './SingleVideo'
import { YOUTUBE_VIDEOS_API } from '../constants/constants'

function VideoContainer() {

    const [videoData,setVideoData]=useState([])

   useEffect(()=>{

      getVideoData()

   },[videoData])

   const getVideoData= async()=>{

     const datas=await fetch(YOUTUBE_VIDEOS_API)
 
      const data=await datas.json()

     

      setVideoData(data.items)

     
    

   }


   const AdVideoCard=({singleData})=>{

        return(

             <div className='bg-slate-600 mt-9 ms-9 text-white'>

                <SingleVideo singleData={singleData}/>

             </div>
        )
   }


  return (

    <div className="flex flex-wrap">


   { videoData ?.[4] && <AdVideoCard singleData={videoData[4]}/> }


   { videoData?.map((singleData)=>{

        return(

          <>
         
            <SingleVideo  singleData={singleData}/>
            </>

        )
    } )
}
   
</div>  
  )
}

export default VideoContainer