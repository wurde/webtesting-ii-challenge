/**
 * Dependencies
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import App from './App'

/**
 * Assertions
 */

describe("App.js", () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without errors', () => {
    render(<App />)
  })
})
