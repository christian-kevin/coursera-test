(function(){
  "use strict";
var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number Array: ",numberArray);

var filteredNumberArray = numberArray.filter(function(value){
  return value > 5;
});

var shoppingList = [
  "Milk","Donuts","Cookies","Pepto Bismol"
];

var searchValue = "Cookies";
function containsFilter(value){
  // check if value is part of string of searchValue
  return value.indexOf(searchValue) !== -1;
};
var searchShoppingList = shoppingList.filter(containsFilter);
console.log("Searched Shopping List : ",searchShoppingList);


})();
