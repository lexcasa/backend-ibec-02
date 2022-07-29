const jwt = require('jsonwebtoken')
const KEY = 'Hola.mundo!'
const Middleware = {
    access: function (req, res, next){
        let usr

        try {
            usr = jwt.verify(req.headers.token, KEY)
            console.log("token", usr)
        } catch (e){
            console.log("error", e)
        }

        if(usr && usr.tipo == 'admin'){
            next()
        } else {
            // Arrojar un error al cliente
            res.status(401).send({
                error: "Usuario no autorizado"
            })
        }
    }
}
module.exports = Middleware