const apiKey = "f48778fa26cf72e5fea94697c9ee8692";

async function getGenresFromAPI() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  const genres = await res.json();
  return genres.genres;
}

async function getLatestMovie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US
      `
  );
  const latestMovie = await res.json();
  return latestMovie;
}

async function getNowPlayingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1    
      ` //Only page 1.
  );
  const nowPlaying = await res.json();
  return nowPlaying.results;
}
async function getPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1    
        ` //Only page 1.
  );
  const popularMovies = await res.json();
  return popularMovies.results;
}
async function getTopRatedMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1
    
        ` //Only page 1.
  );
  const topRatedMovies = await res.json();
  return topRatedMovies.results;
}

async function getUpcomingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1` //Only page 1.
  );
  const upcomingMovies = await res.json();
  return upcomingMovies.results;
}

async function getMoviesBySearch(param) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${param}&page=1&include_adult=false` //Only page 1.
  );
  const searchedMovies = await res.json();
  return searchedMovies.results;
}

// getGenresFromAPI();
// getLatestMovie();
// getNowPlayingMovies();
// getPopularMovies();
// getTopRatedMovies();
// getUpcomingMovies();
// getMoviesBySearch("pokemon");

export {
  getGenresFromAPI,
  getLatestMovie,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMoviesBySearch
};
