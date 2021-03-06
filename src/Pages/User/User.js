import React from "react";
import Nav from "../../Components/Nav/Nav";
import CardContainer from "../../Components/CardContainer/CardContainer";
import "./user.css";
import { Redirect } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      searching: undefined,
      genreId: undefined,
      loggedUser: JSON.parse(localStorage.getItem("loggedUser")),
      displayingPage: 1
    };
  }

  componentWillMount() {
    if (!localStorage.getItem(`${this.state.loggedUser.name} favorites`)) {
      localStorage.setItem(`${this.state.loggedUser.name} favorites`, "[]");
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
      return "There are no movies uploaded yet! Please contact an Admin for further information.";
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
      return "There are no movies uploaded yet! Please contact an Admin for further information.";
    } else {
      let filtered = moviesArray.filter(movie => {
        return movie.title.toLowerCase().includes(this.state.searching.toLowerCase());
      });

      if (filtered.length !== 0) return filtered;
      else
        return "Your search criteria didn't match anything. You may try again with a different search";
    }
  };
  filterByNew() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    if (moviesArray === null) {
      return "There are no movies uploaded yet! Please contact an Admin for further information.";
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
    if (moviesArray === null) {
      return "There are no movies uploaded yet! Please contact an Admin for further information.";
    } else {
      let favorites = JSON.parse(localStorage.getItem(`${this.state.loggedUser.name} favorites`));
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
  }

  filterByPopularity() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    if (moviesArray === null) {
      return "There are no movies uploaded yet! Please contact an Admin for further information.";
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
      return "There are no movies uploaded yet! Please contact an Admin for further information.";
    } else {
      let actualTimeStamp = this.toTimestamp(new Date());
      let filtered = moviesArray.filter(movie => {
        return this.toTimestamp(movie.release_date) > actualTimeStamp;
      });
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
      return "There are no movies uploaded yet! Please contact an Admin for further information.";
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
      genreId: undefined,
      displayingPage: 1
    });
  }

  paginate = () => {
    let pages = Math.ceil(this.getMovies().length / 6);
    let pagination = [];
    for (let i = 0; i < pages; i++) {
      let num = (
        <li className={this.state.displayingPage === i + 1 ? "active" : "waves-effect"}>
          <a
            onClick={() => {
              this.pageSelector(i + 1);
            }}
          >
            {i + 1}
          </a>
        </li>
      );
      pagination.push(num);
    }
    return pagination;
  };

  pageSelector = param => {
    this.setState({ displayingPage: param });
  };

  displayPagination = () => {
    if (Array.isArray(this.getMovies()))
      return (
        <>
          <ul className="pagination">
            <li className="disabled">
              <a href="#!">
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            {this.paginate().map(page => {
              return page;
            })}
            <li className="disabled waves-effect">
              <a href="#!">
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </>
      );
  };

  render() {
    if (JSON.parse(this.state.loggedUser.type !== 2)) {
      alert("Oops!\nPlease login first:");
      return <Redirect to={"/login"} />;
    }
    return (
      <>
        <h1 className="h1User">Welcome {this.state.loggedUser.name} </h1>
        <Nav
          filter={this.state.filter} //prop to set the msg of the right (current filter)
          onClickedFilter={this.clickedFilter} //function to respond to the click event on Nav ALL, LATEST
          onHandleSubmit={this.handleSubmit} // the function to handle the search submit
          onSelectedGenreFilter={this.selectedGenreFilter} //function to respond to the click event on genres on Nav
        />
        <div className="cardContainer container">
          <div className="row">
            <CardContainer
              filteredMovies={this.getMovies()} // Array with the movies filtered according to the what was clicked on the nav
              displayingPage={this.state.displayingPage}
            />
          </div>
        </div>
        {this.displayPagination()}
      </>
    );
  }
}

export default User;
