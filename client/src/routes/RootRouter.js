/**
 * Dependencies
 */

import React from 'react'
import { Route } from 'react-router-dom'
import { Landing } from '../views/index'

/**
 * Define router
 */

function RootRouter() {
  return (
    <>
      <Route exact to="/" component={Landing} />
    </>
  )
}

/**
 * Export router
 */

export default RootRouter
