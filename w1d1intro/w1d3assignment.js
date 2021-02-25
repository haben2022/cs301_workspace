const prompt = require('prompt-sync')();
let weather = prompt("enter the weather :");

if (weather === "hot") {
    console.log( "sandals");

} else if (weather === "rain") {
    console.log("galoshes");

} else if (weather === "snow") {
    console.log( "boots");

}
else {
    console.log("Sneakers");
}

console.log('----------------------------2---------------------------------------------');


let stuName=prompt("please enter student name:");
let numCre=prompt("enter the number of completed credit:");


if(numCre>0&&numCre<30){
    console.log(stuName+" "+"Freshman");
}
else if(numCre>=30&&numCre<60){
    console.log(stuName+" "+"sophpomere");
}
else if(numCre>=60&&numCre<90){
    console.log(stuName+" "+"junior");

}
else if(numCre>90){
    console.log(stuName+" "+"senior");
}

console.log('------------------------------3-------------------------------------------');
let costh= +prompt("enter the cost of the house :");
let downpaymet;
if(costh>0&&costh<50000){
    downpaymet=5/100*(costh);
}else if(costh>50000&&costh<100000){
    downpaymet=1000+10/100*(costh-50000);
}else if(costh>100000&&costh<200000){
    downpaymet=2000+15/100*(costh-100000);
}else if(costh>200000){
    downpaymet=5000+10/100*(costh-200000);
}
console.log(downpaymet);

console.log('--------------------------------4-----------------------------------------');

let status = prompt("enter persons status:");
let numBooKept = +prompt("enter number of book kept");

if (status === "student") {
    if (numBooKept === 0) {
        console.log("6 weeks");
    }
    else if (numBooKept <= 3) {
        console.log("4 weeks")
    }
    else {
        console.log("2 weeks");
    }
}
else if (status === "faculty") {
    if (numBooKept === 0) {
        console.log("16 weeks");
    }
    else if (numBooKept <= 3) {
        console.log("12 weeks")
    }
    else {
        console.log("8 weeks");
    }
}
else {
    if (numBooKept === 0) {
        console.log("4 weeks");
    }
    else if (numBooKept <= 3) {
        console.log("3 weeks")
    }
    else {
        console.log("2 weeks");
    }
}

console.log('-------------------5-----------------------------');
let age = +prompt("enter child's age ");
let season = prompt("enter current season ");

let bedTime = "";
if (age <= 5) {
    if (season === "summer" || season === "fall") {
        bedTime = "8:30 p.m."
    }
    else if (season === "winter" || season === "spring") {
        bedTime = "8:00 p.m."
    }
    console.log(bedTime);
}
if (age >= 6 && age <= 12) {
    if (season === "summer") {
        bedTime = "9:30 p.m."
    }
    else if (season === "winter" || season === "spring" || season === "fall") {
        bedTime = "8:30 p.m."
    }
    console.log(bedTime);
}
else if (age >= 13) {
    if (season === "summer") {
        bedTime = "10:30 p.m."
    }
    else if (season === "winter" || season === "spring" || season === "fall") {
        bedTime = "9:30 p.m."
    }
    console.log(bedTime);
}

