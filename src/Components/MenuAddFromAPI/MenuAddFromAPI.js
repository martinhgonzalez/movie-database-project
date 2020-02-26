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
        <button
          onClick={() => handleClick("nowPlaying")}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Now Playing
          <i className="material-icons right">send</i>
        </button>

        <button
          onClick={() => handleClick("popular")}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Popular
          <i className="material-icons right">send</i>
        </button>

        <button
          onClick={() => handleClick("topRated")}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Top Rated
          <i className="material-icons right">send</i>
        </button>

        <button
          onClick={() => handleClick("upcoming")}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Upcoming
          <i className="material-icons right">send</i>
        </button>

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
