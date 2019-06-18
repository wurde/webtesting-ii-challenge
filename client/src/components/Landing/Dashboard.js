/**
 * Dependencies
 */

import React from 'react'

/**
 * Define components
 */

function Dashboard(props) {
  return (
    <div>
      <h3>Dashboard</h3>

      <button id="btn-strike" onClick={props.click_strike}>Strike</button>
      <button id="btn-ball" onClick={props.click_ball}>Ball</button>
      <button id="btn-foul" onClick={props.click_foul}>Foul</button>
      <button id="btn-hit" onClick={props.click_hit}>Hit</button>
    </div>
  )
}

/**
 * Export components
 */

export default Dashboard
