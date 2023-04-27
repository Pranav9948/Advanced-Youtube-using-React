import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { removeMenu } from '../Slices/RemoveMenu'
import { useDispatch } from 'react-redux'
import Comments from './Comments'

function VideoWatch() {

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(removeMenu())

  }, [])

  return (

    <>
      <div className='text-center ms-5 mt-10 flex flex-col'>

        <iframe width="1200" height="445" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <Comments />
      </div>







    </>
  )
}

export default VideoWatch