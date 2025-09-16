import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPosts = createAsyncThunk("posts/fetchAllPosts", async ()=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return res.data
})

export const fetchPost = createAsyncThunk("posts/fetchPost", async (id)=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.data
})

const postSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        error:null,
        post:null,
        postLoading:false,
        postError:null
    },
    extraReducers:(builder)=>{
        builder 
            .addCase(fetchAllPosts.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(fetchAllPosts.fulfilled,(state,action)=>{
                state.loading = false
                state.posts = action.payload
            })
            .addCase(fetchPost.pending,(state,action)=>{
                state.postLoading = true
            })
            .addCase(fetchPost.fulfilled,(state,action)=>{
                state.postLoading = false
                state.post = action.payload
            })
    }
})

export default postSlice.reducer