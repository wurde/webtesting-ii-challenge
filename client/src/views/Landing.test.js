/**
 * Dependencies
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Landing from './Landing'

/**
 * Hooks
 */

afterAll(cleanup)

/**
 * Assertions
 */

describe("Landing.js", () => {
  test('renders without errors', () => {
    const { container } = render(<Landing />)
  })

  test('strikes increment by 1 and reset at 3 to 0', () => {
    const button = document.getElementById('btn-strike')
    fireEvent.click(button)

    const strikes = document.getElementById('li-strikes')
    expect(strikes.textContent).toBe('Strikes: 1')

    fireEvent.click(button)
    expect(strikes.textContent).toBe('Strikes: 2')

    fireEvent.click(button)
    expect(strikes.textContent).toBe('Strikes: 0')
  })

  test('balls increment by 1 and reset at 4 to 0', () => {
    const button = document.getElementById('btn-ball')
    fireEvent.click(button)

    const balls = document.getElementById('li-balls')
    expect(balls.textContent).toBe('Balls: 1')

    fireEvent.click(button)
    expect(balls.textContent).toBe('Balls: 2')

    fireEvent.click(button)
    expect(balls.textContent).toBe('Balls: 3')

    fireEvent.click(button)
    expect(balls.textContent).toBe('Balls: 0')
  })

  test('strikes and balls reset to 0 on hit', () => {
    const button_strike = document.getElementById('btn-strike')
    fireEvent.click(button_strike)
    const strikes = document.getElementById('li-strikes')
    expect(strikes.textContent).toBe('Strikes: 1')

    const button_ball = document.getElementById('btn-ball')
    fireEvent.click(button_ball)
    const balls = document.getElementById('li-balls')
    expect(balls.textContent).toBe('Balls: 1')

    const button_hit = document.getElementById('btn-hit')
    fireEvent.click(button_hit)
    expect(strikes.textContent).toBe('Strikes: 0')
    expect(balls.textContent).toBe('Balls: 0')
  })
})
