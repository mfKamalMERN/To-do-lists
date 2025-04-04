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
        },

        UpdateTask: (state, action) => {
            const { eidx, taskk } = action.payload;
            const { title, description } = taskk
            let foundTask = state.find((task, idx) => idx == eidx);
            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description;
                localStorage.setItem('addedTasks', JSON.stringify(state));
                return state;
            }
            return state;
        },
        TaskCompleted: (state, action) => {
            state.splice(action.payload, 1);
            localStorage.setItem('addedTasks', JSON.stringify(state));
            return state;
        }
    }
})

export const { AddTask, StorageCopy, RemoveTask, UpdateTask, TaskCompleted } = TasksSlice.actions;
export default TasksSlice.reducer;