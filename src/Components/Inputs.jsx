import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../Redux/TasksSlice";

export const Inputs = () => {
    const [task, setTask] = useState({
        title: "",
        description: "",
    })
    const disptach = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        disptach(AddTask(task));
        
        setTask({
            title: "",
            description: "",
        })

    }

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
        return;
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" id='title' value={task.title} required name="title" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="details">Details</label>
                <br />
                <input type="text" id='details' required value={task.description} name="description" onChange={handleChange} />
                <br />
                <button type="submit">+</button>
            </form>
        </>
    )
}