// import React from 'react';
// import MovieCard from './MovieCard';

// const MovieList = ({ title, movies }) => {
//   console.log(movies);

//   return (
//     <div className="px-8 mt-8">
//       <h1 className="text-3xl text-white mb-4">{title}</h1>
//       <div className="flex overflow-x-auto gap-4 no-scrollbar cursor-pointer">
//         {movies && movies.length > 0 ? (
//           movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
             
//             posterPath={movie.poster_path} // TMDB API poster path
//               title={movie.title}
//             />
//           ))
//         ) : (
//           <p className="text-white">No movies available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieList;



// src/components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-8 mt-8">
      <h1 className="text-3xl py-4 text-white mb-4">{title}</h1>

      {/* Grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              rating={movie.vote_average}
            />

          ))
        ) : (
          <p className="text-white">No movies available</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;



// import React from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   return (
//     <div className="px-8 mt-8">
//       <h1 className="text-3xl text-white mb-4">{title}</h1>
//       <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2">
//         {movies?.length > 0 ? (
//           movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               posterPath={movie.poster_path}
//               title={movie.title || movie.name}
//             />
//           ))
//         ) : (
//           <p className="text-white">No movies available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieList;
