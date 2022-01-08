const express = require('express')
const { GET } = require('./controller')

const galleryRoute = express.Router()
galleryRoute.route('/gallery')
    .get(GET)

module.exports = galleryRoute