class Parent{
    constructor(){
        this.fatherName="ahad mia"
    }
}

class Child extends Parent{
   
    constructor(name){
        super();
        this.name=name;}
//this is a function [getFullName]

        getFullName(){

        return this.name +" "+this.fatherName;

        }
}


let ChildName=new Child("shakib");
console.log(ChildName);
console.log(ChildName.name);

console.log(ChildName.getFullName());