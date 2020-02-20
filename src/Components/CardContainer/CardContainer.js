import React from "react";
import Card from "./Card";
function CardContainer({ filteredMovies }) {
  function displayCards() {
    if (Array.isArray(filteredMovies)) {
      return filteredMovies.map(createCard);
    } else {
      return <h2> {filteredMovies} </h2>;
    }
  }
  function createCard(movie) {
    return (
      <Card
        title={movie.title}
        imageUrl={movie.imageUrl}
        description={movie.description}
        genres={movie.genres}
      />
    );
  }
  return <>{displayCards()}</>;
}
export default CardContainer;
"