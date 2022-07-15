const express       = require('express')
const bodyParser    = require('body-parser')
const app     = express()
const port    = 3000

const AlgoBuscaNombre = require('./services/algobuscanombre.service')
const Persona         = require('./services/persona.service')
const Usuario         = require('./services/usuarios.service')
const Producto        = require('./services/productos.service')
const Cliente         = require('./services/clientes.service')
const Compras         = require('./services/compras.service')
const Middleware      = require('./services/middleware')

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


// Tienda
    // Usuarios
    app.post('/tienda/usuarios/login', async (req, res) => {
        const usuario  = req.body
        const respuesta = await Usuario.auth(usuario)
        res.send(respuesta)
    })
    // Productos
    app.get('/tienda/productos', async (req, res) => {
        const productos = await Producto.todos()
        res.send(productos)
    })
    // new
    app.post('/tienda/productos',  Middleware.access, async (req, res) => {
        const producto  = req.body
        console.log(req.headers.token)
        const respuesta = await Producto.nuevo(producto)
        res.send(respuesta)
    })
    // edit
    app.put('/tienda/productos', Middleware.access, async (req, res) => {
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

    // Compras
        // Reporte
        app.get('/tienda/compras/reporte', async (req, res) => {
            const reporte = await Compras.todas()
            res.send(reporte)
        })

        // Crear compra
        app.post('/tienda/compras', async (req, res) => {
            const compra  = req.body
            const respuesta = await Compras.nuevo(compra)
            res.send(respuesta)
        })

app.listen(port, (req, res) => {
    console.log("WEBSERVER ::: ", port)
})