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
	  },

	  show: function(req, res){
	  	AdminProduct.find({_id: req.params.id}).exec(function(err, results){
	  		if(err){
	  			console.log(err)
	  		}
	  		else{
	  			res.json(results)
	  		}
	  	})
	  },

	  update: function(req, res){
	  	console.log(req.body);
	  	AdminProduct.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name, price: req.body.price}}, {new: true}, function(err){
	 		if(err){
	 			console.log(err)
	 		}
	 		else{
	 			console.log("done");
	 			res.json(true);

	 		}
	 	})
	  }


}
