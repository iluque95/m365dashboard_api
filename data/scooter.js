module.exports = (scooterModel, request, fuel_api) => {
    class Scooter {

        async create(params) {
            return new Promise(async (resolve, reject) => {
                try {
                    //params.creationDate = this.formatDate(params.creationDate)
                    let model = new scooterModel(params)
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
                    let list = await scooterModel.find()
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
                        list = await scooterModel.findById(id)
                    else
                        list = await scooterModel.findOne({ serial: id })

                    resolve(list)
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
                        list = await scooterModel.findByIdAndUpdate(id, params)
                    else
                        list = await scooterModel.findOneAndUpdate({ serial: id }, params)

                    resolve(list)
                } catch (e) {
                    reject(e)
                }
            })
        }

        async delete(id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let doc

                    if (id.length == 24)
                        doc = await scooterModel.findByIdAndDelete(id)
                    else
                        doc = await scooterModel.findOneAndDelete({ serial: id })

                    resolve(doc)
                } catch (e) {
                    reject(e)
                }
            })
        }

        async fuelSaved(id) {
            return new Promise(async (resolve, reject) => {
                request.get(fuel_api, async (error, response, body) => {

                    try {

                        let doc = await this.get_by_id(id)

                        let ret = JSON.parse(body).features[0].attributes.precio_gasolina_95 * doc.total_km

                        resolve({ success: true, message: { money_saved: ret + ' €' } })

                    } catch (e) {
                        reject(e)
                    }

                })
            })
        }

    }

    return new Scooter()
}