(function(){
'use strict';

angular.module('CustomServiceApp',[])
.controller('ShoppingListAddController1',ShoppingListAddController1)
.controller('ShoppingListAddController2',ShoppingListAddController2)
// 1 declaration used to inject into another service, 2 declaration
//used to produce a service (name of the function)
.factory('ShoppingListFactory',ShoppingListFactory);


//Protect function input from minification
ShoppingListAddController1.$inject = ['ShoppingListFactory'];

function ShoppingListAddController1(ShoppingListFactory){
  var list1 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list1.items = shoppingList.getItems();

  list1.itemName="";
  list1.itemQuantity="";

  list1.addItem = function(){
    shoppingList.addItem(list1.itemName,list1.itemQuantity);
  };

  list1.removeItem = function(itemIndex){
    shoppingList.removeItem(itemIndex);
  };
};


//Protect function input from minification
ShoppingListAddController2.$inject = ['ShoppingListFactory'];

function ShoppingListAddController2(ShoppingListFactory){
  var list2 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory(3);

  list2.items = shoppingList.getItems();

  list2.itemName="";
  list2.itemQuantity="";

  list2.addItem = function(){
    try{
      shoppingList.addItem(list2.itemName,list2.itemQuantity);
    } catch(error){
      list2.errorMessage = error.message;
    }
  };

  list2.removeItem = function(itemIndex){
    shoppingList.removeItem(itemIndex);
  };
};

function ShoppingListService(maxItems){
  var service = this;

  //List of shopping items
  var items = [];
  service.addItem = function(itemName,itemQuantity){
    if((maxItems === undefined) || (maxItems !== undefined) && (items.length<maxItems)){
    var item = {
      name:itemName,
      quantity:itemQuantity
    };
    items.push(item);
  }
  else {
    throw new Error("Max items (" + maxItems + ") reached.");
  }};

  service.removeItem = function(itemIndex){
    items.splice(itemIndex,1);
  }
  service.getItems = function(){
    return items;
  };
};

function ShoppingListFactory(){
  var factory = function(maxItems){
    return new ShoppingListService(maxItems);
  };
  return factory;
}


})();
