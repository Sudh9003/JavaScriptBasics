//Inheritance
//One class can inherit the properties, Methods of another class
//The class which inherits the properties of another class called as sub-class
//The class whose properties are inherited are called as super class 
//Super class need to be exported then only we can extend it to child/subclas//module.exports 
const Person=require('../JavaScriptBasics/JavaScript_class')
class Pet extends Person{
    // get age(){          //example of override
    //     return 27
    // }

constructor(firstName,lastName){  //Need to define same constructoer as parrent class 
  super(firstName,lastName)       //and use super keyword
}
}
let petname=new Pet('Tom','Harry')
console.log(petname.fullName())
console.log(petname.name)
console.log(petname.age)