const prompt=require('prompt-sync')();
// let num=+prompt("please enter number :");
//     let i=2;
//     let output=false;
// while (i<=num) {
//     if(num%i!=0){
//         if(num===i){
//             console.log(num); 
//         }
    
    
//     }
//     i++;
    
// }

// console.log('-----------------------------------------------------------------');

// let num=+prompt("please enter number :");
// let mulnum=0;
// let a=0;
// let b=1;
// let c=a+b;
// do{
//     a=b;
//     b=c;
//     c=a+b;
//     if(c===num){
//         mulnum=1;
//     }
//     } while(c<=num&&mulnum===0);
//     console.log(mulnum);

    console.log('----------------------------------------------------')
    let n=+prompt("please enter number :");
    
        let i=2;
        let c=0;
        let output=false;
    while (i<n) {
        if(n%i===0){
            c++;
        
        }
        i++;
        
    }
    if(c===0){
        output=true;
    }
    console.log( output);

    console.log('------------------------------------------------');
    let sum = 0;
while (true) {
let value = +prompt("Enter a number", '');
if (!value) break; 
sum += value;
}
console.log('Sum: ' + sum);
        
    
    
    