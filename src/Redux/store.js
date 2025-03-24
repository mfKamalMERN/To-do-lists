import { configureStore } from "@reduxjs/toolkit";
import tReducer from './TasksSlice'
import cReducer from './CompletedTasksSlice'

export const store = configureStore({
    reducer: {
        tasks: tReducer,
        finishedTasks: cReducer
    }
})