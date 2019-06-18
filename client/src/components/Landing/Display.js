/**
 * Dependencies
 */

import React from 'react'

/**
 * Define components
 */

function Display(props) {
  return (
    <div>
      <h3>Display</h3>

      <ul>
        <li id="li-strikes">Strikes: {props.strike_count}</li>
        <li id="li-balls">Balls: {props.ball_count}</li>
        <li id="li-fouls">Fouls: {props.foul_count}</li>
        <li id="li-hits">Hits: {props.hit_count}</li>
      </ul>
    </div>
  )
}

/**
 * Export components
 */

export default Display
