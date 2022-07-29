const Mdb = require('./mdb.service')
const jwt = require('jsonwebtoken')
const KEY = 'Hola.mundo!'
const tabla = "usuarios"
const Usuario = {
    auth: async function (usuario){
        const sql = `
            SELECT id, usuario, tipo FROM ${tabla} 
            WHERE usuario = ? AND clave = MD5(?) AND activo = 1
        `
        // Generar el token dentro del servicio de autenticacion
        const arrUsuario = await Mdb.query(sql, [usuario.usuario, usuario.clave])
        let usr
        // El usuario es correcto
        if(arrUsuario.length > 0){
            usr = arrUsuario[0]
            let tmpUsr = {...usr}
            let token = jwt.sign(tmpUsr, KEY)
            // Al token que firmamos a partir del usuario que encontramos en la DB
            usr.token = token
        }

        return usr ? usr : []
    }
}
module.exports = Usuario