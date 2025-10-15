// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice'; // Ensure the userSlice is correctly imported

// const store = configureStore({
//   reducer: {
//     user: userReducer, // Ensure user reducer is added here
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './MovieSlice';
import searchReducer from './searchSlice'; // ✅ better name

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,  // ✅ use lowercase 'search' (matches slice name and useSelector)
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
