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

	charge: function(req, res) {
		// (Assuming you're using express - expressjs.com)
		// Get the credit card details submitted by the form
		var stripeToken = req.body.stripeToken;
		console.log(stripeToken);
		console.log(req.body);
		var charge = stripe.charges.create({
		  amount: 100, // amount in cents, again
		  currency: "usd",
		  source: stripeToken,
		  description: "Example charge"
		}, function(err, charge) {
		  if (err && err.type === 'StripeCardError') {
		    // The card has been declined
		    res.json(err);
		  } else {
			  res.json(charge);
		  }
		});
	}
}