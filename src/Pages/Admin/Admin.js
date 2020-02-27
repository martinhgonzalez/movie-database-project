import React from "react";
import "./admin.css";
import AddMovieContainer from "../../Components/AddMovieContainer/AddMovieContainer";
import { getGenresFromAPI } from "../../Services/API";
import { Redirect } from "react-router-dom";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      displaying: "none",
      loggingOut: false
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
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (JSON.parse(loggedUser.type !== 1)) {
      alert("Oops!\nPlease login as an admin first:");
      return <Redirect to={"/login"} />;
    }

    if (this.state.loggingOut === true) {
      return <Redirect to={"/login"} />;
    }

    return (
      <>
        <h1 className=" h1Admin center-align">Welcome {loggedUser.name}</h1>
        <span className="logout">
          <button
            className=" grey darken-3 btn-small "
            onClick={() => {
              this.setState({ loggingOut: true });
            }}
          >
            <i className="material-icons left">vpn_key</i>
            Logout
          </button>
        </span>
        <span
          onClick={() => this.onClickBtn("api")}
          className="but btn-large waves-effect waves-light #212121 grey darken-4"
        >
          ADD MOVIES FROM API
        </span>

        <span
          onClick={() => this.onClickBtn("custom")}
          value="custom"
          className=" but waves-effect waves-light btn-large #212121 grey darken-4"
        >
          ADD CUSTOM MOVIE
        </span>
        <AddMovieContainer display={this.state.displaying} />
      </>
    );
  }
}

export default Admin;
