const express = require('express')
const { GET } = require('./controller')

const servicesRoute = express.Router()
servicesRoute.route('/services')
    .get(GET)

module.exports = servicesRoute