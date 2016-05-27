var mongoose = require('mongoose');
var stripe = require('stripe')("sk_test_qWDc44XnrRhP7L2NBjnsWiDx");
var Checkout = mongoose.model('Checkout');

module.exports = {

	index: function(request,response){
		Checkout.find({}).exec(function(err,results){
			if(err){
				console.log(err)
			} else {
				response.json(results);
			}
		})
	},

	create: function(request,response){
		var checkoutClient = new Checkout(request.body);
		checkoutClient.save(function(err,clientInfo){
			if(err){
				console.log(err);
			} else {
				response.json(clientInfo);
			}
		})
	},

	charge: function(request, response) {
		// (Assuming you're using express - expressjs.com)
		// Get the credit card details submitted by the form
		//var stripeToken = req.body.stripeToken;

		// Set your secret key: remember to change this to your live secret key in production
		// See your keys here https://dashboard.stripe.com/account/apikeys
		var stripe = require("stripe")("sk_test_qWDc44XnrRhP7L2NBjnsWiDx");
		//console.log(stripeToken);
		//console.log(request.body);

		// (Assuming you're using express - expressjs.com)
		// Get the credit card details submitted by the form
		var stripeToken = request.body.stripeToken;
		var clientInfo = request.body

		stripe.customers.create({
		  source: stripeToken,
		  description: 'payinguser@example.com'
		}).then(function(customer) {
		  return stripe.charges.create({
		    amount: 1000, // amount in cents, again
		    currency: "usd",
		    customer: customer.id
		  });
		}).then(function(charge, clientInfo) {
		  // YOUR CODE: Save the customer ID and other info in a database for later!
		  console.log(charge);
		  console.log(request.body);
		  var checkoutClient = new Checkout(request.body);
		  delete checkoutClient.stripeToken;
		  checkoutClient.customer = charge.customer;
		  console.log('testing this line =============>', checkoutClient);
			checkoutClient.save(function(err,clientInfo){
				if(err){
					console.log(err)
				} else {
					response.json(clientInfo);
				}
			})
		});

		// YOUR CODE: When it's time to charge the customer again, retrieve the customer ID!

		/*stripe.charges.create({
		  amount: 1500, // amount in cents, again
		  currency: "usd",
		  customer: customerId // Previously stored, then retrieved
		});*/













		/*var charge = stripe.charges.create({
		  amount: 100, // amount in cents, again
		  currency: "usd",
		  source: stripeToken,
		  description: "Example charge"
		}, function(err, charge) {
		  if (err && err.type === 'StripeCardError') {
		    // The card has been declined
		    response.json(err);
		  } else {
			  response.json(charge);
		  }
		});



		





		var checkoutClient = new Checkout(request.body);
		checkoutClient.save(function(err,clientInfo){
			if(err){
				console.log(err)
			} else {
				response.json(clientInfo);
			}
		})*/


	}
}