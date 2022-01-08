const express = require('express')
const { GET } = require('./controller')

const aboutRoute = express.Router()
aboutRoute.route('/about')
    .get(GET)

module.exports = aboutRoute