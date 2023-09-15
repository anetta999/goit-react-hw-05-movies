import axios from 'axios';
// 86824f16905540caf32a2109bda1bd06
const API_KEY = '86824f16905540caf32a2109bda1bd06';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieDetailsById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${Number(
      movieId
    )}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

// export const fetchMoviesByQuery = async query => {
//   const response = await axios.get();
//   return response.data;
// };
