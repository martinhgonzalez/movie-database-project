import React from "react";
import { getGenresFromAPI } from "../../Services/API";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    console.log('POR', props);
    this.state = {
      genres: []
    };
  }

  setStateToGenres() {
    if (localStorage.getItem("genres") === null) {
      getGenresFromAPI()
        .then(genres => {
          this.setState({ genres: genres });
          localStorage.setItem("genres", JSON.stringify(genres));
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        genres: localStorage.getItem("genres")
      });
    }
  }

  componentDidMount() {
    this.setStateToGenres();
  }

  render() {
    const {
      onHandleSubmit,
      onClickedFilter,
      onClickedGenreFilter
    } = this.props;
    //console.log(this.state.genres[0].name);
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <form onSubmit={onHandleSubmit}>  
                  <input id="first_name2" type="text" className="validate #bcaaa4 brown lighten-3" placeholder="Search"/>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </li>
              
              <li><a onClick={() => { onClickedFilter("all"); }} href="#"> All </a> </li>
              <li><a onClick={() => { onClickedFilter("new"); }} href="#"> Latest </a></li>
              <li><a onClick={() => { onClickedFilter("fav"); }} href="#"> Favorite </a> </li>

              <li>|</li>
              <li>
                <a
                  onClick={() => {
                    onClickedGenreFilter("drama");
                  }}
                  href="#"
                >
                  Drama
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    onClickedGenreFilter("comedy");
                  }}
                  href="#"
                >
                  Comedy
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    onClickedGenreFilter("horror");
                  }}
                  href="#"
                >
                  Terror
                </a>
              </li>
              <li>
              <select class="browser-default">
                <option value="" disabled selected>Genres</option>
                <option value="1">Action</option>
                <option value="2">Adventure</option>
                <option value="3">Animation</option>
              </select>    
              </li>
            </ul>
          </div>
        </nav>
</>
    );
  }
}

export default Nav;
