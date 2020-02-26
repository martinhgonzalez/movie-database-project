import React from "react";
import "./card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      favoritesMovies:[],
    }  
  }


  addFav() {
    this.setState({
      favoritesMovies: this.props,
    })
    console.log(this.state.favoritesMovies);
    localStorage.setItem("favorites", JSON.stringify(this.props));  

    console.log(this.state.favoritesMovies);
  }

  render() {
    let url = "https://image.tmdb.org/t/p/w500";

    return (
      <>
        <div class="row">
          <div class="col s8 offset-s4">
            
            <div class="col s6">
              <div className="card teal #424242 grey darken-3">
                <div className="card-image waves-effect waves-block waves-light" >
                  <img className="activator" src={url + this.props.imageUrl} />
                
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
                  <a onClick={() => {this.addFav();}} className="btn-floating btn-large waves-effect waves-light #212121 grey darken-4 right">
                    <i className="material-icons">star</i>                  
                  </a>
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
