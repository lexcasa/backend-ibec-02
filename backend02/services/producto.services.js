const Mdb = require('./mdb.service')
const tabla = "productos"
const Producto = {
    todos: async function (){
        const sql = `
            SELECT * FROM ${tabla} 
        `
        return Mdb.query(sql, [])
    },
    nuevo: async function (producto){
        const sql = `
            INSERT INTO ${tabla} (modelo, marca, cc)
            VALUES (?, ?, ?)
        `
        return Mdb.query(sql, [producto.modelo, producto.marca, producto.cc])
    },
    editar: async function (producto){
        const sql = `
            UPDATE ${tabla} SET 
                modelo = ?, 
                marca = ?, 
                cc = ?
            WHERE id = ?
        `
        return Mdb.query(sql, [producto.modelo, producto.marca, producto.cc, producto.id])
    },
    eliminar: async function (id){
        const sql = `
            DELETE FROM ${tabla} WHERE id = ?
        `
        return Mdb.query(sql, [id])
    }
}
module.exports = Producto