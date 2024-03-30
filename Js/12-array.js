// const array2=[1,2,3,4,5];
// const array3=[6,7,8,9,10];
// array2.copyWithin(2,0,array2.length-1);
// console.log(array2);
// array3.copyWithin(2)
// console.log(array3);

// const array4=[1,2,3,[1,2,[2,3,4,[5,6]]]];
// console.log(array4.flat(Infinity));
// const array5 = [1, 2, 3, [1, 2, [2, 3, 4, [5, 6]]]];

// const flatMappedArray = array4.flatMap((item) => item);
// const flapmaparr=array5.flatMap((item) => Array.isArray(item) ? item:[item]).map(item=>item)
// console.log(flapmaparr);
// const nestedArray = [1, 2, [3, 4], 5, 6];
// console.log(nestedArray);
// const flattenedArray = nestedArray.flat();
// console.log(flattenedArray);
const num = [1, 2, 3, 4, 5];
const num2 = [1, 2, 3, 4, 5];
const num3=[...num,...num2];
console.log(num3);
const mappedFlattened = num.flatMap((num) => [num * 4, num * 3]);
console.log(mappedFlattened);

let str="HelloWorld";
console.log(typeof str);
str=Array.from(str);
console.log(typeof str)
console.log(Array.of(1,2,3,4));
console.log(Array.from([1, 2, 3, 4])); // Correct usage
