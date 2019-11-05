const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const errorHandler = require('./errorHandler')

mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise
let app = express()

let DataModel = require('./data/DataModel')(mongoose)
let Data = require('./data/Data')(DataModel)
let dataRoutes = require('./routes/data.routes')(express, Data)

app.use(bodyParser.json())

app.use('/data', dataRoutes)

app.use(errorHandler)

app.listen(3000, '192.168.1.39')
console.info('API running in port 3000')