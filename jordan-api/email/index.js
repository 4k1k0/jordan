async function enviarCorreo(correo) {
  return new Promise(resolve => {
    resolve(`Hola ${correo}`)
  })
}

module.exports = {
  enviarCorreo
} 

