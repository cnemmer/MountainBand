var Checkout = require('./../controllers/checkouts');
var User = require("./../controllers/users.js");
var AdminProduct =  require("./../controllers/adminproducts.js");

module.exports = function(app){

	app.get('/checkout', Checkout.index);

	app.post('/checkout', Checkout.create);

	app.post('/chargeUser', Checkout.charge);

	app.get('/products', AdminProduct.index);

	app.post('/users', User.create);

	app.get('/users', User.index);


	app.get('/adminproducts', AdminProduct.index);

	app.post('/adminproducts', AdminProduct.create);

	app.get('/adminproducts/:id', AdminProduct.show);

	app.put('/adminproducts/:id', AdminProduct.update);
}
