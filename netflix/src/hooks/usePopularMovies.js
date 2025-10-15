// src/hooks/usePopularMovies.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/MovieSlice";
import { TMDB_OPTIONS, Popular_Movie } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await fetch(Popular_Movie, TMDB_OPTIONS);
        const data = await res.json();
        console.log("Popular Movies API Response:", data);

        dispatch(getPopularMovies(data.results || []));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        dispatch(getPopularMovies([]));
      }
    };

    fetchPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
