const Mdb = require('./mdb.service')
const tabla = "usuarios"
const Usuario = {
    auth: function (usuario){
        const sql = `
            SELECT id, usuario, tipo FROM ${tabla} 
            WHERE usuario = ? AND clave = MD5(?) AND activo = 1
        `
        return Mdb.query(sql, [usuario.usuario, usuario.clave])
    }
}
module.exports = Usuario