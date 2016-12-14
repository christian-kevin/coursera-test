(function(){
'use strict';

angular.module('ShoppingListPromiseApp',[])
.controller('ShoppingListController',ShoppingListController)
// 1 declaration used to inject into another service, 2 declaration
//used to produce a service (name of the function)
.service('ShoppingListService',ShoppingListService)
.service('WeightLossFilterService',WeightLossFilterService);


//Protect function input from minification
ShoppingListController.$inject = ['ShoppingListService'];

function ShoppingListController(ShoppingListService){
  var list = this;

  list.items = ShoppingListService.getItems();

  list.itemName="";
  list.itemQuantity="";

  list.addItem = function(){
    ShoppingListService.addItem(list.itemName,list.itemQuantity);
  };
  list.removeItem = function(itemIndex){
    ShoppingListService.removeItem(itemIndex);
  };
};

ShoppingListService.$inject = ['$q','WeightLossFilterService'];
function ShoppingListService($q,WeightLossFilterService){
  var service = this;

  //List of shopping items
  var items = [];
  // service.addItem = function(itemName,itemQuantity){
  //   var promise = WeightLossFilterService.checkName(itemName);
  //   // if checkName is passed
  //   promise
  //   .then(function(response){
  //     return WeightLossFilterService.checkQuantity(itemQuantity);
  //   })
  //   .then(function(response){
  //       var item = {
  //         name:itemName,
  //         quantity:itemQuantity
  //       };
  //       items.push(item);
  //     })
  //   .catch(function(errorResponse){
  //     console.log(errorResponse.message);
  //   })
  // };

  service.addItem = function(itemName,itemQuantity){
    var namePromise = WeightLossFilterService.checkName(itemName);
    var quantityPromise = WeightLossFilterService.checkQuantity(itemQuantity);

    $q.all([namePromise, quantityPromise])
    .then(function(response){
      var item = {
         name:itemName,
         quantity:itemQuantity
        };
      items.push(item);
    })
    .catch(function(errorResponse){
        console.log(errorResponse.message);
      });
  }

  service.removeItem = function(itemIndex){
    items.splice(itemIndex,1);
  }
  service.getItems = function(){
    return items;
  };
};

WeightLossFilterService.$inject = ['$q','$timeout'];

function WeightLossFilterService($q,$timeout){
  var service = this;
  service.checkName = function(name){
    var deferred = $q.defer();

    var result = {
      message:""
    };

    $timeout(function(){
      //Check for not allowed name
      if(name.toLowerCase().indexOf('cookie') === -1){
        deferred.resolve(result);
      } else {
        result.message = "Stay away from cookies!";
        deferred.reject(result);
      }
    },3000);

    return deferred.promise;
  };

  service.checkQuantity = function(quantity){
    var deferred = $q.defer();

    var result = {
      message:""
    };

    $timeout(function(){
      //Check for not allowed quantity
      if(quantity < 6){
        deferred.resolve(result);
      } else {
        result.message = "That's too much!";
        deferred.reject(result);
      }
    },1000);

    return deferred.promise;
  };
}

})();
