import logo from './logo.svg';
import './App.css';
import { Inputs } from './Components/Inputs';
import { TasksDisplayer } from './Components/TasksDisplayer';
import { useSelector } from 'react-redux';

function App() {
  var addedTasks = useSelector(s => s.tasks);
  const completedTasks = useSelector(s => s.finishedTasks);
  const Tasks = { addedTasks, completedTasks }
  return (
    <div className="App">
      <Inputs />
      <br />
      <TasksDisplayer {...Tasks} />
    </div>
  );
}

export default App;
