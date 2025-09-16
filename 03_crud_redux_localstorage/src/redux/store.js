import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";
import userReducer from "./userReducer";

const store = configureStore({
    reducer:{
        count : counterReducer,
        users : userReducer
    }
})


export default store