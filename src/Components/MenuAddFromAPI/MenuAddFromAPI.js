import React from "react";
import "./menuAddFromAppi.css";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMoviesBySearch
} from "../../Services/API";

function MenuAddFromAPI(props) {
  //
  const handleClick = param => {
    if (param === "nowPlaying") {
      getNowPlayingMovies().then(movies => {
        props.sendArray(movies);
      });
    } else if (param === "popular") {
      getPopularMovies().then(movies => {
        props.sendArray(movies);
      });
    } else if (param === "topRated") {
      getTopRatedMovies().then(movies => {
        props.sendArray(movies);
      });
    } else if (param === "upcoming") {
      getUpcomingMovies().then(movies => {
        props.sendArray(movies);
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    getMoviesBySearch(e.target.firstElementChild.value).then(movies => {
      props.sendArray(movies);
    });
    e.target.reset();
  };

  return (
    <>
      <ul>
        <li
          onClick={() => handleClick("nowPlaying")}
          className="waves-effect waves-light btn-small"
        >
          Now Playing
        </li>
        <li
          onClick={() => handleClick("popular")}
          className="waves-effect waves-light btn-small"
        >
          Popular
        </li>
        <li
          onClick={() => handleClick("topRated")}
          className="waves-effect waves-light btn-small"
        >
          Top Rated
        </li>
        <li
          onClick={() => handleClick("upcoming")}
          className="waves-effect waves-light btn-small"
        >
          Get Upcoming
        </li>

        <li>
          <form onSubmit={handleSubmit}>
            <input
              id="first_name2"
              type="text"
              className="validate #bcaaa4 brown lighten-3"
              placeholder="Search"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </li>
      </ul>
    </>
  );
}

export default MenuAddFromAPI;
