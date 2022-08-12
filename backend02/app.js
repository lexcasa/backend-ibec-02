const express = require('express')
const cors    = require('cors')
const bodyParser = require('body-parser')
const app     = express()
const port    = 3000

// Servicio de producto
const Producto = require('./services/producto.services')

app.use(cors())
app.use(bodyParser.json())

// Productos
app.get('/productos', async (req, res) => {
    const productos = await Producto.todos()
    res.send(productos)
})
// new
app.post('/productos', async (req, res) => {
    const producto  = req.body
    console.log(req.headers.token)
    const respuesta = await Producto.nuevo(producto)
    res.send(respuesta)
})
// edit
app.put('/productos',  async (req, res) => {
    const producto  = req.body
    const respuesta = await Producto.editar(producto)
    res.send(respuesta)
})

app.delete('/productos/:id', async (req, res) => {
    const id  = req.params.id
    const respuesta = await Producto.eliminar(id)
    res.send(respuesta)
})

app.get('/productos/:id', async (req, res) => {
    const id  = req.params.id
    const respuesta = await Producto.porId(id)
    res.send(respuesta)
})

app.listen(port, (req, res) => {
    console.log("running :: ", port)
})