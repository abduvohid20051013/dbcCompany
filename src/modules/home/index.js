const express = require('express')
const { GET } = require('./controller')

const homeRoute = express.Router()
homeRoute.route('/')
    .get(GET)
homeRoute.route('/home')
    .get(GET)

module.exports = homeRoute