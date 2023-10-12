import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice'; // Adjust the import path as needed

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more slices as needed
  },
});

export default store;
