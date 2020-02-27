import React from "react";
import Card from "../Cards/Card";
import "./cardContainer.css";
import { shuffleArray } from "../../Services/ArrayUtils";

function CardContainer({ filteredMovies }) {
  function displayCards() {
    if (Array.isArray(filteredMovies)) {
      shuffleArray(filteredMovies);
      return filteredMovies.map(createCard);
    } else {
      return (
        <>
          <br />
          <br />
          <br />
          <br />

          <h4 className="center-align">{filteredMovies}</h4>
        </>
      );
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
          id={movie.id}
        />
      </>
    );
  }
  return <>{displayCards()}</>;
}
export default CardContainer;
