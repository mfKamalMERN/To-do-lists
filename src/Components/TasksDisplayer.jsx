import { useSelector, useDispatch } from "react-redux";
import { RemoveTask, StorageCopy } from "../Redux/TasksSlice";
import { useEffect } from "react";

export const TasksDisplayer = () => {
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

    useEffect(() => {
        tasksLoader();
    }, [])

    return (
        <>
            {addedTasks.length ? addedTasks.map((task, index) => (
                <div key={index}>
                    <h3>{task.title}</h3>
                    <h3>{task.description}</h3>

                    <div className='btns'>
                        <button onClick={() => disptach(RemoveTask(index))}>Delete</button>
                        <button>Edit</button>
                        <button>Mark as Completed</button>
                    </div>

                    <br />
                    <br />
                </div>))
                :
                JSON.parse(localStorage.getItem('addedTasks'))?.map((task, index) => (
                    <div key={index}>
                        <h3>{task.title}</h3>
                        <h3>{task.description}</h3>

                        <div className='btns'>
                            <button>Delete</button>
                            <button>Edit</button>
                            <button>Mark as Completed</button>
                        </div>

                        <br />
                        <br />
                    </div>))
            }
        </>
    )
}