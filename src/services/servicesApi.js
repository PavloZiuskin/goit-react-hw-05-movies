import axios from 'axios';

const KEY_API = 'e32bfdef8b19fee5cb99e2b4c56ab1dd';
const agent = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: KEY_API },
});

export async function getMoviesByQuery(query) {
  const movies = await agent.get('search/movie', {
    params: {
      query,
    },
  });
  return movies.data.results;
}
export async function getTrendingMovies() {
  const movies = await agent.get('trending/movie/day');
  return movies.data.results;
}

export async function getMoviesDetaisById(id) {
  const movies = await agent.get(`movie/${id}`);
  return movies.data;
}
export async function getCast(id) {
  const actors = await agent.get(`movie/${id}/credits`);
  return actors.data.cast;
}
export async function getReviews(id) {
  const actors = await agent.get(`movie/${id}/reviews`);
  return actors.data.results;
}
