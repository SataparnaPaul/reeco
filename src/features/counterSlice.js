import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the counter
const initialState = 0;

// Create a slice using Redux Toolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementByAmount: (state, action) => state + action.payload,
    decrementByAmount: (state, action) => state - action.payload,
  },
});

// Export the action creators
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
