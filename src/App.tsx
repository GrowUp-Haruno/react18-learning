import './App.css';
import { AutoBatchEventHandler } from './components/AutomaticBatcing/AutoBatchEventHandler';
import { AutoBatchEventHandlerAsyncAwait } from './components/AutomaticBatcing/AutoBatchEventHandlerAsyncAwait';
import { AutoBatchFlushSync } from './components/AutomaticBatcing/AutoBatchFlushSync';
import { AutoBatchPromise } from './components/AutomaticBatcing/AutoBatchPromise';
import { AutoBatchSetTimeout } from './components/AutomaticBatcing/AutoBatchSetTimeout';
import { Task } from './components/Transition/Task';
import { TaskUseDeferredvalue } from './components/Transition/TaskUseDeferredvalue';

function App() {
  return (
    <div className="App">
      <p>AutomaticBatching</p>
      <AutoBatchEventHandler />
      <AutoBatchSetTimeout />
      <AutoBatchPromise />
      <AutoBatchEventHandlerAsyncAwait />
      <AutoBatchFlushSync />
      <hr />
      <p>Transition</p>
      <Task />
      <p>Transition（useDeferredValue）</p>
      <TaskUseDeferredvalue />
    </div>
  );
}

export default App;
