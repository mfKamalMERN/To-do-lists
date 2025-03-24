import { useSelector, useDispatch } from "react-redux";
import { RemoveTask, StorageCopy, UpdateTask } from "../Redux/TasksSlice";
import { useEffect, useState } from "react";

export const TasksDisplayer = () => {
    const [editToggele, setEditToggle] = useState(false);
    const [eidx, setEidx] = useState(0);
    const [taskk, setTaskk] = useState({
        title: "",
        description: "",
    })
    var addedTasks = useSelector(s => s.tasks);

    const disptach = useDispatch();

    const tasksLoader = () => {
        const storageTasks = JSON.parse(localStorage.getItem('addedTasks'));
        if (storageTasks?.length) {
            disptach(StorageCopy(storageTasks));
            return;
        }

        disptach(StorageCopy([]));
    }

    const editTask = (task, idx) => {
        setEditToggle(!editToggele)
        setEidx(idx)
        setTaskk(task)
    }

    const handleChange = (e) => {
        setTaskk({ ...taskk, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        tasksLoader();
    }, [])

    return (
        <>
            {(addedTasks.length != 0) && addedTasks.map((task, index) => (
                <div key={index}>

                    {(editToggele && (eidx == index)) ?
                        <>
                            <input type="text" value={taskk.title} name="title" onChange={handleChange} />
                            <input type="text" value={taskk.description} name="description" onChange={handleChange} />
                            <button onClick={() => {
                                disptach(UpdateTask({ eidx, taskk }))
                                setEditToggle(false)
                            }}>Update</button>
                        </>
                        :
                        <>
                            <h3>{task.title}</h3>
                            <h3>{task.description}</h3>
                        </>}


                    <div className='btns'>
                        <button onClick={() => {
                            disptach(RemoveTask(index))
                            setEditToggle(false)
                        }}>Delete</button>

                        <button onClick={() => editTask(task, index)}>Edit</button>

                        <button>Mark as Completed</button>
                    </div>

                    <br />
                    <br />
                </div>))
            }
        </>
    )
}