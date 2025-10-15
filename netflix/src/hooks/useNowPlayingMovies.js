import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Now_Playing_Movies, TMDB_OPTIONS } from "../utils/constant";
import { getNowPlayingMovies } from "../redux/MovieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`${Now_Playing_Movies}?language=en-US&page=1`, TMDB_OPTIONS);
        console.log("Now Playing:", res.data.results);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.error("Error fetching Now Playing movies:", error);
      }
    };
    fetchMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
