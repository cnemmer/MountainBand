myApp.controller('RecieptController', function($location){
	$scope.load = function() {
		$location.path('/reciept');
	}
})