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
      <br/>

      <table>
        <tr>
          <th colspan="9" style={{"text-align": "left"}}>Innings:</th>
        </tr>
        <tr>
          <td>GUEST</td>
          {props.innings_array.map((inning, index) => {
            return (
              <td key={'top-' + index}>{inning[0]}</td>
            )
          })}
        </tr>
        <tr>
          <td>HOME</td>
          {props.innings_array.map((inning, index) => {
            return (
              <td key={'bot-' + index}>{inning[1]}</td>
            )
          })}
        </tr>
      </table>

      <ul style={{"list-style": "none", "padding-left": 0}}>
        <li id="li-strikes"><b>Outs:</b> {props.out_count}</li>
        <li id="li-strikes"><b>Strikes:</b> {props.strike_count}</li>
        <li id="li-balls"><b>Balls:</b> {props.ball_count}</li>
        <li id="li-fouls"><b>Fouls:</b> {props.foul_count}</li>
        <li id="li-hits"><b>Hits:</b> {props.hit_count}</li>
      </ul>
    </div>
  )
}

/**
 * Export components
 */

export default Display
