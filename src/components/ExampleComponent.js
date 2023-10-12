import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice'; // Adjust the import path as needed

const ExampleComponent = () => {
  const count = useSelector((state) => state.counter); // Access the counter state
  const dispatch = useDispatch(); // Get the dispatch function to dispatch actions

  return (
    <div>
      <h2>Example Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ExampleComponent;
