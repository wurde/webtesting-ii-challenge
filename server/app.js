'use strict'

/**
 * Dependencies
 */

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

/**
 * Constants
 */

const port = process.env.PORT || 8080

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(helmet())
app.use(cors())
app.use(express.json())

/**
 * Routes
 */

app.route('/')
  .get((req, res) => {
    res.sendStatus(200)
  })

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () => {
    console.log(`Express running on port ${port}`)
  })
}

/**
 * Export app
 */

module.exports = app
