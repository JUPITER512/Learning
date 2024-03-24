const accountId=1122;
let accountEmail='syedalimurtaza36@gmail.com';
var accountPassword='abcdefghijklmnopqrstuvwxyz';
accountCity='lahore'
let accountState;
accountEmail='abc@gmail.com';
accountPassword='12nas';
accountCity='Islamabad';
console.log(accountId)
console.log(accountState)
console.table([accountId,accountEmail, accountPassword, accountCity])

let age=13;
var name='ali';
{
    console.log(age);
    console.log(name);
}

// console.log(score);
function game(){
    var score=300;
    console.log(bonus)
    if(true){
        let bonus=30;
        score+=bonus;
        console.log("Score insdie ig block scope",score);
    }
    console.log("Score Outside  if scope",score);
}
game()