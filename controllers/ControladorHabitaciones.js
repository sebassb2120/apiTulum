export class ControladorHabitaciones{

    constructor(){}
    registrarHabitacion(peticion,respuesta){
        try{
            // esculcar los datos que quieren usar para el registro.
            let datosHabitacionAregistrar=peticion.body

            // validar datos 
            // intentar guardar los datos
            // responder 
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos": "aca van los datos guardados"
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
    buscarHabitaciones(peticion,respuesta){
        try{
            // intengtar buscar los datos en BD
            // responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos": "aca van los datos buscados"
            })
            
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
    buscarHabitacionporId(peticion,respuesta){
        try{
            // esculcar los parametros de la peticion
            let idHabitacionBuscar=peticion.params.id
            //validar el dato que llegoo
            // intento buscar el dato en bd
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de buscado",
                "datos": "aca van el dato buscado"
            })

 

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }      
    modificarHabitacion(peticion,respuesta){
        try{ 
            // traigo el id ha editar de la peticio
            let idHabitacionModificar = peticion.params.id
            let datosHabitacionModificar = peticion.body

            // validar los datatos
            // intentar uscar y modificar en bd
            //respuesta
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos": "aca van los datos editados"
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
    borrarHabitacion(peticion,respuesta){
        try{
            let idHabiacionBorrar = peticion.params.id 

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
}

// RESERVAS.

export class ControladorReserva{
    constructor(){}
    registrarReserva(peticion,respuesta){
        try{

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
    buscarReservas(peticion,respuesta){
        try{

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
    buscarReservaporId(peticion,respuesta){
        try{

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }      
    modificarReserva(peticion,respuesta){
        try{

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
    borrarReserva(peticion,respuesta){
        try{

        }catch(error){
             respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
}
