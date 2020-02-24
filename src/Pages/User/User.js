import React from "react";
import Nav from "../../Components/Nav/Nav";
import CardContainer from "../../Components/CardContainer/CardContainer";
import "./user.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: undefined,
      searching: undefined,
      genre: undefined
    };
  }

  clickedGenreFilter = param => {
    this.resetValues();
    this.setState({ genre: param });
  };

//Change the state filter
  clickedFilter = param => {
    this.resetValues();
    this.setState({ filter: param }); //param is going to be: all, new, favourite, or a genre
  };



//Filter by genre by state
  filterByGenre() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    let moviesArrayGenres = JSON.parse(localStorage.getItem("genres"));
    if(this.state.genre === "drama"){
      console.log("movies", moviesArray);
      console.log("genres", moviesArrayGenres);
    return moviesArrayGenres;
    }else if( this.state.genre === "comedy"){
        console.log('comedy');
        return moviesArrayGenres;
    }else if(this.state.genre ==="horror"){
      console.log('horror');
      return moviesArrayGenres;
    }
    
    
  }
  handleSubmit = e => {
    e.preventDefault();
    this.resetValues();
    this.setState({ searching: e.target.firstElementChild.value });
    
  };

  
filterByName() {
    let moviesArray = JSON.parse(localStorage.getItem("movies"));
    let moviesByName =[];
    
    for( let i = 0; i < moviesArray.length; i++){
      if(moviesArray[i].title == this.state.searching){
        moviesByName.push(moviesArray[i]);

    }
  }
    return moviesByName;
   // let arraySearched = moviesArray.filter(title => this.state.searching);
   // console.log(arraySearched);
   // return arraySearched;

  } 


//Return latest movies
  filterByNew() {
    let latestMoviesArray = JSON.parse(localStorage.getItem("latest"));
    return latestMoviesArray;
  }

  filterByFav() {
    let favMoviesArray = JSON.parse(localStorage.getItem("favorites"));
    return favMoviesArray;
  }
  
//Return an array fill of all movies in the local storage
  allmovies(){
    let allMoviesArray = JSON.parse(localStorage.getItem("movies"));
    return allMoviesArray;
  }
  


  getMovies() {
    // console.log(this.state.filter);
    if (this.state.genre !== undefined) {
      return this.filterByGenre();
    }
    if (this.state.searching !== undefined) {
      return this.filterByName();

    } else if (this.state.filter === "all") {
      return this.allmovies();

    } else if (this.state.filter === "latest") {
      return this.filterByNew();

    } else if (this.state.filter === "favorite") return this.filterByFav();
  }

  resetValues() {
    this.setState({
      filter: undefined,
      searching: undefined,
      genre: undefined
    });
  }

  render() {
    return (
      <>
        <h1>Welcome User!</h1>
        <Nav
          onClickedFilter={this.clickedFilter} //function to respond to the click event on Nav ALL, LATEST
          onClickedGenreFilter={this.clickedGenreFilter} //function to respond to the click event on genres on Nav DRAMA, COMEDY, HORROR
          
          onHandleSubmit={this.handleSubmit} // the function to handle the search submit
          
        />

        <CardContainer
          filteredMovies={this.getMovies()} // Array with the movies filtered according to the what was clicked on the nav
        />
      </>
    );
  }
}

export default User;
