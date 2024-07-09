 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 
 const initialState={
    initialState: [],
 };

 export const fetchCategories = createAsyncThunk('fetchCategories', async () =>{
    const response = await fetch (
        "https://ecommerce-backend-fawn-eight.vercel.app/api/categories"
    );
    const data = await response.json();
    return data;
 })

 const categorySlice = createSlice({
    name:"category",
    initialState:initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchCategories.fulfilled, (state, action)=>{
            state.value = action.payload
        })
    }
 })
 export default categorySlice.reducer