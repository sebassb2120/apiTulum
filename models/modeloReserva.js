// Usando Node.js `require()` 
import mongoose from 'mongoose'; 

const Schema = mongoose.Schema

const Reservas = new Schema({
    fechaEntrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    persona:{
        type:String,
        required:true
    },
    costo:{
        type:Number,
        required:false
    },
    
})

export const modeloHabitacion = mongoose.model('reservas', Reservas)