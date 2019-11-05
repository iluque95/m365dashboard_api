module.exports = (DataModel) => {
    class Data {

        async create(params) {
            return new Promise(async (resolve, reject) => {
                try {
                    // validacion: if (!params.km) throw new Error('El km es obligatorio')
                    params.creationDate = this.formatDate(params.creationDate)
                    let model = new DataModel(params)
                    let response = await model.save()
                    resolve(response)
                } catch(e) {
                    reject(e)
                }
            })
        }

        async get() {
            return new Promise(async (resolve, reject) => {
                try {
                    let list = await DataModel.find()
                    resolve(list)
                } catch(e) {
                    reject(e)
                }
            })
        }

        formatDate(date) {
            return new Date(date)
        }
    }

    return new Data()
}