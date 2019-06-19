/**
 * Dependencies
 */

import React, { useState } from 'react'
import { Dashboard, Display } from '../components/Landing/index'

/**
 * Define view
 */

function Landing() {
  const [current_inning, set_current_inning] = useState([0, 0])
  const [innings_array, set_innings_array] = useState([
    [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]
  ])
  const [out_count, set_out_count] = useState(0)
  const [strike_count, set_strike_count] = useState(0)
  const [ball_count, set_ball_count] = useState(0)
  const [foul_count, set_foul_count] = useState(0)
  const [hit_count, set_hit_count] = useState(0)

  const click_strike = () => {
    const count = strike_count + 1

    if (count === 3) {
      set_strike_count(0)
      const new_out_count = out_count + 1
      set_out_count(new_out_count)

      if (new_out_count === 3) {
        set_out_count(0)

        if (current_inning[1] === 0) {
          set_current_inning([current_inning[0], 1])
        } else {
          set_current_inning([current_inning[0] + 1, 0])
        }
      }
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

    const new_innings_array = innings_array.map((inning, index) => {
      if (current_inning[0] === index) {
        inning[current_inning[1]] += 1
      }
      return inning
    })
    set_innings_array(new_innings_array)
  }

  const dashboard_props = {
    click_strike,
    click_ball,
    click_foul,
    click_hit,
  }

  const display_props = {
    innings_array,
    out_count,
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
