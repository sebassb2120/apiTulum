// RESERVAS.

import {ServicioReserva} from '../Service/ServicioReserva.js'

export class ControladorReserva{

    constructor(){}
    async registrarReserva(peticion,respuesta){
        try{
            let serviReserva = new ServicioReserva()
            let datosReservaModificar = peticion.body
            await serviReserva.registrarReserva(datosReservaModificar)

            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos": datosReservaModificar
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }

    async buscarReservas(peticion,respuesta){
        try{

            let serviReserva = new ServicioReserva()
            let datosReservaABuscar=peticion.body
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos": await serviReserva.buscarReserva(datosReservaABuscar)
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }

    async buscarReservaporId(peticion,respuesta){
        try{

            let serviReserva = new ServicioReserva()
            let idReservaBuscar=peticion.params.id
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de buscado",
                "datos": await serviReserva.buscarReservaporId(idReservaBuscar)
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }    

    async modificarReserva(peticion,respuesta){
        try{

            let serviReserva = new ServicioReserva()
            let idReservaModificar = peticion.params.id
            let datosReservaModificar = peticion.body
            await serviReserva.modificarReserva(idReservaModificar, datosReservaModificar)

            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos": datosReservaModificar
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }

    async borrarReserva(peticion,respuesta){
        try{

            let serviReserva = new ServicioReserva()
            let idServicioBorrar = peticion.params.id 
            await serviReserva.borrarHabitacion(idServicioBorrar);

            respuesta.status(200).json({
                "mensaje": "Reserva eliminada con éxito",
            });


        }catch(error){
             respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de datos" + error
                
            })
        }
    }
}
