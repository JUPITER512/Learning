//singleTon


//object literals
const mySym=Symbol("Key1");
const object={
    name:"Hello",
    age:"22",
    "fullname":"Ali Murtaza",
    [mySym]:"Hello",
}
console.table(object);
console.log(object.age);
console.log(object["age"]);
console.log(object.fullname);
console.log(object["fullname"]);
console.log(typeof object[mySym])
// console.log(object);
// Object.freeze(object)
// object.name="No Hello"
// console.table(object);
object.greeting=function(){
    console.log("Hello~!");
}
object.greeting2=function(){
    console.log(`Hello ${this.fullname}`)
}
console.log(object.greeting())
console.log(object.greeting2())

// let date=new Date();
// console.log(date.getMinutes())
// let hello=0;
// for (let i = 0; i < 1e10; i++) {
//     hello=i;
// }

// console.log("Counted to 1 billion (simulated)",hello);
// // console.log();
// console.log(date.getMinutes())