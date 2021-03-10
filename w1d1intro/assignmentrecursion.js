"use strict";
/**
 * 
 * @param {base} anum number for a base
 * @return {nummber} number for power
 */
function power( base, num) {
        if (num!= 0)
            return (base * power(base, num - 1));
        else
            return 1;
    }
    console.log(power(2,4));

    
    /**
 * 
 * @param {number} num number to count 
 *  
 * @return {number} count
 */
 function countNum(num){
        if(num===0){
        return 0;
        }else{
            console.log(num);
        return  countNum(num-1);
        }
        }
        console.log(countNum(10));

       
/**
 * 
 * @param {string} str string to be reverse
 *  
 * @return {string} string
 */
function reverseStr(str){
    if(str.length===" "){
        return 0;
    }else{
        return str.charAt(str.length-1)+reverseStr(str.substr(0, str.length - 2));
    }
}
console.log(reverseStr('hellooo'));