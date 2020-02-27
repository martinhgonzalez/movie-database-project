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
      <div className="conteinerMenuAddFromApi row">
        <div className="rowMenuAddFromApi row">
          <div class="col s3">
            <button
              onClick={() => handleClick("nowPlaying")}
              className="btn #546e7a blue-grey darken-1 waves-effect waves-light "
              type="submit"
              name="action"
              >Now Playing
              <i className="material-icons right">send</i>
            </button>
          </div>
          
          <div class="col s3">
            <button
              onClick={() => handleClick("popular")}
              className="btn #546e7a blue-grey darken-1 waves-effect waves-light"
              type="submit"
              name="action"
              >Popular
              <i className="material-icons right">send</i>
            </button>
          </div>
          
          <div class="col s3">
            <button
              onClick={() => handleClick("topRated")}
              className="btn waves-effect waves-light #546e7a blue-grey darken-1"
              type="submit"
              name="action"
              >Top Rated
              <i className="material-icons right">send</i>
            </button>
          </div>
          
          <div class="col s3">
            <button
              onClick={() => handleClick("upcoming")}
              className="btn waves-effect waves-light #546e7a blue-grey darken-1 "
              type="submit"
              name="action"
              >Upcoming
              <i className="material-icons right">send</i>
            </button>
          </div>
          
        </div>
          
            <form onSubmit={handleSubmit}>
              <div className="rowSubmit row">
                <div className="divSearch col s2">
                  <input
                    id="first_name2"
                    type="text"
                    className="search"
                    placeholder="Search"
                  />
                </div>
            
              </div>
            
              <button type="submit" className="submitBtn btn  waves-effect waves-light #546e7a blue-grey darken-1">
                Submit
              </button>
            </form>
          
      </div>
      </>
  );
}

export default MenuAddFromAPI;
