const config = require('./config')
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const app = express()
app.use(helmet())

// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Usar middleware de body-parse
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

// Obtener rutas
app.use(require('./routes'))
app.listen(config.port, () => {
  console.log('Escuchando puerto: ', config.port)
})

