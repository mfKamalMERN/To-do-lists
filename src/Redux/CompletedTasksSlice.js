import { createSlice } from "@reduxjs/toolkit";


const CompletedTasksSlice = createSlice({
    name: "finishedTasks",
    initialState: [],
    reducers: {
        MarkComplete: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('FinishedTasks', JSON.stringify(state))
        },

        StorageCopyFinished: (state, action) => action.payload,

        RemoveTaskFinished: (state, action) => {
            const rTasks = state.filter((task, index) => index !== action.payload)
            localStorage.setItem('FinishedTasks', JSON.stringify(rTasks));
            return rTasks;
        }

    }
})

export const { MarkComplete, StorageCopyFinished, RemoveTaskFinished } = CompletedTasksSlice.actions
export default CompletedTasksSlice.reducer