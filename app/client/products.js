const React = require('react');
const View = require('../pages/products/view');
const hydrate = require('nordic/hydrate');

/* Con el logramos hacer nuestra página dinamica 
agregando los escuchadores de eventos */

hydrate(< View />, document.getElementById('root-app'))