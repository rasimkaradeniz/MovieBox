import {createSlice } from '@reduxjs/toolkit'


const initialState = {
    users:[],
    user:"",
}


export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUsers:(state,action)=>{
            const controlUser = state.users.filter(user => user.email === action.payload.email)
            if(controlUser.length === 0){
                state.users = [action.payload,...state.users]
            }
        },
        loginUser:(state,action)=>{

        }
    },
   
    
})

export const { addUsers } = usersSlice.actions

export default usersSlice.reducer

