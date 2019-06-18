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
  test('renders without crashing', () => {
    const { getByText } = render(<Landing />)

  })
})
