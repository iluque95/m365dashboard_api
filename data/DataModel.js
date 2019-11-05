module.exports = function dataModel(mongoose) {
    const Schema = mongoose.Schema
    const dataSchema = new Schema({
        km: { type: Number, required: true },
        firmware: Number,
        voltage: Number,
        distance: Number,
        creationDate: Date
    })

    return mongoose.model('Data', dataSchema)
}