(function(){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);

//Protect function input from minification
MsgController.$inject = ['$scope'];

function MsgController($scope){
  $scope.name = "Kevin";
  $scope.viewState="river";
  $scope.changeView=function(){
    $scope.viewState="lake";
  };

}



})();
