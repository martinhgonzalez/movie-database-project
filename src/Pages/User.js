import React from "react";
import Nav from "../Components/Nav";
import CardContainer from "../Components/CardContainer";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: undefined,
      searching: undefined,
      genre: undefined
    };
  }
  clickedGenreFilter = param => {
    this.resetValues();

    this.setState({ genre: param });
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
  filterByGenre() {
    let moviesArray = localStorage.getItem("moviesArray");
    // filter the array
    // return filteredMoviesArray;
  }

  filterByName() {
    let moviesArray = localStorage.getItem("moviesArray");
    // filter the array
    // return filteredMoviesArray;
  }
  filterByNew() {
    let moviesArray = localStorage.getItem("moviesArray");
    // filter the array
    // return filteredMoviesArray;
  }
  filterByFav() {
    let moviesArray = localStorage.getItem("moviesArray");
    // filter the array
    // return filteredMoviesArray;
  }

  getMovies() {
    if (this.state.genre !== undefined) {
      return this.filterByGenre();
    }
    if (this.state.searching !== undefined) {
      return this.filterByName();
    } else if (this.state.filter === "all") {
      return [1, 2, 3];
    } else if (this.state.filter === "new") {
      return this.filterByNew();
    } else if (this.state.filter === "fav") return this.filterByFav();
  }

  resetValues() {
    this.setState({
      filter: undefined,
      searching: undefined,
      genre: undefined
    });
  }

  render() {
    return (
      <>
        <h1>Welcome User!</h1>
        <Nav
          onClickedFilter={this.clickedFilter} //function to respond to the click event on Nav
          onHandleSubmit={this.handleSubmit} // the function to handle the search submit
          onClickedGenreFilter={this.clickedGenreFilter} //function to respond to the click event on genres on Nav
        />
        <br />
        <br />
        <br />

        <CardContainer
          filteredMovies={this.getMovies()} // Array with the movies filtered according to the what was clicked on the nav
        />
      </>
    );
  }
}

export default User;
