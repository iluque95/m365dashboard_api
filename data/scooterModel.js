module.exports = function scooterModel(mongoose, uniqueValidator) {
    const Schema = mongoose.Schema
    const scooterSchema = new Schema({
        serial: {type: Number, required: true, unique: true, dropDups: true},
        total_km: { type: Number, required: true },
        firmware: { type: Number, required: true },
        ble: { type: Number, required: true },
        bms: { type: Number, required: true },
        bms_serial: { type: Number, required: true },
        battery_capacity: { type: Number, required: true },
        total_cycles: { type: Number, required: true },
        completed_cycles: { type: Number, required: true }
    }).plugin(uniqueValidator)
    
    return mongoose.model('scooter', scooterSchema)
}