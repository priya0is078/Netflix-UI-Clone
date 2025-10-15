// src/redux/MovieSlice.js
// src/redux/MovieSlice.js
// src/redux/MovieSlice.js
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    toggle: false,
    trailerMovie: [],
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle; // Toggle the boolean value
    },
    getTrailerMovie:(state,action) =>{
      state.trailerMovie = action.payload;
    },

  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  setToggle,
  getTrailerMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
