/**
 * Dependencies
 */

import React, { useState } from 'react'
import { Dashboard, Display } from '../components/Landing/index'

/**
 * Define view
 */

function Landing() {
  const [strike_count, set_strike_count] = useState(0)
  const [ball_count, set_ball_count] = useState(0)
  const [foul_count, set_foul_count] = useState(0)
  const [hit_count, set_hit_count] = useState(0)

  const click_strike = () => {
    const count = strike_count + 1

    if (count === 3) {
      set_strike_count(0)
    } else {
      set_strike_count(strike_count + 1)
    }
  }

  const click_ball = () => {
    const count = ball_count + 1

    if (count === 4) {
      set_ball_count(0)
    } else {
      set_ball_count(ball_count + 1)
    }
  }

  const click_foul = () => {
    set_foul_count(foul_count + 1)

    if (strike_count < 2) {
      set_strike_count(strike_count + 1)
    }
  }

  const click_hit = () => {
    set_strike_count(0)
    set_ball_count(0)
    set_foul_count(0)
    set_hit_count(hit_count + 1)
  }

  const dashboard_props = {
    click_strike,
    click_ball,
    click_foul,
    click_hit,
  }

  const display_props = {
    strike_count,
    ball_count,
    foul_count,
    hit_count,
  }

  return (
    <div>
      <Dashboard {...dashboard_props} />
      <Display {...display_props} />
    </div>
  )
}

/**
 * Export view
 */

export default Landing
