import React, { useState, useEffect } from 'react';

function AddMovie({ addMovie }) {
  const [movie, setMovie] = useState([]);
  const [movieTitle, setMovieTitle] = useState();
  const [movieSubtitle, setMovieSubtitle] = useState();
  const [movieUrl, setMovieUrl] = useState();
  const [movieDescription, setMovieDescription] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    const _movie = {
      title: event.target.title.value,
      url: event.target.url.value,
      subtitle: event.target.subtitle.value,
      description: event.target.description.value,
    };

    setMovie(_movie);
  };

  const addMovie = () => {
    return movie;
  };

  //   const handleSubmit = test => {
  //     console.log('test');
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Movie url" name="url" value={movieUrl} />
      <input type="text" placeholder="Title" name="title" value={movieTitle} />
      <input type="text" placeholder="Subtitle" name="subtitle" value={movieSubtitle} />
      <input type="text" placeholder="Description" name="description" value={movieDescription} />
      <button onClick={addMovie}>Add Movie</button>
    </form>
  );
}

export default AddMovie;
