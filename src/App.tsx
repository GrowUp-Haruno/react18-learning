import './App.css';
import { AutomaticBatcing } from './components/AutomaticBatcing';
import { SuspenseL } from './components/Suspense';
import { Transition } from './components/Transition';

function App() {
  return (
    <div className="App">
      <AutomaticBatcing />
      <hr />
      <Transition />
      <hr />
      <SuspenseL />
    </div>
  );
}

export default App;
