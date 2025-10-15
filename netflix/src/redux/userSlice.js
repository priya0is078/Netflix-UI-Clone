// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name: "user",
//     initialState: null,  // ✅ Initial state is null
//     reducers: {
//         setUser: (state, action) => {
//             console.log("🟢 Setting User in Redux:", action.payload); // ✅ Debug Log
//             return action.payload; // ✅ Store user data
//         },
//         clearUser: () => null // ✅ Logout function
//     }
// });

// export const { setUser, clearUser } = userSlice.actions;
// export default userSlice.reducer;

// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Function to get initial user from localStorage
const getInitialUser = () => {
  try {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    return null;
  }
};

const initialState = {
  currentUser: getInitialUser(), // Get user from localStorage on initial load
  loading: false,    // These are the correct top-level loading/error states for the slice
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      // Destructure the actual user properties from the payload
      // and ignore any other properties like 'loading' or 'error' if they exist in the payload
      const { id, fullName, email, pin } = action.payload;
      state.currentUser = { id, fullName, email, pin }; // Set currentUser with only these specific properties
      
      state.loading = false; // Set the slice's loading state
      state.error = null;    // Clear the slice's error state
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('user'); // Also clear from localStorage on logout
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;