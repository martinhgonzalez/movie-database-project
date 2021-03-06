import React from "react";
import "./card.css";

class Card extends React.Component {
  addFav = () => {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    let favorites = JSON.parse(localStorage.getItem(`${loggedUser.name} favorites`));
    const index = favorites.indexOf(this.props.id);

    if (index > -1) {
      //if the id of the clicked is in the list, delete it by splice. Else, add it by push

      favorites.splice(index, 1);
      this.setState({ favorites: favorites });
      localStorage.setItem(`${loggedUser.name} favorites`, JSON.stringify(favorites));
    } else {
      favorites.push(this.props.id);

      this.setState({ favorites: favorites });
      localStorage.setItem(`${loggedUser.name} favorites`, JSON.stringify(favorites));
    }
  };
  favoriteIcon = () => {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    let favorites = JSON.parse(localStorage.getItem(`${loggedUser.name} favorites`));
    const index = favorites.indexOf(this.props.id);

    if (index > -1) {
      return "favorite";
    } else return "favorite_border";
  };
  render() {
    let url = "https://image.tmdb.org/t/p/w500";

    return (
      <>
        <div class="row">
          <div class="col s8 offset-s4">
            <div class="col s6">
              <div className=" movieCard card teal #424242 grey darken-3">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={url + this.props.imageUrl} alt="" />
                </div>
                <div className="card-content #424242 grey darken-3">
                  <span className="card-title activator  center-align ">
                    {this.props.title}
                    <i className="material-icons right ">more_vert</i>
                  </span>
                </div>

                <div className="card-reveal #424242 grey darken-3">
                  <span className="card-title activate">
                    {this.props.title}
                    <i className="material-icons right">close</i>
                  </span>
                  <p id="colorP"> {this.props.description}</p>
                  <button
                    onClick={this.addFav}
                    className="btn-floating btn-large waves-effect waves-light #212121 grey darken-4 right"
                  >
                    <i className="material-icons">{this.favoriteIcon()}</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
