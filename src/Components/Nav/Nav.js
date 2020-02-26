import React from "react";
import { getGenresFromAPI } from "../../Services/API";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selection: 0
    };
  }
  

  componentDidMount() {
    this.setStateToGenres();
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
        genres: JSON.parse(localStorage.getItem("genres"))
      });
    }
  }

  iterateGenres = () => {
    return this.state.genres.map(genre => {
      return <option value={genre.id}>{genre.name}</option>;
    });
  };

  submitedSearch = e => {
    this.props.onHandleSubmit(e);
    this.setState({ selection: 0 });
  };

  selectedGenreFilter = e => {
    this.props.onSelectedGenreFilter(e);
    this.setState({ selection: 0 });
  };

  selectedFilter = param => {
    this.props.onClickedFilter(param);
    this.setState({ selection: 0 });
  };
  onSelectChange = e => {
    this.setState({ selection: e.value });
    this.props.onSelectedGenreFilter(e);
  };

  filterName(){ //to fix
    if(this.props.filter === 'all'){
      return 'All';
    }else if(this.props.filter === 'nowPlaying'){
      return 'Now Playing';
    }else if(this.props.filter === 'popular'){
      return 'Populars';
    }else if(this.props.filter === 'favorite'){
      return 'Favorites';
    } else if(this.props.filter === 'upcoming') return 'Up coming';
    
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <form onSubmit={this.submitedSearch}>
                  <input
                    id="first_name2"
                    type="text"
                    className="validate #bcaaa4 brown lighten-3"
                    placeholder="Search"
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.selectedFilter("all");
                  }}
                >
                  {" "}
                  All{" "}
                </a>{" "}
              </li>
              <li>
                <a
                  onClick={() => {
                    this.selectedFilter("new");
                  }}
                >
                  {" "}
                  Latest{" "} //to fix
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.selectedFilter("fav");//to fix
                  }}
                >
                  {" "}
                  Favorite{" "}
                </a>{" "}
              </li>

              <li>
                <select
                  onChange={this.onSelectChange}
                  // onClick={this.selectedGenreFilter}
                  value={this.state.selection}
                  class="browser-default"
                >
                  <option value="0" disabled>
                    Genres
                  </option>
                  {this.iterateGenres()}
                </select>
              </li>
            </ul>
            <div class="center-align">{this.filterName()} movies!</div> //to fix
          </div>
      
        </nav>

      </>
    );
  }
}

export default Nav;
