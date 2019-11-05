const express = require('express')
const mongoose = require('mongoose')
const errorHandler = require('./errorHandler')

mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise
let app = express()

let DataModel = require('../api/data/DataModel')(mongoose)
let Data = require('../api/data/Data')(DataModel)
let dataRoutes = require('../api/routes/data.routes')(express, Data)

app.use('/data', dataRoutes)

//app.use(errorHandler)

/*
createCollection()

async function createCollection() {
    try {
        let collection = {
            km: 5,
            firmware: 3.0,
            voltage: 35,
            distance: 1009,
            creationDate: '2019-01-01'
        }

        let doc = await Data.create(collection)
        console.log(doc)
        //mongoose.connection.close()
    } catch (e) {
        console.log(e)
    }
}
*/

app.listen(3000, '192.168.1.39')
console.info('API running in port 3000')