import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VideoWatch from './Components/VideoWatch'
import MainBody from './Components/MainBody'

function Routers() {
    return (

        <>

            <Routes>


                <Route
                    path="/"
                    element={

                        <>

                            <div className="col-span-10 w-10/12 bg-gray-100 shadow-sm">

                                <MainBody />
                            </div>

                        </>

                    }
                />



                <Route
                    path="/videowatch/:id"
                    element={

                        <>

                            <VideoWatch />
                        </>

                    }
                />

            </Routes>
        </>
    )
}

export default Routers