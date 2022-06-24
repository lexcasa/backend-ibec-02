const Mdb = require('./mdb.service')
const tabla = "clientes"
const Cliente = {
    todos: async function (){
        const sql = `
            SELECT * FROM ${tabla} 
        `
        return Mdb.query(sql, [])
    },
    nuevo: async function (cliente){
        const sql = `
            INSERT INTO ${tabla} (nombre, documento, email)
            VALUES (?, ?, ?)
        `
        return Mdb.query(sql, [cliente.nombre, cliente.documento, cliente.email])
    },
    editar: async function (cliente){
        const sql = `
            UPDATE ${tabla} SET 
                nombre = ?, 
                documento = ?, 
                email = ?
            WHERE id = ?
        `
        return Mdb.query(sql, [cliente.nombre, cliente.documento, cliente.email, cliente.id])
    },
    eliminar: async function (id){
        const sql = `
            DELETE FROM ${tabla} WHERE id = ?
        `
        return Mdb.query(sql, [id])
    }
}
module.exports = Cliente