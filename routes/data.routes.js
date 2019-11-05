// Includes
module.exports = (express, Data) => {
    let router = express.Router()
    // LCRUD: get, post, get/id, put|patch, delete

    router.post('', async (req, res, next) => {
        try {
            let doc = await Data.create(req.body)
            res.json(doc)
        } catch(e) {
            next(e)
        }
    })

    router.get('', async (req, res, next) => {
        try {
            let doc = await Data.get()
            res.json(doc)
        } catch(e) {
            next(e)
        }
    })

    return router
}