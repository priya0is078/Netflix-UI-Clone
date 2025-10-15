// import { useSelector } from "react-redux";
// import useMovieByID from "../hooks/useMovieByID";

// const Videobackground = ({ movieId }) => {
//   const trailerMovie = useSelector(store => store.movie.trailerMovie);

//   useMovieByID(movieId);

//   if (!trailerMovie) return null; // Wait until trailer is fetched

//   return (
//     <div className="w-screen">
//       <iframe
//         className="w-screen aspect-video"
//         frameBorder="0"
//         src={`https://www.youtube.com/embed/${trailerMovie.key}?mute=1`}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default Videobackground;

import React from 'react';
import { useSelector } from 'react-redux';
import useMovieByID from '../hooks/useMovieByID';

const Videobackground = ({ movieId }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);

  useMovieByID(movieId);

  if (!trailerMovie) return null; // wait until trailer data is available

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default Videobackground;
