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

      <button onClick={props.click_strike}>Strike</button>
      <button onClick={props.click_ball}>Ball</button>
      <button onClick={props.click_foul}>Foul</button>
      <button onClick={props.click_hit}>Hit</button>
    </div>
  )
}

/**
 * Export components
 */

export default Dashboard
