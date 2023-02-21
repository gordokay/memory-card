import React from "react";

const Card = (props) => {
  const { handleClick, color } = props;
  return (
    <div onClick={ handleClick } className={ color }/>
  )
}

export default Card;