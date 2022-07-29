const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')

const app     = express()
const port    = 3000


// Rutas
const tiendaRoutes    = require('./routes/tienda.routes')
const personasRoutes  = require('./routes/persona.routes')

app.get('/', (req, res) => {
    res.send({
        respuesta: "Hola Mundo"
    })
})

app.use(cors())
app.use(bodyParser.json())

// Tienda
app.use('/tienda', tiendaRoutes)

// Personas
app.use('/personas', personasRoutes)

app.listen(port, (req, res) => {
    console.log("WEBSERVER ::: ", port)
})