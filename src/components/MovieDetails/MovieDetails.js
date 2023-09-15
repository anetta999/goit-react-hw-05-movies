const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieDetails = ({ movieInfo }) => {
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  // release_date;
  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h1>{title}</h1>
      <p>User score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && (
        <ul>
          {genres.map(({ id, name }) => {
            return (
              <li key={id}>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
