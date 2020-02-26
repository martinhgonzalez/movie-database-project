import React from "react";
import Nav from "../../Components/Nav/Nav";
import CardContainer from "../../Components/CardContainer/CardContainer";
import "./user.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      searching: undefined,
      genreId: undefined
    };
  }

  componentDidMount() {
    // search for user favorites in the localStorage. If its empty it should create one based on the specific user json content
    //user1 would be dynamical
    if (!localStorage.getItem("user1Favorites")) {
      localStorage.setItem("user1Favorites", "[]");
    }
  }

  selectedGenreFilter = e => {
    this.resetValues();
    this.setState({ genreId: e.target.value });
  };

  //Change the state filter
  clickedFilter = param => {
    this.resetValues();
    this.setState({ filter: param }); //param is going to be: all, new, favourite, or a genre
  };

  handleSubmit = e => {
    e.preventDefault();
    this.resetValues();
    this.setState({ searching: e.target.firstElementChild.value });
  };

  filterByGenre = () => {
    // Receives the id of the genre and saves it as a state
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    if (moviesArray === null) {
      alert(
        "There are no movies uploaded yet! Please contact an Admin for further information."
      );
      return;
    } else {
      let filtered = moviesArray.filter(movie => {
        return movie.genre_ids.includes(parseInt(this.state.genreId));
      });

      if (filtered.length !== 0) return filtered;
      else
        return "Your search criteria didn't match anything. You may try again with a different search";
    }
  };

  filterByName = () => {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    if (moviesArray === null) {
      alert(
        "There are no movies uploaded yet! Please contact an Admin for further information."
      );
      return;
    } else {
      let filtered = moviesArray.filter(movie => {
        return movie.title
          .toLowerCase()
          .includes(this.state.searching.toLowerCase());
      });

      if (filtered.length !== 0) return filtered;
      else
        return "Your search criteria didn't match anything. You may try again with a different search";
    }
  };
  filterByNew() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    if (moviesArray === null) {
      alert(
        "There are no movies uploaded yet! Please contact an Admin for further information."
      );
      return;
    } else {
      let actualTimeStamp = this.toTimestamp(new Date());
      let filtered = moviesArray.filter(movie => {
        return (
          this.toTimestamp(movie.release_date) >= actualTimeStamp - 2592000 &&
          this.toTimestamp(movie.release_date) <= actualTimeStamp
        );
      });
      if (filtered.length !== 0) return filtered;
      else
        return "Your search criteria didn't match anything. You may try again with a different search";
    }
  }
  toTimestamp(strDate) {
    let datum = Date.parse(strDate);
    return datum / 1000;
  }

  filterByFav() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    let favorites = JSON.parse(localStorage.getItem("user1Favorites"));
    let filtered = moviesArray.filter(movie => {
      let flag = false;
      favorites.forEach(idFav => {
        if (movie.id === idFav) flag = true;
      });
      return flag;
    });
    if (filtered.length !== 0) return filtered;
    else
      return "Your search criteria didn't match anything. You may try again with a different search";
  }

  filterByPopularity() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    if (moviesArray === null) {
      alert(
        "There are no movies uploaded yet! Please contact an Admin for further information."
      );
      return;
    } else {
      moviesArray.sort(function compare(a, b) {
        const popularityA = a.popularity;
        const popularityB = b.popularity;

        let comparison = 0;
        if (popularityA > popularityB) {
          comparison = -1;
        } else if (popularityA < popularityB) {
          comparison = 1;
        }
        return comparison;
      });

      if (moviesArray.length !== 0) return moviesArray.slice(0, 20);
      else
        return "Your search criteria didn't match anything. You may try again with a different search";
    }
  }

  filterByUpcoming() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    if (moviesArray === null) {
      alert(
        "There are no movies uploaded yet! Please contact an Admin for further information."
      );
      return;
    } else {
      let actualTimeStamp = this.toTimestamp(new Date());
      let filtered = moviesArray.filter(movie => {
        return this.toTimestamp(movie.release_date) > actualTimeStamp;
      });
      console.log(filtered.length);

      if (filtered.length !== 0) {
        return filtered;
      } else {
        return "Your search criteria didn't match anything. You may try again with a different search";
      }
    }
  }

  getAllMovies() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    if (moviesArray === null) {
      alert(
        "There are no movies uploaded yet! Please contact an Admin for further information."
      );
      return;
    } else {
      if (moviesArray.length !== 0) return moviesArray;
      else
        return "Your search criteria didn't match anything. You may try again with a different search";
    }
  }

  getMovies() {
    if (this.state.genreId !== undefined) {
      return this.filterByGenre();
    }
    if (this.state.searching !== undefined) {
      return this.filterByName();
    } else if (this.state.filter === "all") {
      return this.getAllMovies();
    } else if (this.state.filter === "new") {
      return this.filterByNew();
    } else if (this.state.filter === "favorite") {
      return this.filterByFav();
    } else if (this.state.filter === "popular") {
      return this.filterByPopularity();
    } else if (this.state.filter === "upcoming") {
      return this.filterByUpcoming();
    }
  }
  resetValues() {
    this.setState({
      filter: undefined,
      searching: undefined,
      genreId: undefined
    });
  }

  render() {
    return (
      <>
        <h1>Welcome User!</h1>
        <Nav
          filter={this.state.filter} //prop to set the msg of the right (current filter)
          onClickedFilter={this.clickedFilter} //function to respond to the click event on Nav ALL, LATEST
          onHandleSubmit={this.handleSubmit} // the function to handle the search submit
          onSelectedGenreFilter={this.selectedGenreFilter} //function to respond to the click event on genres on Nav
        />

        <CardContainer
          filteredMovies={this.getMovies()} // Array with the movies filtered according to the what was clicked on the nav
        />
      </>
    );
  }
}

export default User;
