var Checkout = require('./../controllers/checkouts');
var User = require("./../controllers/users.js");
var AdminProduct =  require("./../controllers/adminproducts.js");
var Product = require('./../controllers/products.js')

module.exports = function(app){

	//Routes For User
	app.post('/users', User.create);

	app.get('/users', User.index);


	//Routes For Administrators
	app.get('/products', AdminProduct.index);

	app.get('/adminproducts', AdminProduct.index);

	app.post('/adminproducts', AdminProduct.create);

	app.get('/adminproducts/:id', AdminProduct.show);

	app.put('/adminproducts/:id', AdminProduct.update);



	//Routes For Products
	app.get('/products/:id', Product.show);


	//Routes For Checkout
	app.get('/checkout', Checkout.index);

	app.post('/checkout', Checkout.create);

	app.post('/chargeUser', Checkout.charge);

}
