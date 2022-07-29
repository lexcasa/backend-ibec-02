const express = require('express')
const router  = express.Router()

const AlgoBuscaNombre = require('../services/algobuscanombre.service')
const Persona         = require('../services/persona.service')

router.get('/obtener-nombre/:apellido', (req, res) => {
    const apellido = req.params.apellido
    const nombre   = AlgoBuscaNombre.obtenerNombre(apellido)
    
    res.send({
        nombre: nombre
    })
})

// 
router.post('/obtener-edad', (req, res) => {
    const persona   = req.body
    const respuesta = Persona.obtenerEdad(persona)

    res.send(respuesta)
})

router.post('/saludo', (req, res) => {
    const persona   = req.body
    const respuesta = Persona.saludo(persona)

    res.send(respuesta)
})

module.exports = router