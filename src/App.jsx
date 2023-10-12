import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice'; // Import your feature slice
import './App.css';
<div></div>

function App() {
  const count = useSelector((state) => state.counter); // Access the counter state
  const dispatch = useDispatch(); // Get the dispatch function to dispatch actions

  return (
    <div className="App">
      { <header className="App-header">
        <h1>Redux Toolkit Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header> }
    </div>
  );
}

export default App;
