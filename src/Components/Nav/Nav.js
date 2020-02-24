import React from "react";
import { getGenresFromAPI } from "../../Services/API";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
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
              <li><a onClick={() => { onClickedFilter("latest"); }} href="#"> Latest </a></li>
              <li><a onClick={() => { onClickedFilter("favorite"); }} href="#"> Favorite </a> </li>

              <li>|</li>
              <li><a onClick={() => { onClickedGenreFilter("drama");}} href="#">Drama</a></li>
              <li><a onClick={() => { }}href="#">Comedy </a></li>
              <li><a onClick={() => { onClickedGenreFilter("horror"); }}  href="#" > Horror</a></li>
              <li>
              <select defaultValue="0" className="browser-default">
                <option value="0" disabled >Genres</option>
                <option value="1" onChange={() => { onClickedGenreFilter("drama");}} >Action</option>
                <option value="2">Adventure</option>
                <option value="3">Animation</option>
                <option value="4">Comedy</option>
                <option value="5">Crime</option>
                <option value="6">Documentary</option>
                <option value="7">Drama</option>
                <option value="8">Family</option>
                <option value="9">Fantasy</option>
                <option value="10">History</option>
                <option value="11">Horror</option>
                <option value="12">Music</option>
                <option value="13">Mystery</option>
                <option value="14">Romance</option>
                <option value="15">Science Fiction</option>
                <option value="16">TV Movie</option>
                <option value="17">Thriller</option>
                <option value="18">War</option>
                <option value="19">Western</option>

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
