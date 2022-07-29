const express = require('express')
const router = express.Router()
const Middleware = require('../services/middleware')
const Usuario    = require('../services/usuarios.service')
const Producto   = require('../services/productos.service')
const Cliente    = require('../services/clientes.service')
const Compras    = require('../services/compras.service')


// Usuarios
router.post('/usuarios/login', async (req, res) => {
    const usuario  = req.body
    const respuesta = await Usuario.auth(usuario)
    res.send(respuesta)
})
// Productos
router.get('/productos', async (req, res) => {
    const productos = await Producto.todos()
    res.send(productos)
})
// new
router.post('/productos',  Middleware.access, async (req, res) => {
    const producto  = req.body
    console.log(req.headers.token)
    const respuesta = await Producto.nuevo(producto)
    res.send(respuesta)
})
// edit
router.put('/productos', Middleware.access, async (req, res) => {
    const producto  = req.body
    const respuesta = await Producto.editar(producto)
    res.send(respuesta)
})

router.delete('/productos/:id', async (req, res) => {
    const id  = req.params.id
    const respuesta = await Producto.eliminar(id)
    res.send(respuesta)
})


// Clientes
router.get('/clientes', async (req, res) => {
    const clientes = await Cliente.todos()
    res.send(clientes)
})
// new
router.post('/clientes', async (req, res) => {
    const cliente  = req.body
    const respuesta = await Cliente.nuevo(cliente)
    res.send(respuesta)
})
// edit
router.put('/clientes', async (req, res) => {
    const cliente  = req.body
    const respuesta = await Cliente.editar(cliente)
    res.send(respuesta)
})

router.delete('/clientes/:id', async (req, res) => {
    const id  = req.params.id
    const respuesta = await Cliente.eliminar(id)
    res.send(respuesta)
})

// Compras
    // Reporte
    router.get('/compras/reporte', async (req, res) => {
        const reporte = await Compras.todas()
        res.send(reporte)
    })

    // Crear compra
    router.post('/compras', async (req, res) => {
        const compra  = req.body
        const respuesta = await Compras.nuevo(compra)
        res.send(respuesta)
    })

    router.post('/compras/:id', async (req, res) => {
        const compra  = req.body
        const id      = req.params.id
        const respuesta = await Compras.nuevo(compra, id)
        res.send(respuesta)
    })
module.exports = router