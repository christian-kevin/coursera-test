var parent = {
  value:"parentValue",
  obj:{
    objValue:"parentObjValue"
  },
  walk: function(){
    console.log("walking!");
  }
};

// inherit parent
var child = Object.create(parent);
console.log("CHILD - child.value", child.value);
console.log("CHILD - child.obj.objValue",child.obj.objValue);
console.log("PARENT - parent.value",parent.value);
console.log("PARENT - parent.obj.objValue",parent.obj.objValue);
console.log("parent: ",parent);
console.log("child: ",child);
console.log("child.obj === parent/obj ?",child.obj === parent.obj);

child.value = "childValue"; //masking parent value
child.obj.objValue = "childObjValue"; // changing value parent because angular need access obj value in parent

function Dog(name){
  this.name = name;
  console.log("this is: ",this);
}

var myDog = new Dog("Max");
console.log("myDog: ",myDog);

Dog("Max2"); // wrong instantiation
