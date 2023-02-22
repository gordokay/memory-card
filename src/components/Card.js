import React from "react";

const Card = (props) => {
  const { handleClick, color } = props;
  const style = { backgroundColor: color};
  return (
    <div onClick={ handleClick } style={ style } className="card" id={ color }/>
  )
}

export default Card;