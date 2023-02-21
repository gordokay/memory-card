import React, { useState } from "react";
import Board from "./Board";

const colors = ["violet", "rose", "turquoise", "periwinkle", "orange", "yellow", "lavender", "pink"];

const Game = () => {
  const [ cards, setCards ] = useState(colors.map(color => ({ color, isClicked: false })));
  const handleClick = (e) => {
    const cardsCopy = cards.slice();
    let targetIndex = cardsCopy.findIndex(card => card.color === e.target.id);
    if(cardsCopy[targetIndex].isClicked) return;
    cardsCopy[targetIndex] = {...cardsCopy[targetIndex], isClicked: true};
    setCards(cardsCopy);
  }
  return <Board cards={cards} handleClick={handleClick} />
}

export default Game;