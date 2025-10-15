// import React, { useState } from 'react';
// import axios from "axios";
// import { TMDB_OPTIONS, SEARCH_MOVIE_URL } from '../utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedMoviesDetails } from '../redux/searchSlice';
// import { setLoading } from '../redux/userSlice';
// import MovieList from './MovieList';

// const SearchMovies = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const dispatch = useDispatch();
//   const isLoading = useSelector(store => store.user.isLoading);
//   const { movieName, searchedMovies } = useSelector(store => store.search);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) return;

//     dispatch(setLoading(true));
//     try {
//       const res = await axios.get(
//         `${SEARCH_MOVIE_URL}${searchQuery}&include_adult=false&language=en-US&page=1`,
//         TMDB_OPTIONS
//       );
//       console.log(res.data.results);
//       const movies = res?.data?.results;
//       dispatch(setSearchedMoviesDetails({ movieName: searchQuery, movies }));
//     } catch (error) {
//       console.error("Search error:", error);
//     } finally {
//       dispatch(setLoading(false));
//     }

//     setSearchQuery("");
//   };

//   return (
//     <div className='flex flex-col items-center pt-[10%] bg-black min-h-screen text-white'>
//       <form onSubmit={submitHandler} className='w-[50%] mb-8'>
//         <div className='flex justify-between shadow-md border-2 border-gray-200 p-2 rounded-lg w-full'>
//           <input
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className='w-full px-2 py-1 outline-none text-black'
//             type="text"
//             placeholder='Search Movies...'
//           />
//           <button className='bg-red-700 text-white rounded-md py-2 px-4'>
//             {isLoading ? "Loading..." : "Search"}
//           </button>
//         </div>
//       </form>

//       {/* Search Results */}
//       {searchedMovies?.length > 0 && (
//         <MovieList title={`Results for "${movieName}"`} movies={searchedMovies} />
//       )}
//     </div>
//   );
// };

// export default SearchMovies;



import React, { useState } from "react";
import axios from "axios";
import { TMDB_OPTIONS, SEARCH_MOVIE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMoviesDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.user.isLoading);
  const { movieName, searchedMovies } = useSelector((store) => store.search);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    dispatch(setLoading(true));

    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${encodeURIComponent(searchQuery)}&include_adult=false&language=en-US&page=1`,
        TMDB_OPTIONS
      );

      const movies = res?.data?.results || [];
      dispatch(setSearchedMoviesDetails({ movieName: searchQuery, movies }));
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      dispatch(setLoading(false));
    }

    setSearchQuery("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-32 px-8 relative z-50 bg-black">
      {/* ✅ Added pt-32 (push down below header) and z-50 (above header) */}

      <form onSubmit={submitHandler} className="w-full max-w-xl mb-8">
        <div className="flex border-2 border-gray-500 rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Movies..."
            className="flex-1 px-4 py-2 outline-none text-black"
          />
          <button
            type="submit"
            className="bg-red-700 text-white px-4 py-2 hover:bg-red-800 transition"
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </div>
      </form>

      {searchedMovies?.length > 0 ? (
        <MovieList title={`Results for "${movieName}"`} movies={searchedMovies} />
      ) : (
        !isLoading && <p className="text-white text-lg">No movies found.</p>
      )}
    </div>
  );
};

export default SearchMovies;

// import React, { useState } from "react";
// import axios from "axios";
// import { TMDB_OPTIONS, SEARCH_MOVIE_URL } from "../utils/constant";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchedMoviesDetails } from "../redux/searchSlice";
// import { setLoading } from "../redux/userSlice";
// import MovieCard from "./MovieCard";

// const SearchMovies = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const dispatch = useDispatch();
//   const isLoading = useSelector((store) => store.user.isLoading);
//   const { movieName, searchedMovies } = useSelector((store) => store.search);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) return;

//     dispatch(setLoading(true));

//     try {
//       const res = await axios.get(
//         `${SEARCH_MOVIE_URL}${searchQuery}&include_adult=false&language=en-US&page=1`,
//         TMDB_OPTIONS
//       );
//       const movies = res?.data?.results || [];
//       dispatch(setSearchedMoviesDetails({ movieName: searchQuery, movies }));
//     } catch (error) {
//       console.error("Search error:", error);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   return (
//     <div className="px-8 pt-12">
//       <form onSubmit={submitHandler} className="mb-8 max-w-xl mx-auto flex">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search Movies..."
//           className="flex-1 px-4 py-2 rounded-l-lg outline-none"
//         />
//         <button
//           type="submit"
//           className="bg-red-700 text-white px-4 py-2 rounded-r-lg"
//         >
//           {isLoading ? "Loading..." : "Search"}
//         </button>
//       </form>

//       {searchedMovies?.length > 0 ? (
//         <div>
//           <h2 className="text-3xl text-white mb-4">
//             Results for "{movieName}"
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//             {searchedMovies.map((movie) => (
//               <MovieCard
//                 key={movie.id}
//                 posterPath={movie.poster_path}
//                 title={movie.title || movie.name}
//               />
//             ))}
//           </div>
//         </div>
//       ) : (
//         !isLoading && <p className="text-white text-center mt-8">No movies found</p>
//       )}
//     </div>
//   );
// };

// export default SearchMovies;


