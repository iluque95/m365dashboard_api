module.exports = (express, scooter) => {
    let router = express.Router()


    router.get('/:id', async (req, res, next) => {
        try {

            let id = req.params.id
            let ret = await scooter.fuelSaved(id)

            res.json(ret)

        } catch (e) {
            next(e)
        }
    })

    return router
}