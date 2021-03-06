function isArrayequal(arr1,arr2){
    if(arr1.length===arr2.length){
        return true;
    }
    return false;
}
let arr11=[1,2,2,2,2,1];
let arr13=[1,6,2,5,2,1];

console.log(isArrayequal(arr11,arr13));

console.log('-----------------------2--------------------------');
let arr3 = [10, 5, 3, 5, 2,9,5];
function addEnds(arr) {
   return arr[0] + arr[arr.length - 1];
}
console.log(addEnds(arr3));

console.log('-----------------------3--------------------------');
let arrmid = [1, 14, 4, 16, 17, 50, 22, 19];

function getMiddle(arr) {
    let mid;
    let middleIndex;
    if ((arr.length) % 2 === 0) {
        middleIndex = Math.floor((arr.length) / 2);
        mid = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
    }
    else {
        middleIndex = Math.floor((arr.length) / 2);
        mid = arr[middleIndex];
    }
    return mid;
}
console.log(getMiddle(arrmid));

console.log('-------------------------4---------------------------------');

function ratateLeft(arr){
    let newarr1=[];
      
     for(let i=0;i<arr.length;i++){
        if(i<arr.length-1) {
        newarr1[i]=arr[i+1];
         }else{
             newarr1[i]=arr[0];
         }
     }

    
    return newarr1;
}
let arr21=[21,18,19,15,20];
console.log(ratateLeft(arr21));

console.log('--------------------5--------------------------');
function ratateRight(arr1){
    arr1=[17,8,9,5,20];

    
       let value=[];
      
     for(let i=0;i<arr1.length;i++){
        if(i<arr1.length-1) {
            value[i+1]=arr1[i];
        }
        else value[0]=arr1[i];
     }

    
    return value;
}
arr1=[17,8,9,5,20];
console.log(ratateRight(arr1));

console.log('--------------------6--------------------------');
function multArray(arr,num){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        newarr[i]=arr[i]*num;

    }
    return newarr;
}
let arr13=[2,3,4,5,6];
console.log(multArray(arr13,2));

console.log('--------------------8--------------------------');


function comparator(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
}

function twosortedarr(arr1,arr2){
    let newArray=[];
    for(let i=0;i<arr1.length;i++){
        newArray.push(arr1[i]+arr2[i]);
    }
    return newArray;
}


arr11=[5,6,7,8,12,4,1,3];
arr11.sort(comparator);
arr12=[6,21,41,2,5,6,8,9];
arr12.sort(comparator);
console.log(twosortedarr(arr11,arr12));