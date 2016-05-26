var Checkout = require('./../controllers/checkouts');
var Products = require("./../controllers/products.js");

module.exports = function(app){

	app.get('/checkout', Checkout.index);

	app.post('/checkout', Checkout.create);

	app.get('/products', Products.index);
	app.post('/addProduct', Products.create);
}
