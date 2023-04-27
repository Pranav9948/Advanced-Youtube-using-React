import { createSlice } from "@reduxjs/toolkit";

const RemoveMenuSlice=createSlice(

    {
        name:'RemoveMenu',
        initialState:{

            toggle:true
             
        },

        reducers:{

            removeMenu:(state,action)=>{

                state.toggle=false
            }
        }
    }
)

export const {removeMenu}=RemoveMenuSlice.actions

export default RemoveMenuSlice.reducer