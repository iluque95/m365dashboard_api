const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const errorHandler = require('./errorHandler')
const uniqueValidator = require('mongoose-unique-validator');
const request = require('request');
const fuel_api = "https://www.mapabase.es/arcgis/rest/services/Otros/Gasolineras/FeatureServer/0/query?where=UPPER(direcci%C3%B3n)%20like%20%27%25AVINGUDA%20EDUARDO%20TOLDRA%25%27%20AND%20UPPER(c%C3%B3digo_postal)%20like%20%27%2508800%25%27%20AND%20UPPER(r%C3%B3tulo)%20like%20%27%25GALP%25%27&outFields=*&outSR=4326&f=json"

mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = Promise
let app = express()

let scooterModel = require('./data/scooterModel')(mongoose, uniqueValidator)
let scooter = require('./data/scooter')(scooterModel, request, fuel_api)
let scooterRoutes = require('./routes/scooter.routes')(express, scooter)

let temperatureModel = require('./temperature/temperatureModel')(mongoose, uniqueValidator, uniqueValidator)
let temperature = require('./temperature/temperature')(temperatureModel)
let temperatureRoutes = require('./routes/temperature.routes')(express, temperature)

let fuelRoutes = require('./routes/fuel.routes')(express, scooter)

app.use(bodyParser.json())

app.use('/scooter', scooterRoutes)
app.use('/temperature', temperatureRoutes)
app.use('/fuelSave', fuelRoutes)

app.use(errorHandler)

app.listen(3000, '192.168.1.39')
console.info('API running in port 3000')