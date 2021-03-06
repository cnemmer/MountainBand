//Client Side "Angular" Routes
		myApp.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'partials/mainview.html'
			})
			.when('/about', {
				templateUrl: 'partials/about.html'
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

			.when('/storelocate', {
				templateUrl: 'partials/mapapi/storelocate.html'
			})
			.when('/storelocate2', {
				templateUrl: 'partials/mapapi/storelocate2.html'
			})
			.when('/storelocate3', {
				templateUrl: 'partials/mapapi/storelocate3.html'
			})
			.otherwise({
				redirectTo: '/'
			})
		}) //Closes Angular Routes
