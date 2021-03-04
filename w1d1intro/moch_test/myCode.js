"use strict";
/**
 * 
 * @param {number} anum number to be tested if area if triangle
 *  @param {number} bnum number to be tested if area if triangle
 *  @param {number} cnum number to be tested if area if triangle
 * @return {number} area of triangle
 */
function triangleArea(anum,bnum,cnum){
    let par=(anum+bnum+cnum)/2;
    let areaTriangle=Math.sqrt(par*(par-anum)*(par-bnum)*(par-cnum));
    
    return areaTriangle;

}
exports.triangleArea=triangleArea;
