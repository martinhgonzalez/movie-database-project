import React from "react";
import Nav from "../Components/Nav";
import CardContainer from "../Components/CardContainer";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: ""
    };
  }

  componentDidMount() {
    // Fill Genre array from local storage.
    // If empty, fill it with API call and save into localStorage
    // Fill Movies Array from local storage
  }

  clickedFilter(param) {
    this.setState({ filter: param }); //param is going to be: all, new, favourite, or a genre
    // Need fixes to add search by name
  }
  getMovies() {
    if (this.state.filter === "all") {
      //filter array
    } else if (this.state.filter === "new") {
      // filter array
    }
    //...
    //Need to build logic to use search by name
  }

  render() {
    return (
      <>
        <h1>Welcome User!</h1>
        <Nav
          onClickedFilter={this.clickedFilter} //function to respond to the click event on Nav
        />
        <CardContainer
          filteredMovies={this.getMovies()} // Array with the movies filtered according to the what was clicked on the nav
        />
      </>
    );
  }
}

export default User;
