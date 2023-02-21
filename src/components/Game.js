import React, { useState } from "react";
import Board from "./Board";

const colors = ["violet", "rose", "turquoise", "periwinkle", "orange", "yellow", "lavender", "pink"];

const Game = () => {
  const [ cards, setCards ] = useState(colors.map(color => ({ color, isClicked: false })));
  const handleClick = (e) => {
    const cardsCopy = cards.slice();
    const targetCard = cardsCopy.find(card => card.color === e.target.id);
    if(targetCard.isClicked) return;
    targetCard = {...targetCard, isClicked: true};
    setCards(cardsCopy);
  }
  return <Board cards={cards} handleClick={handleClick} />
}

export default Game;