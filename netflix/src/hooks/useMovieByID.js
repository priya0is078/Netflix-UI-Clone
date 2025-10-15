import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constant";
import { getTrailerMovie } from "../redux/MovieSlice";

const useMovieByID = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          TMDB_OPTIONS
        );

        const trailers = res.data.results.filter(item => item.type === "Trailer");
        const trailer = trailers.length > 0 ? trailers[0] : res.data.results[0];
        dispatch(getTrailerMovie(trailer));
      } catch (err) {
        console.error(err);
      }
    };

    fetchTrailer();
  }, [movieId, dispatch]);
};

export default useMovieByID;
