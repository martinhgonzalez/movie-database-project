import React from "react";
import Card from "../../Components/Cards/Card";


function CardContainer({ filteredMovies }) {
  function displayCards() {
    const movies= JSON.parse(localStorage.getItem('upcoming'));
    
    if (Array.isArray(filteredMovies)) {
      
      return filteredMovies.map(createCard);
    } else {
      return  <>{filteredMovies} </>;
    }
  }



  function createCard(movie) {
    const movies= JSON.parse(localStorage.getItem('upcoming'));

    return (
      <>
      {/* {movies.map((movie, key)=>(
        <Card
          movie={movie} key={key}
        />
      ))} */}

        <Card
          imageUrl={movies[3].poster_path} 
          title={movies[3].title}  
          description={movies[3].overview}
          genres={movies[1].genres}  
      />
      </>
    );
  }
  return <>{displayCards()}</>;
}
export default CardContainer;
