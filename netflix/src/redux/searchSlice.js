import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieName: "",
    searchedMovies: [], // ✅ use consistent lowercase
  },
  reducers: {
    setSearchedMoviesDetails: (state, action) => {
      const { movieName, movies } = action.payload;
      state.movieName = movieName;
      state.searchedMovies = movies;
    },
  },
});

export const { setSearchedMoviesDetails } = searchSlice.actions;
export default searchSlice.reducer;
