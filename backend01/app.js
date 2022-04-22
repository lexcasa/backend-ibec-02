const express       = require('express')
const bodyParser    = require('body-parser')
const app     = express()
const port    = 3000

const AlgoBuscaNombre = require('./services/algobuscanombre.service')
const Persona         = require('./services/persona.service')


app.get('/', (req, res) => {
    res.send({
        respuesta: "Hola Mundo"
    })
})


// CASO DE TEST
// Si escribo: http://localhost:3000/obtener-nombre/casadevall - me deuvelve un objeto: { apellido: "Casadevall" }
// 
app.use(bodyParser.json())
app.get('/obtener-nombre/:apellido', (req, res) => {
    const apellido = req.params.apellido
    const nombre   = AlgoBuscaNombre.obtenerNombre(apellido)
    
    res.send({
        nombre: nombre
    })
})

// 
app.post('/obtener-edad', (req, res) => {
    const persona   = req.body
    const respuesta = Persona.obtenerEdad(persona)

    res.send(respuesta)
})

app.post('/saludo', (req, res) => {
    const persona   = req.body
    const respuesta = Persona.saludo(persona)

    res.send(respuesta)
})

app.listen(port, (req, res) => {
    console.log("WEBSERVER ::: ", port)
})