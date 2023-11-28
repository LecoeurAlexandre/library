import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./authSlice.js";

const store = configureStore({
    reducer : {
        authSlice: authSlice,
    }
})

export default store

