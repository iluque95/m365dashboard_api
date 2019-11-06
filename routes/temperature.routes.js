// Includes
module.exports = (express, temperature) => {
    let router = express.Router()

    router.post('', async (req, res, next) => {
        try {
            let doc = await temperature.create(req.body)
            res.json({ success: true, message: doc })
        } catch (e) {
            next(e)
        }
    })

    router.get('', async (req, res, next) => {
        try {
            let doc = await temperature.get()
            res.json({ success: true, message: doc })
        } catch (e) {
            next(e)
        }
    })

    router.get('/:id', async (req, res, next) => {
        try {
            let id = req.params.id
            let doc = await temperature.get_by_id(id)
            res.json({ success: true, message: doc })
        } catch (e) {
            next(e)
        }
    })

    router.put('/:id', async (req, res, next) => {
        try {
            let id = req.params.id
            let doc = await temperature.update(id, req.body)
            res.json({ success: true, message: doc })
        } catch (e) {
            next(e)
        }
    })

    router.delete('/:id', async (req, res, next) => {
        try {
            let id = req.params.id
            let doc = await temperature.delete(id)
            res.json({ success: true, message: req.body })
        } catch (e) {
            next(e)
        }
    })

    return router
}