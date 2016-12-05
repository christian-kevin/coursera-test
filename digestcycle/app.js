(function(){
'use strict';

angular.module('CounterApp',[])
.controller('CounterController',CounterController);

//Protect function input from minification
CounterController.$inject = ['$scope'];

function CounterController($scope){
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.showNumberOfWatchers = function(){
    console.log("# of Watchers", $scope.$$watchersCount);
  };

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };
  $scope.upCounter = function(){
    $scope.counter++;
  };
  $scope.$watch(function(){
    console.log("Digest Loop Fired!");
  })
}



})();
