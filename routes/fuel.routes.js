// Includes

var Request = require("request");
var fuel_api = "https://www.mapabase.es/arcgis/rest/services/Otros/Gasolineras/FeatureServer/0/query?where=UPPER(direcci%C3%B3n)%20like%20%27%25AVINGUDA%20EDUARDO%20TOLDRA%25%27%20AND%20UPPER(c%C3%B3digo_postal)%20like%20%27%2508800%25%27%20AND%20UPPER(r%C3%B3tulo)%20like%20%27%25GALP%25%27&outFields=*&outSR=4326&f=json"

module.exports = (express, scooter) => {
    let router = express.Router()


    router.get('/:id', async (req, res, next) => {
        try {

            let id = req.params.id
            let doc = await scooter.get_by_id(id)

            let ret = await Request.get(fuel_api, async (error, response, body) => {

                try {

                    let ret = JSON.parse(body).features[0].attributes.precio_gasolina_95 * doc.total_km

                    res.json({ success: true, message: { money_saved: ret + ' €'}})

                } catch (e) {
                    next(e)
                }

            })

        } catch (e) {
            next(e)
        }
    })

    return router
}