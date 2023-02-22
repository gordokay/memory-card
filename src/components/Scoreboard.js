import React from "react";

const Scoreboard = (props) => {
  const {score, best} = props.scores;
  return (
    <section className="scoreboard">
      <div className="score">
        <h2>Score</h2>
        <p>{ score }</p>
      </div>
      <div className="best">
        <h2>Best</h2>
        <p>{ best }</p>
      </div>
    </section>
  )
}

export default Scoreboard;