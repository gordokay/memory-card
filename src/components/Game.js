import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Scoreboard from "./Scoreboard";

const colors = ["#9883E5", "#F56476", "#5AF9CA", "#C4C7FA", "#FAA381", "#FAFF81", "#C792DF", "#F7B2BD"];

const shuffleCards = (cardsCopy) => {
  for(let i = 0; i < cardsCopy.length; i++) {
    const index = Math.floor(Math.random() * (cardsCopy.length - i)) + i;
    const temp = cardsCopy[i];
    cardsCopy[i] = cardsCopy[index];
    cardsCopy[index] = temp;
  }
  return cardsCopy;
}

const Game = () => {
  const [ cards, setCards ] = useState(colors.map(color => ({ color, isClicked: false })));
  const [ scores, setScores ] = useState({ score: 0, best: 0});
  const handleClick = (e) => {
    const cardsCopy = cards.slice();
    let targetIndex = cardsCopy.findIndex(card => card.color === e.target.id);
    if(cardsCopy[targetIndex].isClicked) return;
    cardsCopy[targetIndex] = {...cardsCopy[targetIndex], isClicked: true};
    setScores({ score: scores.score + 1, best: scores.score + 1 >= scores.best ? scores.score + 1 : scores.best });
    setCards(shuffleCards(cardsCopy));
  }
  return (
    <>
      <section className="info">
        <Header />
        <Scoreboard scores={ scores } />
      </section>
      <section className="board">
        <Board cards={ cards } handleClick={ handleClick } />
      </section>
    </>
  )
}

export default Game;