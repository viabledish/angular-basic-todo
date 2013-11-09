var todoApp = angular.module('todoApp', ['ui.sortable']);

todoApp.controller('ItemCtrl', function ItemCtrl($scope) {
	var id_counter = 1;
  
	$scope.items = [
		{item: 'Item one', complete: false},
		{item: 'Item two', complete: false},
		{item: 'Item three', complete: false}
	];

	$scope.addItem = function () {
	    id_counter += 1;
	    $scope.items.unshift({item:$scope.newItem, sort_id:id_counter});
	    $scope.newItem = "";
  	};

  	$scope.removeItem = function ( idx ) {
	    $scope.items.splice( idx, 1 );
  	};

  	$scope.disableEditor = function( item ) {
  		item.editorEnabled = false;
  	}

  	$scope.enableEditor = function ( item ) {
  		console.log(item);
        item.editorEnabled = true;
    };

    $scope.toggleCompleteItem = function ( item ) {
    	item.complete = !item.complete;
    };

});

//angular.bootstrap(document, ['todoApp']);
