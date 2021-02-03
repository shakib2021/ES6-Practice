
class Parent{
    constructor(){
        this.FatherName="Ahad mia"
    }
}


class YourName extends Parent{
    constructor(name,roll){
        super();
  this.name=name;
  this.yourRoll=roll;

  ///create function inside constructor
  


}
Hello(){
    return this.FatherName+" "+ this.yourRoll;
}

};

let yourName=new YourName("shakib",12);

console.log(yourName);
console.log(yourName.FatherName);
console.log(yourName.Hello());
