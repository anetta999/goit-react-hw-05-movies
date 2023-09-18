import {
  MovieCard,
  MovieCardText,
  MovieSecondSubTitle,
  MovieSubTitle,
  MovieTitle,
  GenresText,
  GenresItem,
  MovieImg,
} from './MovieDetails.styled';

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
    <MovieCard>
      <MovieImg
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <div>
        <MovieTitle>
          {title} (
          {release_date ? getReleaseYear(release_date) : 'not published yet'})
        </MovieTitle>
        <MovieCardText>User score: {userScorePercentage}%</MovieCardText>
        <MovieSubTitle>Overview</MovieSubTitle>
        <MovieCardText>
          {overview ? overview : 'not published yet'}
        </MovieCardText>
        <MovieSecondSubTitle>Genres</MovieSecondSubTitle>
        {genres?.length > 0 ? (
          <ul>
            {genres.map(({ id, name }) => {
              return (
                <GenresItem key={id}>
                  <GenresText>{name}</GenresText>
                </GenresItem>
              );
            })}
          </ul>
        ) : (
          <MovieCardText>not published yet</MovieCardText>
        )}
      </div>
    </MovieCard>
  );
};
