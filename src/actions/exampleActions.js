import { increment, decrement } from '../features/counterSlice'; // Import your feature slice

// Custom action creators
export const customIncrementAction = (amount) => (dispatch) => {
  dispatch(increment(amount));
};

export const customDecrementAction = (amount) => (dispatch) => {
  dispatch(decrement(amount));
};
