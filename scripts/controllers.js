var todoApp = angular.module('todoApp', []);

todoApp.controller('ItemCtrl', function ItemCtrl($scope) {
	var id_counter = 1;

	$scope.items = [
	{item: 'Item one'},
	{item: 'Item two'},
	{item: 'Item three'}
	];

	$scope.addItem = function () {
		debugger;
	    id_counter += 1;
	    $scope.items.unshift({item:$scope.newItem, sort_id:id_counter});
	    $scope.newItem = null;
  	};

  	$scope.removeItem = function ( idx ) {
	    $scope.items.splice( idx, 1 );
  	};

  	$scope.change = function() {

  	}

});

