 const prompt=require('prompt-sync')();
// function checkPrime(num){
//     let i=2;
//     let count=0;
//     let output=false;
// while (i<num) {
//     if(num%i===0){
//         count++;
    
//     }
//     i++;
    
// }
// if(count===0){
//     output=true;
// }
// return output;
    
// }
// let n=parseInt(prompt("please enter number :"));
// console.log(checkPrime(n));

// console.log('-------------------------------------------------------');

// function computarea(r){
//     let area;
//     area=Math.PI*(r*r);
//     return area;
// }
// console.log(computarea(2));
// console.log('-----------------------------------------------------');

function house_volume(h,w,d,s) {
   
   
    return living_volume(h,w,d)+roof_volume(w,d,s); 
   
}

function living_volume(h,w,d){
    let livingVolume=h*w*d;
    
    return livingVolume;

}

function roof_volume(w,d,s){
    let rvolume=w*area_triangle(s,d,s);
    
    return rvolume;
}

function area_triangle(a,b,c){
    let p=(a+b+c)/2;
    let areaTriangle=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    
    return areaTriangle;

}

let h=+prompt("enter height:");
let w=+prompt(" enter width:");
let d=+prompt(" enter depth:");
let s=+prompt("enter sweep:");

console.log(house_volume(h,w,d,s));