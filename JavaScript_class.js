module.exports= class Person{
    name='sudhanshu'
    get age(){//when we use getter function it will be treated as properties
     return 25
    }
//Constructor is a method which gets executed when we create object of a class
constructor(firstName, lastName){
   this.firstName=firstName
   this.lastName=lastName
} 
fullName(){
    console.log(this.firstName +" "+ this.lastName)
}   
    
}

// let person=new Person('Gaurav','Kumar')
// console.log(person.name)
// console.log(person.age)//so we can call it directly 
// console.log(person.fullName())