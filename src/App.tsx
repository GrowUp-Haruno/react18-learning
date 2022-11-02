import './App.css';
import { AutoBatchEventHandler } from './components/AutomaticBatcing/AutoBatchEventHandler';
import { AutoBatchEventHandlerAsyncAwait } from './components/AutomaticBatcing/AutoBatchEventHandlerAsyncAwait';
import { AutoBatchFlushSync } from './components/AutomaticBatcing/AutoBatchFlushSync';
import { AutoBatchPromise } from './components/AutomaticBatcing/AutoBatchPromise';
import { AutoBatchSetTimeout } from './components/AutomaticBatcing/AutoBatchSetTimeout';
import { TaskList } from './components/Transition/TaskList';

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
      <TaskList />
    </div>
  );
}

export default App;
