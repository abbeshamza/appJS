var testApp=angular.module('testApp',['ngRoute']);


//ajouter les routes
testApp.config(function($routeProvider)
{
	$routeProvider
	.when('/',{
		controller : 'testCTRL',
		templateUrl: 'Views/hamza.html'
	})
	.otherwise({redirectTo :'/'})

});




