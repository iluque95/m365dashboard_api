module.exports = function temperatureModel(mongoose, uniqueValidator) {
    const Schema = mongoose.Schema
    const temperatureSchema = new Schema({
        serial: {type: Number, required: true, unique: true, dropDups: true},
        controller: { type: Number, required: true },
        sensor1: { type: Number, required: true },
        sensor2: { type: Number, required: true }
    }).plugin(uniqueValidator)

    return mongoose.model('temperature', temperatureSchema)
}