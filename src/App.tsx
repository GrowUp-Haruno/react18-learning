import { useState } from 'react';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchSetTimeout } from './components/AutoBatchSetTimeout';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchSetTimeout />
    </div>
  );
}

export default App;
