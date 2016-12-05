(function(){
'use strict';

angular.module('DIApp',[])
.controller('DIController',DIController);

//Protect function input from minification
DIController.$inject = ['$scope','$filter'];

function DIController($scope,$filter,$injector){
  $scope.name = "";

  $scope.upper = function(){
    var upCase = $filter('uppercase');

    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}



})();
