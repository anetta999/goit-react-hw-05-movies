import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/api';
import { useState, useEffect, useRef, Suspense } from 'react';
import {
  AdditionalInfoLink,
  GoBackBtn,
} from 'components/Searchbar/Searchbar.styled';
import { Container } from 'components/Container';
import {
  AdditionalInfoSection,
  StyledSection,
} from 'components/Section.styled';
import {
  AdditionalInfoListItem,
  AdditionalInfoTitle,
} from './MovieDetailsPage.styled';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getMovieInfoById = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieDetailsById(movieId);
        setMovieInfo(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovieInfoById();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error &&
        !loading &&
        toast.error('Something went wrong, please try reloading the page', {
          duration: 5000,
        })}
      <StyledSection>
        <Container>
          <Link to={backLinkLocationRef.current}>
            <GoBackBtn type="button">Go back</GoBackBtn>
          </Link>

          {movieInfo && <MovieDetails movieInfo={movieInfo} />}
        </Container>
      </StyledSection>
      <AdditionalInfoSection>
        <Container>
          <ul>
            <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
            <AdditionalInfoListItem>
              <Link to="cast">
                <AdditionalInfoLink type="button">Cast</AdditionalInfoLink>
              </Link>
            </AdditionalInfoListItem>
            <AdditionalInfoListItem>
              <Link to="reviews">
                <AdditionalInfoLink type="button">Reviews</AdditionalInfoLink>
              </Link>
            </AdditionalInfoListItem>
          </ul>
        </Container>
      </AdditionalInfoSection>
      <StyledSection>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </StyledSection>
      <Toaster position="top-right" />
    </>
  );
};

export default MovieDetailsPage;
