import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{
    constructor(){}

    async registrarReserva(datos){
       let registroNuevo = new modeloReserva(datos)
       return await registroNuevo.save()
    }
    async buscarReservas(){
        let reservas = await modeloReserva.find()
        return reservas
    }
    async buscarReservaporId(id){
        let reserva = await modeloReserva.find(id)
        return reserva
    }
    async modificarReserva(id,datos){
        return await modeloReserva.findByIdAndUpdate(id, datos)

    }
    async borrarReserva(id){
        return await modeloReserva.findByIdAndUpdatei(id)
    }
}

