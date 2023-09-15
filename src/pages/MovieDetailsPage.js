import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/api';
import { useState, useEffect } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  // console.log(movieId);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovieInfoById = async () => {
      try {
        const data = await fetchMovieDetailsById(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovieInfoById();
  }, [movieId]);

  return (
    <>
      <MovieDetails movieInfo={movieInfo} />
    </>
  );
};

export default MovieDetailsPage;
