const router = require('nordic/ragnar').router();
const service = require('../services/productsService')
/**
 * Ejercitación 1
 * 
 * Aquí deberás crear el endpoint con el método GET, el cual consuma
 * el servicio que devuelve los productos de la API de MeLi.
 * 
 * Comando para correr el test: `npm run test:unit:watch get-products`
 */

router.get('/', (res, req) => {
    const {name, limit} = req.query
    const {siteId} = req.platform
    service.getProducts(siteId, name, limit)
        .then(response =>res.json(response))
        .catch(err => console.log(err))
})

module.exports = router;
