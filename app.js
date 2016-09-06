(() => {

	"use strict";
	//Create the angular app here
	const app = angular.module('LlamaGlama', []);

	/*
		Site has only one need of JavaScript, therefore one controller will be enough.
	*/
	app.controller('LlamaGame', ['$scope', function($scope) {
		$scope.llamaName = '';
		$scope.personality = '';
		$scope.personalities = ['Athlete', 'Artist', 'Adventurer', 'Teenager', 'Comedian', 'Engineer'];
		
		/*
			These are the boolean values used by ng-show on the html side to
			determine which bio and picture to display to the user based on
			personality selection.
		*/
		$scope.athlete = false;
		$scope.artist = false;
		$scope.adventurer = false;
		$scope.teenager = false;
		$scope.comedian = false;
		$scope.engineer = false;

		/*
			captureName will set the name of the llama to the default name if the 
			user is unable to think of one and then uses switch case statements
			to trigger the correct boolean true to display the right bio and 
			picture to the user. An alert is created if the user forgets to
			pick a personality.
		*/
		$scope.captureName = () => {
			$scope.resetBooleans();
			if ($scope.llamaName === '') {
				$scope.llamaName = 'Zappos Llama';
			}
			switch($scope.personality) {
				case 'Athlete': 
					$scope.athlete = true;
					break;
				case 'Artist':
					$scope.artist = true;
					break;
				case 'Adventurer':
					$scope.adventurer = true;
					break;
				case 'Teenager':
					$scope.teenager = true;
					break;
				case 'Comedian':
					$scope.comedian = true;
					break;
				case 'Engineer':
					$scope.engineer = true;
					break;
				default:
					alert("Don't forget to select a personality!");
			}	
		};
		/*
			Clear simple clears the name, personality, and boolean fields.
		*/
		$scope.clear = () => {
			$scope.llamaName = '';
			$scope.personality = '';
			$scope.resetBooleans();
		};
		/*
			resetBooleans resets all of the booleans to false. Used in the clear method and
			at the start of the captureName method.
		*/
		$scope.resetBooleans = () => {
			$scope.athlete = false;
			$scope.artist = false;
			$scope.adventurer = false;
			$scope.teenager = false;
			$scope.comedian = false;
			$scope.engineer = false;
		};
	}]);

})();