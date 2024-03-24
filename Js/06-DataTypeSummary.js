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
var merge = function(nums1, m, nums2, n) {
    nums1.length=m;
    nums1.push(...nums2);
    nums1.sort(function(a,b){
        return a-b;
    })
};

nums1 = [1,2,3,0,0,0]; m = 3; nums2 = [2,5,6]; n = 3;
merge(nums1,m,nums2,n);
console.log(nums1)


var removeElement = function(nums, val) {
    let  k=0;
for(let i=0;i<nums.length;i++){
if(nums[i]!==val){
nums[k]==nums[i]
k+=1;
}else{
    nums[i]='_'
}
}
return k
};
let removearr=[3,2,2,3]
let value=removeElement(removearr,3)
console.log(value)
console.log(removearr)