const router = require('nordic/ragnar').router()
const { render, fetchProductList } = require('./controller')

router.get('/', fetchProductList, render);

module.exports = router;