import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '86824f16905540caf32a2109bda1bd06';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieDetailsById = async movieId => {
  const response = await axios.get(
    `/movie/${Number(movieId)}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchCastById = async movieId => {
  const response = await axios.get(
    `/movie/${Number(movieId)}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchReviewsById = async movieId => {
  const response = await axios.get(
    `/movie/${Number(movieId)}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=true&language=en-US`
  );
  return response.data;
};
