import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Top_Rated_Movies, TMDB_OPTIONS } from "../utils/constant";
import { getTopRatedMovies } from "../redux/MovieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`${Top_Rated_Movies}?language=en-US&page=1`, TMDB_OPTIONS);
        console.log("Top Rated:", res.data.results);
        dispatch(getTopRatedMovies(res.data.results));
      } catch (error) {
        console.error("Error fetching Top Rated movies:", error);
      }
    };
    fetchMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;

