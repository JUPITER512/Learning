// const array=[1,23,124,124,'hello world'];
// const array2=array;

// array2.pop()
// console.log(array)
// console.log(array2);
// console.log(array.join('-'));
// array2.push("Hello World")
// console.log(array)
// console.log(array2);


// const array3=["string", 1,2,3,4,5,6,7,8,9];
// console.log(array.concat(array3));
// console.log(array);

// const arraynew=new Array("1",2,"3");
// console.log(arraynew);


//Array Methods;
const newarr=[1,2,3,4,5,6,7,8,9];
console.table(newarr);
newarr.push("1");
console.table(newarr);
const popValue=newarr.pop();
console.log(typeof popValue);
console.log(newarr)
newarr.unshift("unshiftValue");
console.log(newarr)
newarr.shift();
console.log(newarr)
console.log(newarr.indexOf(12))

const newArr2=newarr.join()
console.log(typeof newArr2)
console.log(typeof newarr)


//slice vs splice
//slice give subset of arrays
//splice change the actual array

console.log("\n\n************************************\n\n");
const array5=[1,2,3,4,5,6];
console.log("Array 5",array5);
const myn1=array5.slice(1,3);
console.log(myn1);
console.log(array5)
const myn2=array5.splice(1,3);
console.log(myn2);
console.log(array5);