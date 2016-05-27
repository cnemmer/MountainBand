var Checkout = require('./../controllers/checkouts');
var Products = require("./../controllers/products.js");
var User = require("./../controllers/users.js");
var AdminProduct =  require("./../controllers/adminproducts.js");

module.exports = function(app){

	app.get('/checkout', Checkout.index);

	app.post('/checkout', Checkout.create);

	app.post('/chargeUser', Checkout.charge);

	app.get('/products', Products.index);
	app.post('/addProduct', Products.create);




	app.post('/users', User.create);

	app.get('/users', User.index);


	app.get('/adminproducts', AdminProduct.index);

	app.post('/adminproducts', AdminProduct.create);
}

