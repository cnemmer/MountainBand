
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
			.when('/checkout/:id', {
				templateUrl: 'partials/checkout.html'
			})
			.when('/payment', {
				templateUrl: 'partials/payment.html'
			})
			.when('/products', {
				templateUrl: 'partials/products.html'
			})
			.when('/storelocate', {
				templateUrl: 'partials/storelocate.html'
			})
			.when('/adminpage', {
				templateUrl: 'partials/admin/adminpage.html'
			})
			.when('/adminproducts', {
				templateUrl: 'partials/admin/adminproducts.html'
			})
			.when('/adminproducts/:id', {
				templateUrl: 'partials/admin/adminedit.html'
			})
			.when('/receipt', {
				templateUrl: 'partials/receipt.html'
			})
			.otherwise({
				redirectTo: '/'
			})
		})
