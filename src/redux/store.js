import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import categorySlice from "../features/categories/categorySlice";
import productsSlice from "../features/products/productsSlice";

export const store =configureStore({
    reducer: {
        counter:counterReducer,
        category:categorySlice,
        products:productsSlice,
    },
})