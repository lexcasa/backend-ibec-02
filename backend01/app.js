const express       = require('express')
const bodyParser    = require('body-parser')
const app     = express()
const port    = 3000

const AlgoBuscaNombre = require('./services/algobuscanombre.service')
const Persona         = require('./services/persona.service')
const Usuario         = require('./services/usuarios.service')
const Producto        = require('./services/productos.service')
const Cliente         = require('./services/clientes.service')


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


/// Obtener usuario por ID
app.get('/usuarios/:id', (req, res) => {
    const id   = req.params.id
    const respuesta = Usuario.obtenerPorId(id)

    res.send(respuesta)
})

app.put('/usuarios/:id', (req, res) => {
    const usuario   = req.body
    const id        = req.params.id
    const respuesta = Usuario.actualizarPorId(id, usuario)

    res.send(respuesta)
})

app.delete('/usuarios/:id', (req, res) => {
    const id   = req.params.id
    const respuesta = Usuario.eliminar(id)

    res.send(respuesta)
})

app.get('/usuarios', (req, res) => {
    const usuarios = Usuario.todos()
    res.send(usuarios)
})

app.post('/usuarios', (req, res) => {
    const usuario   = req.body
    const respuesta = Usuario.crear(usuario)

    res.send(respuesta)
})

// Tienda
    // Productos
    app.get('/tienda/productos', async (req, res) => {
        const productos = await Producto.todos()
        res.send(productos)
    })
    // new
    app.post('/tienda/productos', async (req, res) => {
        const producto  = req.body
        const respuesta = await Producto.nuevo(producto)
        res.send(respuesta)
    })
    // edit
    app.put('/tienda/productos', async (req, res) => {
        const producto  = req.body
        const respuesta = await Producto.editar(producto)
        res.send(respuesta)
    })

    app.delete('/tienda/productos/:id', async (req, res) => {
        const id  = req.params.id
        const respuesta = await Producto.eliminar(id)
        res.send(respuesta)
    })


    // Clientes
    app.get('/tienda/clientes', async (req, res) => {
        const clientes = await Cliente.todos()
        res.send(clientes)
    })
    // new
    app.post('/tienda/clientes', async (req, res) => {
        const cliente  = req.body
        const respuesta = await Cliente.nuevo(cliente)
        res.send(respuesta)
    })
    // edit
    app.put('/tienda/clientes', async (req, res) => {
        const cliente  = req.body
        const respuesta = await Cliente.editar(cliente)
        res.send(respuesta)
    })

    app.delete('/tienda/clientes/:id', async (req, res) => {
        const id  = req.params.id
        const respuesta = await Cliente.eliminar(id)
        res.send(respuesta)
    })


app.listen(port, (req, res) => {
    console.log("WEBSERVER ::: ", port)
})