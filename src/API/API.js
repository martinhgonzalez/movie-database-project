const apiKey = "f48778fa26cf72e5fea94697c9ee8692";

function getGenresFromAPI() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(genres) {
      return genres;
    });
}

function getLatestMovie() {
  return fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US
      `
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(latestMovie) {
      return latestMovie;
    });
}

function getNowPlayingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1    
      ` //Only page 1.
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(nowPlayingMovies) {
      return nowPlayingMovies.results;
    });
}
function getPopularMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1    
        ` //Only page 1.
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(popularMovies) {
      return popularMovies.results;
    });
}
function getTopRatedMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1
    
        ` //Only page 1.
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(topRatedMovies) {
      return topRatedMovies.results;
    });
}

function getUpcomingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1` //Only page 1.
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(upComingMovies) {
      return upComingMovies.results;
    });
}

function getMoviesBySearch(param) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${param}&page=1&include_adult=false` //Only page 1.
  )
    .then(function(res) {
      return res.json();
    })
    .then(function(moviesSearched) {
      return moviesSearched.results;
    });
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
