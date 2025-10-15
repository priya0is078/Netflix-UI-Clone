import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Upcoming_Movies, TMDB_OPTIONS } from "../utils/constant";
import { getUpcomingMovies } from "../redux/MovieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`${Upcoming_Movies}?language=en-US&page=1`, TMDB_OPTIONS);
        console.log("Upcoming:", res.data.results);
        dispatch(getUpcomingMovies(res.data.results));
      } catch (error) {
        console.error("Error fetching Upcoming movies:", error);
      }
    };
    fetchMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
