//Primite in Stack;
//non-primitive in Heap;

let myName='Ali Murtaza';
let anotherName=myName;
anotherName='hello world';
console.log(myName,anotherName);

let arr1=[1,2,3,4,5,6,7,8,9];
let arr2=arr1;
arr2[0]=22;
console.log(arr1,arr2);


let obj1={
    name:"User1",
    password:"password"
}
let obj2=obj1;
obj2.name="user2";
console.log(obj2,obj1);
