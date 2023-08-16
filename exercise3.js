/* ex1  map → customMap */

// Array.prototype.customMap = function (callback) {
//   let res = [];
//   for (let i in this) {
//     let el = this[i];
//     let check = callback(el, +i, this);
//     if (check) {
//       res.push(el*2);
//     }
//   }
//   return res;
// };

// let arr = [5, 4, 8, 9, 2, 7];

// let evenArr = arr.customMap((el) => el *2);

// console.log(evenArr);

/* ex2 every → customEvery xxxxx */

// Array.prototype.customEvery = function (callback) {
//   for (let i in this) {
//     let el = this[i];
//     let check = callback(el, +i, this);
//     if (check) {
//       return true;
//     }
//   }
//   return false;
// };

// let arr = [4, 3, 7, 9, 7, 1];

// let evenCheck = arr.customEvery((el, i, arr) => el % 2 === 0);

// console.log(evenCheck);

/* ex3 reduce → customReduce*/

// let arr = [5, 1, 3, 8, 9];

// Array.prototype.customReduce = function (callback) {
//   let res = 0;
//   for (let el of this) {
//     res += el;
//   }
//   return res;
// };

// let sum = arr.customReduce((acc, el) => acc + el);
// console.log(sum);

/* ex4 findIndex → customFindIndex */

// Array.prototype.customFindIndex = function (callback) {
//      for (let i in this) {
//        let el = this[i];
//        let check = callback(el, +i, this);
//        if (check) {
//          return i;
//        }
//      }
//      return undefined;
//    };
   
//    let arr = [5, 4, 8, 9, 2, 7];
//    let firstEven = arr.customFindIndex((el) => el % 2 === 0);
   
//    console.log(firstEven);

/* ex5 splice → customSplice */

let arr = [5, 12, 8, 14, 130, 44];

Array.prototype.customSplice = function (value, start, end) {
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
}

console.log(arr.customSplice(0, 1, 3));