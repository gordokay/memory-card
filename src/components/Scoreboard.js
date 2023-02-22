import React from "react";

const Scoreboard = (props) => {
  const {score, best} = props.scores;
  return (
    <section class="scoreboard">
      <div class="score">
        <h2>Score</h2>
        <p>{ score }</p>
      </div>
      <div class="best">
        <h2>Best</h2>
        <p>{ best }</p>
      </div>
    </section>
  )
}

export default Scoreboard;