import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList'; // ✅ default import

const MovieContainer = ({ category }) => {
  const movies = useSelector((store) => {
    switch (category) {
      case "Now Playing":
        return store.movie.nowPlayingMovies;
      case "Popular":
        return store.movie.popularMovies; // ✅ match your slice name
      case "Top Rated":
        return store.movie.topRatedMovies;
      case "Upcoming":
        return store.movie.upcomingMovies;
      default:
        return [];
    }
  });

  return <MovieList title={category} movies={movies} />;
};

export default MovieContainer;
