let str="Ali Murtaza";
console.log(str);
const repoCount=50;
console.log(str+" "+repoCount);
console.log(`Hello ${str.toUpperCase()} your repo on github is #${repoCount}`)

const gameName=new String("Ghoost-Recon       ");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('1'));
console.log(gameName.indexOf('t'));
console.log(gameName.split('-'));
console.log(gameName.slice(2,5));
console.log(gameName.substring(2,6));
console.log(gameName.slice(-8,-5));
console.log(gameName.trim());
console.log(gameName.repeat(4));
console.log(gameName.replace(" ",""));
console.log(gameName.includes('t'));