const config = require('../config')
const mail = require('../email')
const express = require('express')
const app = express()

app.post('/mail', async (req, res) => {
  const { correos } = req.body
  let enviados = []
  correos.forEach(correo => {
    const respuesta = await mail.enviarCorreo(correo)
    if (respuesta) {
      enviados.push(respusta)
    }
  })
  if (enviados.lenght !== 0) {
    return res.json({
      enviados,
    })
  }
  return res.status(500).json({
    error: true
  })
})

module.exports = app

