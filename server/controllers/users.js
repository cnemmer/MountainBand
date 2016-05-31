var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {

	//more like a login validation
	create: function(req, res){
		
		if(req.body.name == 'Admin' && 	req.body.password == 'password'){
					res.json({name: "Admin"})
				}
				else{
					res.json({name: 'null'})
				}

		// User.findOne({name: req.body.name}, function(err, result){
		// 	if(err){
		// 		console.log(err)
		// 	}
			// else{
			// 	console.log(result);
			// 	if(result == null){
			// 		var newUser = new User(req.body);

			// 		newUser.save(function(err, user){
			// 			if(err){
			// 				console.log(err)
			// 			}
			// 			else{
			// 				// console.log(user);

			// 				res.json(user);
			// 			}
			// 		})
			// 	}
				
			// 	else{
			// 		res.json(result);
			// 	}
			// }
		// 	else{
		// 		console.log(req.body.password)
		// 		if(req.body.name == 'Admin' && 	req.body.password == 'password'){
		// 			res.json(result)
		// 		}
		// 		else{
		// 			res.json({name: 'null'})
		// 		}
		// 	}
		// })
		
	},

	index: function(req, res){
		User.find({}).exec(function(err, results){
			if(err){
				console.log(err)
			}
			else{
				res.json(results)
			}
		})
	}
}