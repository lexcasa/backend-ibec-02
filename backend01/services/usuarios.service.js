const usuarios = [
    {
        id: 123,
        nombre: "Alex",
        apellido: "Casadevall"
    },
    {
        id: 222,
        nombre: "Pedro",
        apellido: "Casadevall"
    },
    {
        id: 111,
        nombre: "Juan",
        apellido: "Casadevall"
    }
]
const SIZE_STACK = 1000000000000000

const orderById = (a, b) => {
    if(a.id < b.id){
        return -1
    } else if (a.id > b.id){
        return 1
    }
    return 0
}

const Usuario = {
    todos: function (){
        return usuarios
    },
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
    },
    crear: function (usuario){
        let allUsers = this.todos()
        allUsers     = allUsers.sort(orderById)
        console.log("usuarios ordenados ::", allUsers)
        let lastUser = allUsers[ allUsers.length - 1]
        // let newId    = lastUser.id + 1
        let newId       = Math.round( Math.random() * SIZE_STACK )

        usuario.id   = newId
        usuarios.push(usuario)

        return usuarios
    },
    eliminar: function (id){
        let findIndx = -1
        usuarios.map( (usuario, i) => {
            if(usuario.id == id){
                findIndx = i
            }
        })
        usuarios.splice(findIndx, 1)
        return usuarios
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