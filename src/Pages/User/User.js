import React from "react";
import Nav from "../../Components/Nav/Nav";
import CardContainer from "../../Components/CardContainer/CardContainer";
import "./user.css";




class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'upcoming',
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
    let array = JSON.parse(localStorage.getItem("movies"));
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
    if(latestMoviesArray == null){
      alert('latest: No existen las peliculas, comuniquese con el admin');
    return null;
    }
    return latestMoviesArray;
  }
  
  filterByNow() {
    let nowMoviesArray = JSON.parse(localStorage.getItem("nowPlaying"));
    if(nowMoviesArray == null){
      alert('Now: No existen las peliculas, comuniquese con el admin');
    return null;
    }
    return nowMoviesArray;
  }

  filterByFav() {
    let favMoviesArray = JSON.parse(localStorage.getItem("favorites"));
    if(favMoviesArray == null){
      alert('Fav: aún no tiene películas en favoritos!');
    return null;
    }
    return favMoviesArray;
  }

  filterByPopurarity(){
    let popMoviesArray = JSON.parse(localStorage.getItem("popular"));
    if(popMoviesArray == null){
      alert('pop: No existen las peliculas, comuniquese con el admin');
    return null;
    }
    return popMoviesArray;
  }
  
  filterByUpcoming(){
    let upMoviesArray = JSON.parse(localStorage.getItem("upComing"));
    if(upMoviesArray == null){
      alert('Aún no existen películas!!!');
    return null;
    }
    return upMoviesArray;
  }
  
//Return an array fill of all movies in the local storage
  allmovies(){
    let allMoviesArray = JSON.parse(localStorage.getItem("movies"));
    if(allMoviesArray == null){
      alert('All: No existen las peliculas, comuniquese con el admin');
    return null;
    }
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
    } else if (this.state.filter === "nowPlaying") {
      return this.filterByNow();
      
    } else if (this.state.filter === "latest") {
      return this.filterByNew();
    } else if (this.state.filter === "favorite"){
      return this.filterByFav();
    } else if (this.state.filter === "popular"){
      return this.filterByPopurarity();
    }else if (this.state.filter === "upcoming"){
      return this.filterByUpcoming();
    }
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
