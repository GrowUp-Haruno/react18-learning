import './App.css';
import { AutomaticBatcing } from './components/AutomaticBatcing';
import { Transition } from './components/Transition';
import { Task } from './components/Transition/Task';
import { TaskUseDeferredvalue } from './components/Transition/TaskUseDeferredvalue';

function App() {
  return (
    <div className="App">
      <AutomaticBatcing />
      <hr />
      <Transition />
      <hr />
    </div>
  );
}

export default App;
