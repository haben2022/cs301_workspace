let prompt = require('prompt-sync')();
let  quarts= +prompt("please enter volume in quarts:");
let litres= (quarts*0.946352946);
console.log( litres);

let diskil= +prompt("enter distance in KM");
let result= diskil*1.6;
console.log(result);



let num=+prompt("please enter the total number of boxes:");
let boxesInStack=+prompt("please enter number of boxes in each stack:");
let numStack=(num/boxesInStack);
console.log(Math.ceil(numStack));


let begnningOdm=+prompt("please enter the begning odometer");
let endingOdm=+prompt("please enter the end number of odometer");
let numGas=+prompt("enter number of galon");
let computmil=endingOdm-begnningOdm;
let compMilGal=computmil/numGas;
console.log(compMilGal);



let age=+prompt("enter age:");
let maxheartRate=(220-age);
let fastest=maxheartRate*(85/100);
let slowest=maxheartRate*(65/100);
console.log("rate for the fastest is:"  + fastest );
console.log("rate for the slowest is:"  +  slowest ); 