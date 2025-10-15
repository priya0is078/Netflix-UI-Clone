import axios from "axios";

// 1. Export your Backend API Base URL
export const API_END_POINT = "http://localhost:9080/api/v1";

// 2. Create an Axios instance for your Backend API
// This instance will have withCredentials: true
export const axiosInstance = axios.create({
  baseURL: API_END_POINT,
  withCredentials: true, // This is specific to your backend API
});

// 3. Define options for TMDB API (no withCredentials here!)
export const TMDB_OPTIONS = { // Renamed from 'options' to be more specific
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Your TMDB Bearer token is correctly placed here
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDE3N2I2YjM3NjIwM2E5MDE4OWU4ZWZiNjY4YTlhMSIsIm5iZiI6MTc0OTEyMTgwOC41NzIsInN1YiI6IjY4NDE3YjEwZTE2NmE5NzRkOTQ1NjEyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KGn4FX8eGiKK8NPOj6xYk5LE9hRKl_wkqosJPbRkOhY'
    // Paste the token YOU provided into the line above.
    // Ensure there's a space after 'Bearer ' and then your token.
  }
};

// 4. Export TMDB API Endpoints
export const Now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";


export const TMDB_URL = "https://image.tmdb.org/t/p/w500";

