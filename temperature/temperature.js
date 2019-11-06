module.exports = (temperatureModel) => {
    class Temperature {

        async create(params) {
            return new Promise(async (resolve, reject) => {
                try {
                    // validacion: if (!params.km) throw new Error('El km es obligatorio')
                    //params.creationDate = this.formatDate(params.creationDate)
                    let model = new temperatureModel(params)
                    let response = await model.save()
                    resolve(response)
                } catch (e) {
                    reject(e)
                }
            })
        }

        async get() {
            return new Promise(async (resolve, reject) => {
                try {
                    let list = await temperatureModel.find()
                    resolve(list)
                } catch (e) {
                    reject(e)
                }
            })
        }

        async get_by_id(id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let list

                    if (id.length == 24)
                        list = await temperatureModel.findById(id)
                    else
                        list = await temperatureModel.findOne({ serial: id })

                } catch (e) {
                    reject(e)
                }
            })
        }

        formatDate(date) {
            return new Date(date)
        }

        async update(id, params) {
            return new Promise(async (resolve, reject) => {
                try {
                    let list

                    if (id.length == 24)
                        list = await temperatureModel.findByIdAndUpdate(id, params)
                    else
                        list = await temperatureModel.find({ serial: id }, params)

                    resolve(doc)
                } catch (e) {
                    reject(e)
                }
            })
        }

        async delete(id) {
            return new Promise(async (resolve, reject) => {
                try {

                    if (id.length == 24)
                        doc = await temperatureModel.findByIdAndDelete(id)
                    else
                        doc = await temperatureModel.findOneAndDelete({ serial: id })

                    resolve(doc)
                } catch (e) {
                    reject(e)
                }
            })
        }
    }

    return new Temperature()
}