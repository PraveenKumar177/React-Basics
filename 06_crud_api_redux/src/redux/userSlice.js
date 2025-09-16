import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=>{
    const res = await axios.get(`${BASE_URL}/api/users/`)
    return res.data
})

export const createUser = createAsyncThunk("users/createUser", async(user)=>{
    const res = await axios.post(`${BASE_URL}/api/users/`,user)
    return res.data
})

export const deleteUser = createAsyncThunk("users/deleteUser", async(id)=>{
    const res = await axios.delete(`${BASE_URL}/api/users/${id}`)
    return res.data
})

export const updateUser = createAsyncThunk("users/updateUser", async(user)=>{
    const res = await axios.put(`${BASE_URL}/api/users/${user.id}`,user)
    return res.data
})


const userSlice = createSlice({
    name:"users",
    initialState:{
        lists : [],
        loading : false,
        error : null
    },
    extraReducers:(builder)=>{
        builder
                .addCase(fetchUsers.pending,(state,action)=>{
                    state.loading = true
                })
                .addCase(fetchUsers.fulfilled,(state,action)=>{
                    state.loading = false
                    state.lists = action.payload
                })

                .addCase(createUser.pending,(state,action)=>{
                    state.loading = true
                })
                .addCase(createUser.fulfilled,(state,action)=>{
                    state.loading = false
                    state.lists.push(action.payload)
                })

                .addCase(deleteUser.pending,(state,action)=>{
                    state.loading = true
                })
                .addCase(deleteUser.fulfilled,(state,action)=>{                    
                    state.loading = false
                    const index = state.lists.findIndex(u=>u.id == action.meta.arg)
                    state.lists.splice(index,1)
                })

                .addCase(updateUser.pending,(state,action)=>{
                    state.loading = true
                })
                .addCase(updateUser.fulfilled,(state,action)=>{                    
                    state.loading = false                    
                    const index = state.lists.findIndex(u=>u.id == action.payload.id)
                    state.lists[index] = {...state.lists[index],...action.payload}
                })
    }
})

export default userSlice.reducer