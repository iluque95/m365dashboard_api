// Includes
module.exports = (express, scooter) => {
    let router = express.Router()

    router.post('', async (req, res, next) => {
        try {
            let doc = await scooter.create(req.body)
            res.json({ success: true, message: doc })
        } catch (e) {
            next(e)
        }
    })

    router.get('', async (req, res, next) => {
        try {
            let doc = await scooter.get()
            res.json({ success: true, message: doc })
        } catch (e) {
            next(e)
        }
    })

    router.get('/:id', async (req, res, next) => {
        try {
            let id = req.params.id
            let doc = await scooter.get_by_id(id)
            res.json({ success: true, message: doc })
        } catch (e) {
            next(e)
        }
    })

    router.put('/:id', async (req, res, next) => {
        try {
            let id = req.params.id
            let doc = await scooter.update(id, req.body)
            res.json({ success: true, message: doc })
        } catch (e) {
            next(e)
        }
    })

    router.delete('/:id', async (req, res, next) => {
        try {
            let id = req.params.id
            let doc = await scooter.delete(id)
            res.json({ success: true, message: req.body })
        } catch (e) {
            next(e)
        }
    })


    return router
}