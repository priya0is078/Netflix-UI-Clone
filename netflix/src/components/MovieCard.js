// import React from 'react';
// import { TMDB_URL } from '../utils/constant';

// const MovieCard = ({ posterPath, title }) => {
//   return (
//     <div className="w-40 flex-shrink-0 pr-2">
//       <img
//         src={posterPath ? `${TMDB_URL}${posterPath}` : "/fallback.jpg"}
//         alt={title || "movie-banner"}
//         className="w-full rounded-md"
//       />
//     </div>
//   );
// };

// export default MovieCard;


// src/components/MovieCard.js


// import React from "react";
// import { TMDB_URL } from "../utils/constant";

// function MovieCard({ posterPath, title }) {
//   return (
//     <div className="w-48 flex-shrink-0 mr-4 relative -mt-16 z-20"> 
//       {/* -mt-16 moves it up, z-20 ensures it appears above other content */}
//       <img
//         src={`${TMDB_URL}${posterPath}`}
//         alt={title}
//         className="rounded-lg w-full h-72 object-cover shadow-lg"
//       />
//       <p className="text-black text-sm mt-2">{title}</p>
//     </div>
//   );
// }

// export default MovieCard;


// import React from "react";
// import { TMDB_URL } from "../utils/constant";

// function MovieCard({ posterPath, title }) {
//   return (
//     <div className="w-48 flex-shrink-0 mr-4 relative -mt-16 z-20">
//       <img
//         src={`${TMDB_URL}${posterPath}`}
//         alt={title}
//         className="rounded-lg w-full h-72 object-cover shadow-lg"
//       />
//       {/* White text on dark background */}
//       <p className="text-white text-sm mt-2 text-center">{title}</p>
//     </div>
//   );
// }

// export default MovieCard;


// import React from "react";
// import { TMDB_URL } from "../utils/constant";
// import { FaPlay, FaPlus } from "react-icons/fa";

// function MovieCard({ posterPath, title, overview, rating }) {
//   return (
//     <div className="relative w-48 flex-shrink-0 mr-4 cursor-pointer">
      
//       {/* Poster */}
//       <img
//         src={`${TMDB_URL}${posterPath}`}
//         alt={title}
//         className="rounded-lg w-full h-72 object-cover shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-4 z-0"
//       />

//       {/* Hover Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 z-10">
        
//         {/* Movie Info */}
//         <div>
//           <h2 className="text-white font-bold text-sm mb-1">{title}</h2>
//           <p className="text-gray-300 text-xs mb-2 line-clamp-3">{overview}</p>
//           <p className="text-yellow-400 text-sm font-semibold">⭐ {rating}</p>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between mt-2">
//           <button className="bg-white text-black px-3 py-1 text-xs rounded flex items-center gap-1 hover:bg-gray-200 transition">
//             <FaPlay /> Play
//           </button>
//           <button className="bg-gray-700 text-white px-3 py-1 text-xs rounded flex items-center gap-1 hover:bg-gray-600 transition">
//             <FaPlus /> My List
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;



import React from "react";
import { TMDB_URL } from "../utils/constant";
import { FaPlay, FaPlus } from "react-icons/fa";

function MovieCard({ posterPath, title, overview, rating }) {
  return (
    <div className="relative w-48 flex-shrink-0 mr-4 cursor-pointer">
      
      {/* Poster */}
      <img
        src={`${TMDB_URL}${posterPath}`}
        alt={title}
        className="rounded-lg w-full h-72 object-cover shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-4 z-0"
      />

      {/* Hover Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 z-10">
        
        {/* Movie Info */}
        <div>
          <h2 className="text-white font-bold text-sm mb-1">{title}</h2>
          <p className="text-gray-300 text-xs mb-2 line-clamp-3">{overview}</p>
          <p className="text-yellow-400 text-sm font-semibold">⭐ {rating}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-2">
          <button className="bg-white text-black px-3 py-1 text-xs rounded flex items-center gap-1 hover:bg-gray-200 transition">
            <FaPlay /> Play
          </button>
          <button className="bg-gray-700 text-white px-3 py-1 text-xs rounded flex items-center gap-1 hover:bg-gray-600 transition">
            <FaPlus /> My List
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
