// import React from 'react'
// import VideoTitle from './VideoTitle'
// import Videobackground from './Videobackground'
// import { useSelector } from 'react-redux'


// const MainContainer = () => {
//   const movie=useSelector(store=>store.movie?.nowPlayingMovies);
//   if(!movie) return; //early return in react
  

//   const {overview,id,title} = movie[4];
//   return (
//     <div>MovieContanier
//         <VideoTitle title = {title} overview = {overview}/>
//         <Videobackground movieId={id}/>
//     </div>
//   )
// }

// export default MainContainer

import React from "react";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  // Handle empty state
  if (!movies || movies.length === 0) {
    return (
      <div className="text-white text-center p-8">
        Loading movies...
      </div>
    );
  }

  // Pick either a fixed index safely or a random one
  const randomIndex = Math.floor(Math.random() * movies.length);
  const { overview, id, title } = movies[randomIndex];

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <Videobackground movieId={id} />
    </div>
  );
};

export default MainContainer;
