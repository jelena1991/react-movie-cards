import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovie from '../../services/AddMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = () => {
    console.log(movies);
  };

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <div className="col-sm-12 pb-5">
            <h1>Add movie</h1>
            <AddMovie addMovie={addMovie} />
          </div>
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
