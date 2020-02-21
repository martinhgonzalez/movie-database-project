import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <>
        <div class="row">
          <div class="col s8 offset-s2">
            <span class="flow-text"></span>
            <div class="col s12">
              <div className="card teal #424242 grey darken-3">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4QBHUJleahIllwr04pELOa1QpgX_VCzXihs4mXTiKrFDm8E-U"
                  />
                </div>
                <div className="card-content #424242 grey darken-3">
                  <span className="card-title activator grey-text text-darken-4">
                    Nombre de la pelicula
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal #795548 brown">
                  <span className="card-title grey-text text-darken-4">
                    Nombre de la pelicula
                    <i className="material-icons right">close</i>
                  </span>
                  <p> Desctripcion de la pelicula </p>
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
