import React from 'react'
import { Link } from 'react-router-dom'

function SingleVideo({singleData}) {

        const {snippet,statistics,id}=singleData

        const {channelTitle,title,thumbnails}=snippet

  return (

    <div className='shadow-lg w-[400]    mt-10 p-4 ms-10' >

        <Link to={`/videowatch/${id}`}><img src={thumbnails.medium.url} alt=""  width={'250px'} height={'80px'} className='cursor-pointer'/></Link>
        <ul className='text-center'>

            <li className='pt-3'>{title.substring(0,20)}</li>
            <li className='pt-3'>{channelTitle}</li>
            <li className='pt-3'>{statistics.viewCount} views</li>

            
 

        </ul>



    </div>
  )
}

export default SingleVideo









