(function(){
'use strict';

angular.module('CounterApp',[])
.controller('CounterController',CounterController);

//Protect function input from minification
CounterController.$inject = ['$scope','$timeout'];

function CounterController($scope,$timeout){
  $scope.counter = 0;

    $scope.upCounter = function(){
      //using built in Angular context timeout
      $timeout(function(){
        $scope.counter++;
        console.log("Counter incremented");
      },2000);
    };

    // $scope.upCounter = function(){
    //   setTimeout(function(){
    //     //treat function wrapped by apply function and get treated as Angular JS code
    //     $scope.$apply(function(){
    //     $scope.counter++;
    //     console.log("Counter incremented");
    //   });
    //   },2000);
    // };

  // $scope.upCounter = function(){
  //   setTimeout(function(){
  //     $scope.counter++;
  //     console.log("Counter incremented");
  //     // Applying digest watcher into this function so it treated as part of angular app
  //     // drawback is exception thrown is not visible to Angular JS
  //     $scope.$digest();
  //   },2000);
  // };

}



})();
