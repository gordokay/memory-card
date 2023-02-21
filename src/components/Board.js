import React from 'react';
import Card from './Card';

const Board = (props) => {
  const { cards, handleClick } = props;
  return (
    cards.map(card => <Card key={ card.id } color={ card.color } handleClick={ handleClick } />)
  )
}

export default Board;