const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const getReleaseYear = date => {
  let releaseDate = new Date(date);
  return releaseDate.getFullYear();
};

export const MovieDetails = ({ movieInfo }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movieInfo;

  const userScorePercentage = Math.round((vote_average * 100) / 10);

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
      <h1>
        {title} (
        {release_date ? getReleaseYear(release_date) : 'not published yet'})
      </h1>
      <p>User score: {userScorePercentage}%</p>
      <h2>Overview</h2>
      <p>{overview ? overview : 'not published yet'}</p>
      <h3>Genres</h3>
      {genres?.length > 0 ? (
        <ul>
          {genres.map(({ id, name }) => {
            return (
              <li key={id}>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>not published yet</p>
      )}
    </div>
  );
};
