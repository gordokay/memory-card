import React, { useState } from 'react';

const Board = (props) => {
  const { cards, handleClick } = props;
  return (
    cards.map(card => <Card key={card.id} onClick={handleClick} />)
  )
}

export default Board;