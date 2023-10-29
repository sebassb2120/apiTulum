import { Api } from "./api.js";
import 'dotenv/config'

console.log(process.env)
//Para usar una clase debo crear un objeto
// para usar una clase se debe crear una instancia
// todo objeto es una variable

let servidor  = new Api()

//levantar o despertar el servidor
servidor.levantarServidor()