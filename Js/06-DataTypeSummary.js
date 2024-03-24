// Prmitive  String,Bool,Number,Symbol,Null,Undefined,BigInt

//Js Is Dynamically Typed not Statically Type Language (We Don't Tell About DataType in Js);
const score=33;
const scoreValue=100.3;
const isLoggedIn=true;
const temperature=null;
let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123");
console.log(id==anotherId);
console.log(typeof id);

const bigNumber=345612241241551231n;
console.log(typeof bigNumber);


//Refernce Types or Non Primitive Types ===> Objects,Arrays,Functions return object type

const heros=["Superman","Batman","Hulk","SpiderMan"];
console.table(typeof heros);
let myObject={
    name:"Ali",
    age:23
}
console.log(typeof myObject)
function myFunction(){
    console.log("Hello from function");
}
myFunction();