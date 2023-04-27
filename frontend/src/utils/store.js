import { configureStore } from '@reduxjs/toolkit'
import ToggleSlice from '../Slices/ToggleSlice'
import RemoveMenu from '../Slices/RemoveMenu'
import searchSlice from '../Slices/searchSlice'


const store=configureStore(

    {
       reducer:{

           menu:ToggleSlice,
            remove   :RemoveMenu,
            search:searchSlice

       }
    }
)



export default store
