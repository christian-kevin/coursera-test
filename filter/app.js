(function(){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController)
// custom filter called loves
.filter('loves',LovesFilterFactory)
.filter('truth', TruthFilterFactory);

//Protect function input from minification
// custom filter name (loves) + added name by angular (Filter)
MsgController.$inject = ['$scope','lovesFilter'];

function MsgController($scope,lovesFilter){
  $scope.name = "Kevin";
  $scope.sayMessage = function(){
    var msg = "Hi, I'm Kevin";
    msg = lovesFilter(msg);
    return msg;
  };}

  function LovesFilterFactory(){
    return function(input){
      // checks if input exist
      input = input || "";
      //replace word hi with hello
      input = input.replace("Hi","Hello");
      return input;
    };
  }
  function TruthFilterFactory(){
    return function(input, target, replace){
      input = input || "";
      input = input.replace(target,replace);
      return input;
    }
  }



})();
