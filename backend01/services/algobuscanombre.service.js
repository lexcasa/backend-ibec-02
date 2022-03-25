const AlgoBuscaNombre = {
    obtenerNombre: function (apellido){
        const personas = {
            'casadevall':'alex',
            'rojas':'facundo',
            'segundo':'juan'
        }
        let nombre = personas[apellido]

        if(nombre){
            return nombre
        } else {
            return 'Error no se encontro el nombre'
        }
    }
}
module.exports = AlgoBuscaNombre