const score=400;
const balance=new Number(400);
const str=new String("Hello, world");
console.log(balance)
console.log(balance.toFixed(2));
console.log(typeof balance)
console.log(typeof str)


let str2=str;
str2="bye";
console.log(str,str2);

const otherNumber=123.124124;
console.log(otherNumber.toPrecision(6));


const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
//*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
//*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+
//*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+

console.log(Math);
console.log(Math.abs(-12312));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.pow(2,3));
let arr2=[1,23,4,5,6,712];
console.log(Math.min(...arr2));
console.log(Math.max(...arr2));
console.log(Math.random())
console.log(Math.round((Math.random()*10)+1));
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min))