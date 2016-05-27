var mongoose = require('mongoose');

var CheckoutClientSchema = new mongoose.Schema({
	'customerInfo[firstName]': String,
	'customerInfo[lastName]': String,
	'customerInfo[phone]': Number,
	'customerInfo[streetAdd]': String,
	'customerInfo[unitNum]': Number,
	'customerInfo[city]': String,
	'customerInfo[zipcode]': Number,
	'customerInfo[state]': String,
	email: String,
	customer: String,
	created_at: {type: Date, default: new Date}
})

var Checkout = mongoose.model('Checkout', CheckoutClientSchema);