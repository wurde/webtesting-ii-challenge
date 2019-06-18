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
})
