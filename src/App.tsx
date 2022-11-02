import './App.css';
import { AutoBatchEventHandler } from './components/AutomaticBatcing/AutoBatchEventHandler';
import { AutoBatchEventHandlerAsyncAwait } from './components/AutomaticBatcing/AutoBatchEventHandlerAsyncAwait';
import { AutoBatchPromise } from './components/AutomaticBatcing/AutoBatchPromise';
import { AutoBatchSetTimeout } from './components/AutomaticBatcing/AutoBatchSetTimeout';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchSetTimeout />
      <AutoBatchPromise />
      <AutoBatchEventHandlerAsyncAwait />
    </div>
  );
}

export default App;
