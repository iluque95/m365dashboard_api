const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const errorHandler = require('./errorHandler')
const uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true, useUnifiedTopology: true, createIndexes: true })
mongoose.Promise = Promise
let app = express()

let scooterModel = require('./data/scooterModel')(mongoose, uniqueValidator)
let scooter = require('./data/scooter')(scooterModel)
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