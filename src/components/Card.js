import React from "react";

const Card = (props) => {
  const { handleClick, color } = props;
  return (
    <div onClick={ handleClick } id={ color } className="card"/>
  )
}

export default Card;