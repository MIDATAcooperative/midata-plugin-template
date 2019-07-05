// The frontend controller
angular.module('demo').controller('MyController', ['$scope', '$translate', '$location', 'midataServer', 'midataPortal', 'importer',  
	function($scope, $translate, $location, midataServer, midataPortal, importer) {
				
		// Just for demonstration of localization		
		$scope.worldVar = "hello_world";
			
		//
		// Some example functions
		//
				
		// start import button. Uses the data import factory from "app.js" to write a record.
		$scope.startImport = function() {
			importer.importNow(midataServer.authToken)
			.then(function() { $scope.status = "ok"; })
			.catch(function() { $scope.status = "error"; });
		};
		
		// "search" button
		$scope.exampleSearch = function() {
			
		   // do a search for "Observation" resources  
		   midataServer.fhirSearch(midataServer.authToken, "Observation", { code : "3141-9" })
		   .then(function(result) { $scope.result = result.data; });
		};
				
		
		// "update" button
		$scope.exampleUpdate = function() {
			
			// Search for observation records having code 3141-9 and status "preliminary"
			midataServer.fhirSearch(midataServer.authToken, "Observation", { code : "3141-9", status : "preliminary" })
			.then(function(result) {
				
				// And change the first result resource into having status = "entered-in-error"
				if (result.data && result.data.entry && result.data.entry[0].resource) {
					var resourceToChange = result.data.entry[0].resource;
					resourceToChange.status = "entered-in-error";
					midataServer.fhirUpdate(midataServer.authToken, resourceToChange)
					.then(function(result2) { $scope.result = result2.data; });
					
				}
			});
		};
									
	}
]);
