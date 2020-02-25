import React from "react";
import Card from "../Cards/Card";
import "./cardContainer.css";

function CardContainer({ filteredMovies}) {
  
  function displayCards() {
    if (Array.isArray(filteredMovies)) {
      return filteredMovies.map(createCard);
    } else {
      return <>{filteredMovies} </>;
    }
  }

  function createCard(movie) {
    return (
      <>
    
        <Card
          imageUrl={movie.poster_path}
          title={movie.title}
          description={movie.overview}
          genres={movie.genres}
        />
      </>
    );
  }
  return <>{displayCards()}</>;
}
export default CardContainer;
