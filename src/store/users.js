import {createSlice } from '@reduxjs/toolkit'



export const usersSlice = createSlice({
    name:"users",
    initialState:{
        users:[]
    },
    reducers:{
        addUsers:(state,action) =>{
            state.users = [action.payload,...state.users]
            
        }
    }
})

export const { addUsers } = usersSlice.actions

export default usersSlice.reducer

