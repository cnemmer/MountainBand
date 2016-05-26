var Checkout = require('./../controllers/checkouts');
var Products = require("./../controllers/products.js");

module.exports = function(app){

	app.get('/checkout', Checkout.index);

	app.post('/checkout', Checkout.create);

	app.post('/chargeUser', Checkout.charge);

	app.get('/products', Products.index);
	app.post('/addProduct', Products.create);
}

