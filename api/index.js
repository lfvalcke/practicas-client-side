/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();

/**
 * Routers
 */
const getProducts = require('./get-products')


/**
 * Expose API router
 */
router.use('/get-products', getProducts)

module.exports = router;
