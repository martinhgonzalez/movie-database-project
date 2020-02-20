import React from "react";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import User from "./Pages/User";
import Routs from "./Components/Routs";


const apiKey = "f48778fa26cf72e5fea94697c9ee8692";

function App() {
  function getGenresFromAPI() {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(genres) {
        console.log(genres);
      });
  }

  function getLatestMovie() {
    fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US
      `
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(latestMovie) {
        console.log(latestMovie);
      });
  }

  function getNowPlayingMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1    
      ` //Only page 1.
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(nowPlayingMovies) {
        console.log(nowPlayingMovies.results);
      });
  }
  function getPopularMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1    
        ` //Only page 1.
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(popularMovies) {
        console.log(popularMovies.results);
      });
  }
  function getTopRatedMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1
    
        ` //Only page 1.
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(topRatedMovies) {
        console.log(topRatedMovies.results);
      });
  }

  function getUpcomingMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1` //Only page 1.
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(upComingMovies) {
        console.log(upComingMovies.results);
      });
  }

  function getMoviesBySearch(param) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${param}&page=1&include_adult=false` //Only page 1.
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(moviesSearched) {
        console.log(moviesSearched.results);
      });
  }

  getGenresFromAPI();
  getLatestMovie();
  getNowPlayingMovies();
  getPopularMovies();
  getTopRatedMovies();
  getUpcomingMovies();
  getMoviesBySearch("pokemon");

  return (
    <div>
      {/* <User /> */}
      {/* <Admin /> */}
      {/* <CardContainer /> */}
      {/* <Nav/> */}
      <Routs/>
    

    </div>
  );
}

export default App;
