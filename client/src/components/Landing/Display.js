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
        <li>Strikes: {props.strike_count}</li>
        <li>Balls: {props.ball_count}</li>
        <li>Fouls: {props.foul_count}</li>
        <li>Hits: {props.hit_count}</li>
      </ul>
    </div>
  )
}

/**
 * Export components
 */

export default Display
