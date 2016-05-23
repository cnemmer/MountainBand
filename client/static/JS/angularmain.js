var myApp = angular.module('myApp', ['ngRoute']);

		myApp.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'partials/mainview.html'
			})
			.otherwise({
				redirectTo: '/'
			})
		})