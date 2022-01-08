const express = require('express')
const app = express()
const { host, PORT } = require('./config')

app.use(express.static(__dirname, +"public"))
app.use(express.json())


const modules = require('./modules')
app.use(modules)

app.listen(PORT, () => console.log(`Server is running on http://${host}:${PORT}`))