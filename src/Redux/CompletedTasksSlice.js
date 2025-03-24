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

    }
})

export const { MarkComplete, StorageCopyFinished } = CompletedTasksSlice.actions
export default CompletedTasksSlice.reducer