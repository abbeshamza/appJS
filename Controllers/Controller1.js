
//ajouter les controller et les ajouter au module avec l injection du scope
// pour acceder aux param de la req on passera à la fonction ($scope,$routeParams)
// var x=$routeParams.nom_param
(function(){
	var HamzaController = function($scope,$log,firstFactory) // on inject le factory ou le service au controller , log permet d afficher les erreurs lié à l appel ajax
	{
		$scope.name="hamza";
		$scope.fac=null;



		function init()
		{
			//$scope.fac=firstFactory.getFactory();


			//appel ajax 
			firstFactory.getFactory()
			.success(function(res)
			{
				$scope.fac= res.name ;

			})
			.error(function(data , status , headers, config ){
				$log.log(data.error+'  '+status);

			});

			/////// fin ajax

		}
		init();

	};
	HamzaController.$inject=['$scope','$log','firstFactory'];
	angular.module('testApp').controller('testCTRL',HamzaController);
}
());