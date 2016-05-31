myApp.controller('UsersController', function(UserFactory ,$location){
	var self = this;
	this.users;
	this.loggedin;

	this.index = function(){
		// UserFactory.index(function(data){
		// 	self.users = data;
		// 	// console.log(self.users);
		// 	self.newUser ={};
			
		// 	self.self();

		// })
	}

	this.create = function(input){
		// console.log(input)
		// UserFactory.create(input, function(data){
		// 	self.loggedin = data
		// 	self.newUser = {};
		// })
	}

	this.logout = function(){

		self.loggedin = {};
	}

	this.self = function(){

		self.loggedin = UserFactory.user;
	}

	

	this.index();
})