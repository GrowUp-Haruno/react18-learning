import './App.css';
import { AutomaticBatcing } from './components/AutomaticBatcing';
import { Suspense } from './components/Suspense';
import { Transition } from './components/Transition';

function App() {
  return (
    <div className="App">
      <AutomaticBatcing />
      <hr />
      <Transition />
      <hr />
      <Suspense />
    </div>
  );
}

export default App;
