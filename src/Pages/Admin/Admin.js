import React from "react";
import "./admin.css";
import AddMovieContainer from "../../Components/AddMovieContainer/AddMovieContainer";
import { getGenresFromAPI } from "../../Services/API";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      displaying: "none"
    };
  }

  componentDidMount() {
    if (localStorage.getItem("genres") === null) {
      getGenresFromAPI()
        .then(genres => {
          localStorage.setItem("genres", JSON.stringify(genres));
        })
        .catch(err => console.log(err));
    }
  }

  onClickBtn = param => {
    this.setState({
      displaying: param
    });
  };

  render() {
    return (
      <>
        <h1>WELCOME ADMIN</h1>
        <span
          onClick={() => this.onClickBtn("api")}
          className="waves-effect waves-light btn-large"
        >
          ADD MOVIES FROM API
        </span>

        <span
          onClick={() => this.onClickBtn("custom")}
          value="custom"
          className="waves-effect waves-light btn-large"
        >
          ADD CUSTOM MOVIE
        </span>
        <AddMovieContainer display={this.state.displaying} />
      </>
    );
  }
}

export default Admin;
