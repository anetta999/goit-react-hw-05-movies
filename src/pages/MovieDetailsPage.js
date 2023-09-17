import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/api';
import { useState, useEffect, useRef, Suspense } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  // console.log(movieId);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovieInfoById = async () => {
      try {
        const data = await fetchMovieDetailsById(movieId);
        setMovieInfo(data);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovieInfoById();
  }, [movieId]);

  return (
    <>
      <button type="button">
        <Link to={backLinkLocationRef.current}>Go back</Link>
      </button>
      <MovieDetails movieInfo={movieInfo} />
      <ul>
        <p>Additional information</p>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
