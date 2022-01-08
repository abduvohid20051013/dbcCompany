const express = require('express')
const { GET } = require('./controller')

const contactRoute = express.Router()
contactRoute.route('/contact')
    .get(GET)

module.exports = contactRoute