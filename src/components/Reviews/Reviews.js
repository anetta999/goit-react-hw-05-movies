import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';
import { useState, useEffect } from 'react';
import { ReviewsListItem, ReviewsText, ReviewsTitle } from './Reviews.styled';
import { ReviesNotification } from 'pages/HomePage.styled';

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
      {loading && <p>LOADING</p>}
      {error && !loading && (
        <p>Something went wrong, please try reloading the page</p>
      )}
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
    </>
  );
};

export default Reviews;
