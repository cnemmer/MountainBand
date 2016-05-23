var myApp = angular.module('myApp', ['ngRoute']);

		myApp.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'partials/mainview.html'
			})
			.when('/login', {
				templateUrl: 'partials/login.html'
			})
			.when('/checkout', {
				templateUrl: 'partials/checkout.html'
			})
			.when('/payment', {
				templateUrl: 'partials/payment.html'
			})
			.when('/addProduct', {
				templateUrl: 'partials/addProduct.html'
			})
			.when('/products', {
				templateUrl: 'partials/products.html'
			})
			.otherwise({
				redirectTo: '/'
			})
		})
