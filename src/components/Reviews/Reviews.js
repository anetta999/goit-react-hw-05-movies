import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { ReviewsListItem, ReviewsText, ReviewsTitle } from './Reviews.styled';
import { ReviesNotification } from 'pages/HomePage.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await fetchReviewsById(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error &&
        !loading &&
        toast.error('Something went wrong, please try reloading the page', {
          duration: 5000,
        })}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <ReviewsListItem key={id}>
                <ReviewsTitle>Author: {author}</ReviewsTitle>
                <ReviewsText>{content}</ReviewsText>
              </ReviewsListItem>
            );
          })}
        </ul>
      ) : (
        <ReviesNotification>
          We don't have any reviews for this movie
        </ReviesNotification>
      )}
      <Toaster position="top-right" />
    </>
  );
};

export default Reviews;
