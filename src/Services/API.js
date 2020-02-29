const apiKey = "f48778fa26cf72e5fea94697c9ee8692";

async function getGenresFromAPI() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  const genres = await res.json();
  return genres.genres;
}

async function getNowPlayingMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}    
      `
  );
  const nowPlaying = await res.json();
  return nowPlaying.results;
}

async function getPopularMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}    
        `
  );
  const popularMovies = await res.json();
  return popularMovies.results;
}
async function getTopRatedMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}
    
        `
  );
  const topRatedMovies = await res.json();
  return topRatedMovies.results;
}

async function getUpcomingMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
  );
  const upcomingMovies = await res.json();
  return upcomingMovies.results;
}

async function getMoviesBySearch(param, page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${param}&page=${page}&include_adult=false` //Only page 1.
  );
  const searchedMovies = await res.json();

  return searchedMovies.results;
}

export {
  getGenresFromAPI,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMoviesBySearch
};
