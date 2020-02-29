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
    let pages = parseInt(
      prompt("How Many Pages do you wish to add from this Filter? (20 results per page)")
    );
    if (param === "nowPlaying") {
      let moviesArray = [];
      for (let i = 1; i < pages + 1; i++) {
        getNowPlayingMovies(i).then(movies => {
          movies.map(movie => {
            moviesArray.push(movie);
          });
        });
      }
      setTimeout(() => {
        props.sendArray(moviesArray);
      }, 500);
    } else if (param === "popular") {
      let moviesArray = [];
      for (let i = 1; i < pages + 1; i++) {
        getPopularMovies(i).then(movies => {
          moviesArray.push(...movies);
        });
      }
      setTimeout(() => {
        props.sendArray(moviesArray);
      }, 500);
    } else if (param === "topRated") {
      let moviesArray = [];
      for (let i = 1; i < pages + 1; i++) {
        getTopRatedMovies(i).then(movies => {
          moviesArray.push(...movies);
        });
      }
      setTimeout(() => {
        props.sendArray(moviesArray);
      }, 500);
    } else if (param === "upcoming") {
      let moviesArray = [];
      for (let i = 1; i < pages + 1; i++) {
        getUpcomingMovies(i).then(movies => {
          moviesArray.push(...movies);
        });
      }
      setTimeout(() => {
        props.sendArray(moviesArray);
      }, 500);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let pages = parseInt(
      prompt("How Many Pages do you wish to add from this Filter? (20 results per page)")
    );
    {
      let moviesArray = [];
      for (let i = 1; i < pages + 1; i++) {
        getMoviesBySearch(
          e.target.firstElementChild.firstElementChild.firstElementChild.value,
          i
        ).then(movies => {
          moviesArray.push(...movies);
        });
      }
      setTimeout(() => {
        props.sendArray(moviesArray);
      }, 500);
      e.target.reset();
    }
  };

  return (
    <>
      <div className="conteinerMenuAddFromApi row">
        <div className="rowMenuAddFromApi row">
          <div class="col s3">
            <button
              onClick={() => handleClick("nowPlaying")}
              className="btn col s8 m10   #546e7a blue-grey darken-1 waves-effect waves-light "
              type="submit"
              name="action"
            >
              Now Playing
              <i className="material-icons right">send</i>
            </button>
          </div>

          <div class="col s3">
            <button
              onClick={() => handleClick("popular")}
              className="btn col s8 m10 #546e7a blue-grey darken-1 waves-effect waves-light"
              type="submit"
              name="action"
            >
              Popular
              <i className="material-icons right">send</i>
            </button>
          </div>

          <div class="col s3">
            <button
              onClick={() => handleClick("topRated")}
              className="btn col s8 m10 waves-effect waves-light #546e7a blue-grey darken-1"
              type="submit"
              name="action"
            >
              Top Rated
              <i className="material-icons right">send</i>
            </button>
          </div>

          <div class="col s3">
            <button
              onClick={() => handleClick("upcoming")}
              className="btn col s8 m10 waves-effect waves-light #546e7a blue-grey darken-1 "
              type="submit"
              name="action"
            >
              Upcoming
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="rowSubmit required row">
            <div className="divSearch col s2">
              <input
                required
                id="first_name2"
                type="text"
                className="search"
                placeholder="Search"
              />
            </div>
          </div>

          <button
            type="submit"
            className="submitBtn required btn waves-effect waves-light #546e7a blue-grey darken-1"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default MenuAddFromAPI;
