import React from "react";
import Nav from "../../Components/Nav/Nav";
import CardContainer from "../../Components/CardContainer/CardContainer";
import "./user.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: undefined,
      searching: undefined,
      genreId: undefined
    };
  }

  componentDidMount() {
    // search for user favorites in the localStorage. If its empty it should create one based on the specific user json content

    if (!localStorage.getItem("user1Favorites")) {
      //user1 would be dynamical
      localStorage.setItem(
        "user1Favorites",
        "[419704, 454626, 449924, 495764, 330457]"
      );
    }
  }

  selectedGenreFilter = e => {
    this.resetValues();
    this.setState({ genreId: e.target.value });
  };
  clickedFilter = param => {
    this.resetValues();
    this.setState({ filter: param }); //param is going to be: all, new, favourite, or a genre
  };

  handleSubmit = e => {
    e.preventDefault();
    this.resetValues();

    this.setState({ searching: e.target.firstElementChild.value });

    e.target.reset();
  };

  filterByGenre = () => {
    // Receives the id of the genre and saves it as a state
    let moviesArray = JSON.parse(localStorage.getItem("movies"));

    let filtered = moviesArray.filter(movie => {
      return movie.genre_ids.includes(parseInt(this.state.genreId));
    });

    return filtered;
  };

  filterByName = () => {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));

    let filtered = moviesArray.filter(movie => {
      return movie.title
        .toLowerCase()
        .includes(this.state.searching.toLowerCase());
    });

    return filtered;
  };
  filterByNew() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));

    let actualTimeStamp = this.toTimestamp(new Date());
    let filtered = moviesArray.filter(movie => {
      return (
        this.toTimestamp(movie.release_date) >= actualTimeStamp - 2592000 &&
        this.toTimestamp(movie.release_date) <= actualTimeStamp
      );
    });
    return filtered;
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
    return filtered;
  }

  getMovies() {
    if (this.state.genreId !== undefined) {
      return this.filterByGenre();
    }
    if (this.state.searching !== undefined) {
      return this.filterByName();
    } else if (this.state.filter === "all") {
      return JSON.parse(localStorage.getItem("movies"));
    } else if (this.state.filter === "new") {
      return this.filterByNew();
    } else if (this.state.filter === "fav") return this.filterByFav();
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
          onClickedFilter={this.clickedFilter} //function to respond to the click event on Nav
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
