export const MovieDetails = ({ movieInfo }) => {
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  // release_date;
  return (
    <div>
      <img src={poster_path} alt={title} />
      <h1>{title}</h1>
      <p>User score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && (
        <ul>
          {genres.map(genre => {
            return (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
