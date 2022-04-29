const usuarios = [
    {
        id: 123,
        nombre: "Alex",
        apellido: "Casadevall"
    },
    {
        id: 111,
        nombre: "Juan",
        apellido: "Casadevall"
    },
    {
        id: 222,
        nombre: "Pedro",
        apellido: "Casadevall"
    }
]

const Usuario = {
    obtenerPorId: function (id){
        let find = undefined
        usuarios.map( usuario => {
            if(usuario.id === parseInt(id)){
                find = usuario
            }
        })
        return find ? find : {error: "No existe usuario para la id: " + id}
    },
    actualizarPorId: function (id, usuario){
        const usr = this.obtenerPorId(id)
        
        if(!usr.error){
            // Actualizando propiedades a propiedades
            usr.nombre      = usuario.nombre
            usr.apellido    = usuario.apellido
        }

        return usr
    }
}

// PRUEBAS
// Caso de exito
// console.log(Usuario.obtenerPorId(123), " -----> {nombre: alex}")

// // Caso de error
// console.log(Usuario.obtenerPorId(000), " -----> {error}")

// // Pruebas de actualizar usuario
// // Caso exito
// console.log(Usuario.actualizarPorId(123, {nombre: "Bruno", apellido: "Costa"}), " -----> {nombre: bruno}")

// // Caso de error
// console.log(Usuario.actualizarPorId(000, {nombre: "Bruno", apellido: "Costa"}), " -----> {error}")

module.exports = Usuario