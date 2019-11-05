// Includes
module.exports = (express, Data) => {
    let router = express.Router()
    // LCRUD: get, post, get/id, put|patch, delete

    router.post('', async (req, res, next) => {
        try {
            let doc = await Data.create(req)
            res.json(doc)
        } catch(e) {
            res.json(e)
        }
    })

    router.get('', async (req, res, next) => {
        try {
            let doc = await Data.create(req)
            res.json(doc)
        } catch(e) {
            res.json(e)
        }
    })

    // POST localhost:3000/data
    // GET localhost:3000/data
    // PUT localhost:3000/data

    return router
}