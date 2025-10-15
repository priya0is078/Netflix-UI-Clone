// import React,{useEffect}from 'react'
// import Header from './Header'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom';


// const Browse = () => {
//   const user = useSelector(store=>store.app.user);
//   const navigate = useNavigate();
//   useEffect(() => {
//       if(!user){
//       navigate("/");
//     }
//   },[]);
  
//   return (
//     <div>
//         <Header/>
//         <div>
            
//         </div>
//     </div>
//   )
// }

// export default Browse


// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import Header from './Header';
// import MainContainer from './MainContainer';
// import MovieContainer from './MovieContainer'; // ✅ Corrected spelling

// // Custom hooks
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
// import usePopularMovies from '../hooks/usePopularMovies';
// import useTopRatedMovies from '../hooks/useTopRatedMovies';
// import useUpcomingMovies from '../hooks/useUpcomingMovies';

// const Browse = () => {
//   const user = useSelector((store) => store.user.currentUser);
//   const navigate = useNavigate();

//   // Fetch movies using hooks
//   useNowPlayingMovies();
//   usePopularMovies();
//   useTopRatedMovies();
//   useUpcomingMovies();

//   // Redirect if user not logged in
//   useEffect(() => {
//     if (!user) {
//       navigate("/");
//     }
//   }, [user, navigate]);

//   return (
//     <div className="bg-black min-h-screen">
//       <Header />
//       <MainContainer />

//       <div className="px-8 mt-8">
//         {/* Movie lists */}
//         <MovieContainer category="Now Playing" />
//         <MovieContainer category="Popular" />
//         <MovieContainer category="Top Rated" />
//         <MovieContainer category="Upcoming" />
//       </div>
//     </div>
//   );
// };

// export default Browse;



// src/components/Browse.js

// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import Header from "./Header";
// import MainContainer from "./MainContainer";
// import MovieContainer from "./MovieContainer";

// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import usePopularMovies from "../hooks/usePopularMovies";
// import useTopRatedMovies from "../hooks/useTopRatedMovies";
// import useUpcomingMovies from "../hooks/useUpcomingMovies";

// const Browse = () => {
//   const user = useSelector((store) => store.user.currentUser);
//   const navigate = useNavigate();

//   useNowPlayingMovies();
//   usePopularMovies();
//   useTopRatedMovies();
//   useUpcomingMovies();

//   useEffect(() => {
//     if (!user) navigate("/");
//   }, [user, navigate]);

//   return (
//     <div className="bg-black min-h-screen">
//       <Header />
//       <MainContainer />
//       <MovieContainer />
//     </div>
//   );
// };

// export default Browse;

// src/components/Browse.js
// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import Header from './Header';
// import MainContainer from './MainContainer';
// import MovieContainer from './MovieContainer';
// import SearchMovies from './SearchMovies';

// // Custom hooks
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
// import usePopularMovies from '../hooks/usePopularMovies';
// import useTopRatedMovies from '../hooks/useTopRatedMovies';
// import useUpcomingMovies from '../hooks/useUpcomingMovies';

// const Browse = () => {
//   const user = useSelector((store) => store.user.currentUser);
//   const toggle = useSelector((store) => store.movie.toggle); // Redux toggle for search bar
//   const navigate = useNavigate();

//   // Fetch movies using hooks
//   useNowPlayingMovies();
//   usePopularMovies();
//   useTopRatedMovies();
//   useUpcomingMovies();

//   // Redirect if user not logged in
//   useEffect(() => {
//     if (!user) {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   return (
//     <div className="bg-black min-h-screen">
//       <Header />

//       {/* Render search bar if toggle is true */}
//       {toggle ? (
//         <SearchMovies />
//       ) : (
//         <>
//           <MainContainer />
//           <div className="px-8 mt-8">
//             <MovieContainer category="Now Playing" />
//             <MovieContainer category="Popular" />
//             <MovieContainer category="Top Rated" />
//             <MovieContainer category="Upcoming" />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Browse;


import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import SearchMovies from "./SearchMovies";

// Custom hooks to fetch movies
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const user = useSelector((store) => store.user.currentUser);
  const toggle = useSelector((store) => store.movie.toggle); // search toggle
  const navigate = useNavigate();

  // Fetch movies on mount
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {toggle ? (
        <SearchMovies />
      ) : (
        <>
          <MainContainer />

          <div className="px-8 mt-8 space-y-12">
            <MovieContainer category="Now Playing" />
            <MovieContainer category="Popular" />
            <MovieContainer category="Top Rated" />
            <MovieContainer category="Upcoming" />
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;
