import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/MovieSlice";

const TrailerPlayer = () => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailerMovie);

  const handleClose = () => {
    dispatch(getTrailerMovie([])); // Clear trailer
  };

  if (!trailer?.key) return null; // No trailer to play

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl h-[60vh]">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`}
          title="Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-red-700 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TrailerPlayer;

