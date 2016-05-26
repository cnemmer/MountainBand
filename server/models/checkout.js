var mongoose = require('mongoose');

var CheckoutClientSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	phone: Number,
	streetAdd: String,
	unitNum: Number,
	city: String,
	state: String,
	created_at: {type: Date, default: new Date}
})

var Checkout = mongoose.model('Checkout', CheckoutClientSchema);