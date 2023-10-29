// error 200 = todo sale bien 
// error 300 = error en la red
// error 400 = error en la red
// error 500 = error en el servidor

import {ServicioHabitacion} from '../Service/ServicioHabitacion.js'

export class ControladorHabitaciones{

    constructor(){}
    async registrarHabitacion(peticion,respuesta){
        try{

            let servicioHabitacion = new ServicioHabitacion()
            // esculcar los datos que quieren usar para el registro.
            let datosHabitacionAregistrar=peticion.body
            // validar datos 
            // intentar guardar los datos
            await servicioHabitacion.registrarHabitacion(datosHabitacionAregistrar)
            // responder 
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos": datosHabitacionAregistrar
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }

    async buscarHabitaciones(peticion,respuesta){
        try{

            let servicioHabitacion = new ServicioHabitacion()
            let datosHabitacionBuscar=peticion.body
            // intengtar buscar los datos en BD
            // responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos": await servicioHabitacion.buscarHabitaciones(datosHabitacionBuscar)
            })
            
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }

    async buscarHabitacionporId(peticion,respuesta){
        try{

            let servicioHabitacion = new ServicioHabitacion()
            // esculcar los parametros de la peticion
            let idHabitacionBuscar=peticion.params.id
            //validar el dato que llegoo
            // intento buscar el dato en bd
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de buscado",
                "datos": await servicioHabitacion.buscarHabitacionporId(idHabitacionBuscar)
            })

 

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }

    async modificarHabitacion(peticion,respuesta){
        try{ 

            let servicioHabitacion = new ServicioHabitacion()
            // traigo el id ha editar de la peticio
            let idHabitacionModificar = peticion.params.id
            let datosHabitacionModificar = peticion.body

            // validar los datatos
            // intentar uscar y modificar en bd
            await servicioHabitacion.modificarHabitacion(idHabitacionModificar, datosHabitacionModificar)
            //respuesta
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos": datosHabitacionModificar
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }

    async borrarHabitacion(peticion,respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion();
            let idHabitacionBorrar = peticion.params.id 
            await servicioHabitacion.borrarHabitacion(idHabitacionBorrar);

            respuesta.status(200).json({
                "mensaje": "Habitación eliminada con éxito",
            });

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
}
    





