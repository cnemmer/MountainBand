var mongoose = require('mongoose');
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
	}
}