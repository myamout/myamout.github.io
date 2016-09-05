(() => {

	const app = angular.module('LlamaGlama', []);

	app.controller('LlamaGame', ['$scope', function($scope) {
		$scope.llamaName = '';
		$scope.personality = '';
		$scope.personalities = ['Athlete', 'Artist', 'Adventurer', 'Teenager', 'Comedian', 'Engineer'];
		
		//boolean values used for ng-show
		$scope.athlete = false;
		$scope.artist = false;
		$scope.adventurer = false;
		$scope.teenager = false;
		$scope.comedian = false;
		$scope.engineer = false;

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
		$scope.clear = () => {
			$scope.llamaName = '';
			$scope.personality = '';
			$scope.resetBooleans();
		};
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