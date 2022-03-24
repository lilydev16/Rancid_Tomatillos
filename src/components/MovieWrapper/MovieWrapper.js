import React from 'react';

function MovieWrapper({ movies }) {
  return movies.map(movie => {
    const {
      average_rating: rating,
      backdrop_path: backDropPath,
      id,
      poster_path: posterPath,
      release_date: releaseDate,
      title
    } = movie;
    return (
      <Movie
        rating={rating}
        backDropPath={backDropPath}
        id={id}
        posterPath={posterPath}
        releaseDate={releaseDate}
        title={title}
      />
    );
  });
}

export default MovieWrapper;
