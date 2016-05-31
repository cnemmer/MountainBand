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
	  	AdminProduct.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name, price: req.body.price, img: req.body.img, img1: req.body.img1, img2: req.body.img2, img3: req.body.img3, description: req.body.description, moment: req.body.moment}}, {new: true}, function(err){
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
