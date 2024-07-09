import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 
 const initialState={
    initialState: [],
 };

 export const fetchProducts = createAsyncThunk('fetchProducts', async () =>{
    const response = await fetch (
        " https://ecommerce-backend-fawn-eight.vercel.app/api/products"
    );
    const data = await response.json();
    return data;
 })

 const productsSlice = createSlice({
    name:"products",
    initialState:initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.value = action.payload
        })
    }
 })
 export default productsSlice.reducer