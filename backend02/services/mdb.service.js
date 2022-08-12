const mysql      = require('mysql');
const Mdb = {
    query: function (query, fields){
        
        const connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'tienda_motos'
        });

        return new Promise( (resolve, reject) => {
            connection.connect();
            connection.query(query, fields, function (error, results, fields) {
                if(error){
                    reject(error)
                } else {
                    resolve(results)
                }
            })
            connection.end();
        })
    }
}
module.exports = Mdb