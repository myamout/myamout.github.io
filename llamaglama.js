(() => {
	const app = angular.module('LlamaGlama', []);

	app.controller('LlamaGame', ['$scope', function($scope) {
		$scope.test = () => {
			alert("Test work!!!");
		};
	}]);

})();