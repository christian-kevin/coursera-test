(function(){
'use strict';

var shoppingList1 = [
  "Milk","Donuts","Cookies","Pepto Bismol"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity:"2"
  },
  {
    name:"Donuts",
    quantity:"200"
  },
  {
    name:"Pepto Bismol",
    quantity:"5"
  }
];

angular.module('ShoppingApp',[])
.controller('ShoppingListController',ShoppingListController);

//Protect function input from minification
ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope){
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function(){
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };
    $scope.shoppingList2.push(newItem);
  };
}




})();
