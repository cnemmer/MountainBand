var mongoose = require('mongoose');
var Product = mongoose.model("AdminProduct");

module.exports = {

	show: function(req, res){
	  	Product.findOne({_id: req.params.id}).exec(function(err, results){
	  		if(err){
	  			console.log(err)
	  		}
	  		else{
	  			res.json(results);
	  		}
	  	})
	  }

}