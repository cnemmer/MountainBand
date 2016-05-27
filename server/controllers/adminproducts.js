var mongoose = require("mongoose");
var AdminProduct = mongoose.model("AdminProduct");

module.exports = {

	  index: function(req, res){
	    AdminProduct.find({}, function(err, results){
	      if(err){
	        console.log(err);
	      }else{
	        res.json(results);
	      }
	    })
	  },

	  create: function(req, res){
	    var newProduct = new AdminProduct(req.body);

	    newProduct.save(function(err){
	      if(err){
	        console.log(err);
	      }else{
	        res.json(true);
	      }
	    })
	  }


}
