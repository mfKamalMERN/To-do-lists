import logo from './logo.svg';
import './App.css';
import { Inputs } from './Components/Inputs';
import { TasksDisplayer } from './Components/TasksDisplayer';

function App() {
  return (
    <div className="App">
      <Inputs />
      <br />
      <TasksDisplayer />
    </div>
  );
}

export default App;
