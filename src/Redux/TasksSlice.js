import { createSlice } from '@reduxjs/toolkit';

const TasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        AddTask: (state, action) => {
            state.push(action.payload);// Add a new task to the state    
            localStorage.setItem('addedTasks', JSON.stringify(state));
        },

        StorageCopy: (state, action) => action.payload,

        RemoveTask: (state, action) => {
            const uTasks = state.filter((task, idx) => idx != action.payload)
            localStorage.setItem('addedTasks', JSON.stringify(uTasks));
            return uTasks;
        }
    }
})

export const { AddTask, StorageCopy, RemoveTask } = TasksSlice.actions;
export default TasksSlice.reducer;