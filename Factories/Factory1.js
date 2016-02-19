(function(){
var firstFactory = function($http){

	var fac = "premier test factory";


	var factory = {};
	factory.getFactory = function ()
	{
		return $http.get('http://localhost/~hab/test/web/app_dev.php/testform');
		//return fac;
	}

	return factory ;

}
firstFactory.$inject=['$http'];

angular.module('testApp').factory('firstFactory',firstFactory);


}());