import React from "react";
import Card from "../Cards/Card";
import "./cardContainer.css";
import { shuffleArray } from "../../Services/ArrayUtils";

function CardContainer({ filteredMovies, displayingPage }) {
  function displayCards() {
    if (Array.isArray(filteredMovies)) {
      let resultFrom = (displayingPage - 1) * 6; //Algorithm to slice in the right position according to the number of page received
      return filteredMovies.slice(resultFrom, resultFrom + 6).map(createCard);
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
    // console.log(movie);

    return (
      <div className=" col s4">
        <Card
          imageUrl={movie.poster_path}
          title={movie.title}
          description={movie.overview}
          genres={movie.genres}
          id={movie.id}
        />
      </div>
    );
  }
  return <>{displayCards()}</>;
}
export default CardContainer;
