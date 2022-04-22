const personas = [
    {
        nombre: "alex",
        apellido: "casadevall",
        edad: 30
    },
    {
        nombre: "juan",
        apellido: "correa",
        edad: 28
    },
    {
        nombre: "pedro",
        apellido: "hernandez",
        edad: 33
    }
]
const Persona = {
    obtenerEdad: function (objPersona){
        let obj = undefined
        // 
        personas.map( item => {
            if(item.nombre == objPersona.nombre && item.apellido == objPersona.apellido){
                obj = item
            }
        })

        // if - else en linea
        // if obj existe (?) entonces obj.edad caso contrario (:) error
        return obj ? {edad: obj.edad} : {error: 'No se encontro la edad'}
    }
}

// Probar la funcion: 
// Definimos una persona que funciona {nombre: "alex", apellido: "casadevall"}
// Definimos una persona que da error {nombre: "alex", apellido: "correa"}
/*
    let objSuccess = {
        nombre: "alex",
        apellido: "casadevall"
    }

    let objError = {
        nombre: "alex",
        apellido: "correa"
    }

    console.log( Persona.obtenerEdad(objSuccess),   " ---> 30")
    console.log( Persona.obtenerEdad(objError),     " ---> Error")
*/
module.exports = Persona