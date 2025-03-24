import { useSelector, useDispatch } from "react-redux";
import { RemoveTask, StorageCopy, TaskCompleted, UpdateTask } from "../Redux/TasksSlice";
import { useEffect, useState } from "react";
import { MarkComplete, StorageCopyFinished } from "../Redux/CompletedTasksSlice";

export const TasksDisplayer = (props) => {
    const { addedTasks, completedTasks } = props;
    const [taskToggler, setTasktoggler] = useState(false)
    const tasks = taskToggler ? completedTasks : addedTasks;
    const [editToggele, setEditToggle] = useState(false);
    const [eidx, setEidx] = useState(0);
    const [taskk, setTaskk] = useState({
        title: "",
        description: "",
    })



    const disptach = useDispatch();

    const tasksLoader = () => {
        const storageTasks = JSON.parse(localStorage.getItem('addedTasks'));
        const storageFinishedTasks = JSON.parse(localStorage.getItem('FinishedTasks'));
        if (storageTasks?.length) disptach(StorageCopy(storageTasks));

        if (storageFinishedTasks?.length) disptach(StorageCopyFinished(storageFinishedTasks));


        if (!storageTasks.length) disptach(StorageCopy([]));

        if (!storageFinishedTasks.length) disptach(StorageCopyFinished([]))

    }

    const editTask = (task, idx) => {
        setEditToggle(!editToggele)
        setEidx(idx)
        setTaskk(task)
    }

    const handleChange = (e) => {
        setTaskk({ ...taskk, [e.target.name]: e.target.value })
    }

    const CompleteTask = (idx, task) => {
        disptach(TaskCompleted(idx));
        disptach(MarkComplete(task));
    }

    useEffect(() => {
        tasksLoader();
    }, [])

    return (
        <>
            <button onClick={() => setTasktoggler(!taskToggler)}>{!taskToggler ? `Show Completed Tasks` : `Show Pending Tasks`}</button>
            {(addedTasks.length != 0) && tasks.map((task, index) => (
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
                        {!taskToggler ?
                            <button onClick={() => {
                                disptach(RemoveTask(index))
                                setEditToggle(false)
                            }}>Delete</button>
                            :
                            <button>Remove</button>
                        }

                        {!taskToggler && <button onClick={() => editTask(task, index)}>Edit</button>}

                        {tasks != completedTasks && <button onClick={() => CompleteTask(index, task)}>Mark as Completed</button>}
                    </div>

                    <br />
                    <br />
                </div>))
            }
        </>
    )
}