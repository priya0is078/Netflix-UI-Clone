import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Ensure the userSlice is correctly imported

const store = configureStore({
  reducer: {
    user: userReducer, // Ensure user reducer is added here
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable devtools in non-production environments
});

export default store;



