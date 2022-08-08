const React = require('react');
const View = require('./view');
const ProductsService = require('../../../services/productsService');

exports.fetchProducts = function fetchProducts (req, res, next){
    ProductsService.fetchProducts('MLA', 'phone', 5)
        .then(response => {
            res.locals.products = response
            next()
        })
        .catch(err => console.log(err))
}

//Esta función nos sirve para renderizar el componente de la view 

exports.render = function render (req,res){

    /* Aquí estamos creando el componente con el nombre 
    de la page para pasarle las props a la view */
    const Products = (props) => < View {...props}/>

    /* Metodo Render propio de ragnar que recibe el componente y las props, 
    permite poder renderizar html(jsx) */
    res.render(Products, { message: 'Hola sí puedes y vas a poder :D', products: res.locals.products });

}