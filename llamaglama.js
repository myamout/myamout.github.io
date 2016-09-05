(() => {

	const app = angular.module('LlamaGlama', []);

	app.controller('LlamaGame', ['$scope', function($scope) {
		$scope.llamaName = '';
		$scope.personality = '';
		$scope.personalities = ['Athlete', 'Artist', 'Adventurer', 'Teenager', 'Comedian', 'Engineer'];

		$scope.captureName = () => {
			console.log($scope.llamaName);
			console.log($scope.personality);
		};
		$scope.clear = () => {
			$scope.llamaName = '';
			$scope.personality = '';
		};
	}]);

})();