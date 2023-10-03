import express from "express";
import {ControladorHabitaciones, ControladorReserva} from '../controllers/ControladorHabitaciones.js'

// para poder llamar al controlador debo crear un objeto de la clase controladorhabitacion
let controladorHabitacion = new ControladorHabitaciones();
let controladorReserva = new ControladorReserva();


export let rutas = express.Router();

rutas.post("/api/habitaciones", controladorHabitacion.registrarHabitacion);

rutas.get("/api/habitacion", controladorHabitacion.buscarHabitacionporId);

rutas.get("/api/habitaciones/estrato",controladorHabitacion.buscarHabitaciones);

rutas.put("/api/habitaciones",controladorHabitacion.modificarHabitacion);

rutas.delete("/api/habitaciones",controladorHabitacion.borrarHabitacion );



// ---------------------------------------------- RESERVAS -----------------------------------------------

//atendiendo una peticion y respondiendo
rutas.post("/api/reservas",controladorReserva.registrarReserva );

rutas.get("/api/reserva",controladorReserva.buscarReservaporId );

rutas.get("/api/reservas/estrato",controladorReserva.buscarReservas );

rutas.put("/api/reservas",controladorReserva.modificarReserva );

rutas.delete("/api/reservas",controladorReserva.borrarReserva );