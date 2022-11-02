import './App.css';
import { AutoBatchEventHandler } from './components/AutomaticBatcing/AutoBatchEventHandler';
import { AutoBatchPromise } from './components/AutomaticBatcing/AutoBatchPromise';
import { AutoBatchSetTimeout } from './components/AutomaticBatcing/AutoBatchSetTimeout';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchSetTimeout />
      <AutoBatchPromise />
    </div>
  );
}

export default App;
