"use strict";
let car = {
    make: "Toyota'",
    model: "Civic",
   
};

console.log(car);
car.make="RAVA4";
console.log(car);
delete car.make;
console.log(car);
console.log("------------------2------------------------------");
let user={ 
    name:"mahalaleel",
    age:11,
    geneder: "male",
    love: "playing soccer",
};
/**
 * @param {String} obj ;
 * @return{boolean};
 */
function countProperties(obj){
    for(let key in user){
        console.log(key);
    }
}
countProperties(user);

console.log('----------------3--------------------------------');

let text={ lottery: 35, prize:4600, year: 1965, age: 34};
/**
 * @param {String} str ;
 * @return{boolean};
 */
function checkSpam(str){
    console.log("lottery" in text);
    console.log("prize" in text);
}
checkSpam(text);
console.log('----------------3--------------------------------');
/**
 * @param {String} str ;
 * @return{boolean};
 */
function checkSpam(str){
    let word =str.split(" ") ;
    for(let text of word) {
        if(text==="lottery"||text==="prize")
        return true;
    }
    return false;
  }
  
  let word="this is lottery"
  console.log(checkSpam(word))

console.log('---------------------4---------------------------');

/**
 *
 * @param {Strign} str1 ;
 * @param {Strign} str2;
 * @return{Strign};
 */
 function suffix(str1, str2) {
  let sufix = "";
  let len1 = str1.length;
  let len2 = str2.length;
  let len = len1 > len2 ? len1 : len2; //Meanig
  for (let i = 0; i < len; i++) {
    if (str1[len1 - i - 1] !== str2[len2 - i - 1]) {
      return sufix;
    }
    sufix = str1[len1 - i - 1] + sufix;
  }
  return sufix;
}
console.log(suffix("waking", "swimming")); //output son
let str1 = "worker";
let str2 = "worgftbvrker";
console.log(suffix(str1, str2));

  console.log('---------------------5---------------------------');

/**
 * 
 * @param {Number} xbe ;
 * @param {Number} ybe ;
 * @return{undefined};
 */
 function swap(xbe, ybe) {
  let temp = xbe;
  xbe = ybe;
  ybe = temp;
}

let xbe=5;
let ybe=7;
console.log(xbe,ybe)//5,7
swap(xbe,ybe);
console.log(xbe,ybe);//5,7


  console.log('---------------------7---------------------------');
  /**
 *
 * @param {Array} arr ;
 * @return{Number};
 */
function getAverage(arr) {
  let sum = 0;
  for (let user of arr) sum += user.age;
  return sum / arr.length;
}

let array = [
  {
    name: "abc",
    age: 20,
  },
  { 
    name: "xyz",
     age: 10 },
];
console.log(getAverage(array));

  