//Importando el paquete
const express = require('express')
const app = express()

//atendiendo una peticion y respondiendo
app.get('/api/habitaciones', function (req, res) {
  res.send('Hello World')
})

app.get('/api/habitaciones', function (req, res) {
    res.send('Hello World')
})

app.get('/api/habitaciones', function (req, res) {
    res.send('Hello World')
})

app.get('/api/habitaciones', function (req, res) {
    res.send('Hello World')
})

app.get('/api/habitaciones', function (req, res) {
    res.send('Hello World')
})

app.get('/api/habitaciones', function (req, res) {
    res.send('Hello World')
})
//levantando el servidor
app.listen(3000, function(){
    console.log("servidor operando")
})