myApp.controller('UsersController', function(UserFactory ,$cookies, $location){
	var self = this;
	this.users;
	this.loggedin = $cookies.get('name');

	this.index = function(){
		// UserFactory.index(function(data){
		// 	self.users = data;
		// 	// console.log(self.users);
		// 	self.newUser ={};
			
		// 	self.self();

		// })
	}

	this.create = function(input){
		
		UserFactory.create(input, function(user){
			
			$cookies.put('name', user.name);
			self.loggedin = $cookies.get('name');
			console.log(self.loggedin)

			self.newUser = {};
			$location.path('/adminpage');
		})
	}

	this.logout = function(){

		self.loggedin = {};
	}

	// this.self = function(){

	// 	self.loggedin = UserFactory.user;
	// }

	

	this.index();
})