const Mdb = require('./mdb.service')
const tabla = "compras"
const Compras = {
    todas: async function (){
        const sql = `
            SELECT 
                CONCAT(productos.marca, " ", productos.modelo) AS producto,
                clientes.nombre AS cliente,
                ${tabla}.cantidad,
                ${tabla}.precio
            FROM ${tabla}
            JOIN clientes ON clientes.id = ${tabla}.idCliente
            JOIN productos ON productos.id = ${tabla}.idProducto
        `
        let rows  = await Mdb.query(sql, []);
        let total = 0
        rows.map( row => {
            total += parseInt(row.cantidad) * parseFloat(row.precio)
        })

        total = total.toFixed(2)

        let response = {
            total: total,
            compras: rows
        }

        console.log("row: ", rows)
        return response
    },
    nuevo: async function (compra){
        const sql = `
            INSERT INTO ${tabla} (idProducto, idCliente, cantidad, precio)
            VALUES (?, ?, ?, ?)
        `
        return Mdb.query(sql, [compra.idProducto, compra.idCliente, compra.cantidad, compra.precio])
    },
    editar: async function (compra, id){
        const sql = `
        UPDATE ${tabla} SET 
            idProducto = ?, 
            idCliente = ?, 
            cantidad = ?, 
            precio = ?
        WHERE id = ?
    `
        return Mdb.query(sql, [compra.idProducto, compra.idCliente, compra.cantidad, compra.precio, id])
    }
}
module.exports = Compras