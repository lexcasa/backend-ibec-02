const express = require('express')
const app     = express()
const port    = 3000

const AlgoBuscaNombre = require('./services/algobuscanombre.service')


app.get('/', (req, res) => {
    res.send({
        respuesta: "Hola Mundo"
    })
})


// CASO DE TEST
// Si escribo: http://localhost:3000/obtener-nombre/casadevall - me deuvelve un objeto: { apellido: "Casadevall" }
// 
app.get('/obtener-nombre/:apellido', (req, res) => {
    const apellido = req.params.apellido
    const nombre   = AlgoBuscaNombre.obtenerNombre(apellido)
    
    res.send({
        nombre: nombre
    })
})

app.listen(port, (req, res) => {
    console.log("WEBSERVER ::: ", port)
})