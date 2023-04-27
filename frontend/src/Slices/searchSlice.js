import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice(

    {
        name:'SearchSlice',
        initialState:{},

        reducers:{

            searchSliceAction:(state,action)=>{

                state=Object.assign(state,action.payload)
            }
        }
    }
)

export const {searchSliceAction}=searchSlice.actions

export default searchSlice.reducer