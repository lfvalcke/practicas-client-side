const React = require('react');
const ProductsService = require('../../../services/productsService');
const View = require('./view');

exports.fetchProductList = function fetchProductList(req, res, next){
    const {name, limit} = req.query
    const siteId = req.platform.siteId;

    ProductsService.getProducts(siteId, name, limit)
        .then(response => {
            res.locals.productList = response
            next()
        })
        .catch(err => next(err))
}

exports.render = function render(req, res){
    
    const ProductList = props => < View {...props} />

    res.render(ProductList, {
        message: 'Hola, aquí estoy',
        products: res.locals.productList
    });
}
