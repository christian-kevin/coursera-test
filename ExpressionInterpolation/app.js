(function(){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);

//Protect function input from minification
MsgController.$inject = ['$scope'];
function MsgController($scope){
  $scope.name = "Kevin";
    $scope.changeView=function(){
    if($scope.viewState=="river" )
      $scope.viewState="lake";
      else if ($scope.viewState=="lake" || $scope.viewState==null) {
        $scope.viewState="river";
      }
  };


}



})();
