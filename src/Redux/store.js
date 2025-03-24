import { configureStore } from "@reduxjs/toolkit";
import tReducer from './TasksSlice'

export const store = configureStore({
    reducer: {
        tasks: tReducer,
    }
})