const Middleware = {
    access: function (req, res, next){
        if(req.headers.token == '123'){
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