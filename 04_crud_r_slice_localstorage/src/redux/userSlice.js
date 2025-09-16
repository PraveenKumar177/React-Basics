import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("users")) || []

const userSlice = createSlice({
    name : "users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.push({id:Date.now(), ...action.payload})  
            localStorage.setItem("users",JSON.stringify(state))
        },
        deleteUser:(state,action)=>{
            // const index = state.findIndex(u=>u.id == action.payload)
            // state.splice(index,1)

            const newUsers =  state.filter(u=>u.id !== action.payload)
            localStorage.setItem("users",JSON.stringify(newUsers))
            return newUsers
        },
        updateUser:(state,action)=>{
            const newUsers =  state.map(u=>u.id == action.payload.id ? {...u,...action.payload}:u)
            localStorage.setItem("users",JSON.stringify(newUsers))
            return newUsers
        }
    }
})

export const {addUser,deleteUser,updateUser} = userSlice.actions
export default userSlice.reducer