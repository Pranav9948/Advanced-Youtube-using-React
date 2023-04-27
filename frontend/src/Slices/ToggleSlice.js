

import { createSlice } from "@reduxjs/toolkit";


const ToggleSlice=createSlice(

    {
        name:'Toggle',
        initialState:{

            toggle:true
        },

         reducers:{

         

        togglemenu:(state,action)=>{

            state.toggle=!state.toggle;
        }

    }


    }
)

export const {togglemenu}=ToggleSlice.actions
export default ToggleSlice.reducer