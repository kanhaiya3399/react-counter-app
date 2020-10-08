import React, {useState} from 'react';
import "./App.css"

function App() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>React count down app</h1>
      </header>
      <h2>Set count {counter}</h2>
      <button onClick={() => (counter >= 20 ? "" : setCounter(counter + 1))}>
        Increase counter
      </button>
      <button onClick={() => (counter <= 0 ? "" : setCounter(counter - 1))}>
        Decrease counter
      </button>
      <button onClick={() => setCounter(counter === 0)}>Reset counter</button>
    </div>
  );
}

export default App;
