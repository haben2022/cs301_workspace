"use strict";
/**
 * 
 * @param {number} op1 compute a number
 *  @param {number} op2 second number
 *  
 * @return {number} sum
 */
function add(op1, op2) {
    let addnum=op1+op2;
    return addnum;

}
/**
 * 
 * @param {number} op1 compute a number
 *  @param {number} op2 second number
 *  
 * @return {number} subtraction
 */
function sub(op1, op2) {
    let subnum=op1-op2;
    return subnum;
 
}
/**
 * 
 * @param {number} op1 compute a number
 *  @param {number} op2 second number
 *  
 * @return {number} division
 */
function div(op1, op2) {
    
    let divnum=op1/op2;
    return divnum;
}

module.exports = {add, sub, div};