var Checkout = require('./../controllers/checkouts');

module.exports = function(app){

	app.get('/checkout', Checkout.index);

	app.post('/checkout', Checkout.create);

	app.post('/chargeUser', Checkout.charge);
}