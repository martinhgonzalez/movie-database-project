import React from "react";

import MenuAddFromAPI from "../MenuAddFromAPI/MenuAddFromAPI";
import AddForm from "../AddForm/AddForm";
import "./addMovieContainer.css";

class AddMovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    if (localStorage.getItem("movies") !== null)
      this.setState({
        movies: JSON.parse(localStorage.getItem("movies"))
      });
  }

  mergeArrays(arr1, arr2) {
    let ids = new Set(arr1.map(movie => movie.id));
    let merged = [...arr1, ...arr2.filter(movie => !ids.has(movie.id))];
    return merged;
  }

  receiveArray = async apiCall => {
    let merged = this.mergeArrays(this.state.movies, apiCall);
    this.setState({
      movies: merged
    });
    localStorage.setItem("movies", JSON.stringify(merged));
  };

  showAddMethod() {
    if (this.props.display === "custom")
      return <AddForm sendMovie={this.receiveArray} />;
    else if (this.props.display === "api")
      return <MenuAddFromAPI sendArray={this.receiveArray} />;
    else return <h2 className="h2AddMovieContainer">Pick a method to add Movies!</h2>;
  }

  render() {
    return <>{this.showAddMethod()}</>;
  }
}

export default AddMovieContainer;
