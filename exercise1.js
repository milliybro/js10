`String constructoriga quyidagi metodlarni custom variantini qo’shing.
ex1.trim → trm
ex2.toUpperCase → upperCase
ex3.includes → has
ex4.slice → cut
ex5.repeat → rpt`;

/* ex1 */

// String.prototype.trm = function () {
//   let stringStarted = false;
//   let res = "";

//   for (let i = 0; i < this.length; i++) {
//     let pos = this[i].charCodeAt();
//     if (!stringStarted && pos == 32) {
//       continue;
//     } else if (!stringStarted) {
//       stringStarted = true;
//     }
//     res += this[i];
//   }

//   return res;
// };

// let str = "   MilliyBro    ";

// console.log(str.trm());

/* ex2 */

// let str = "MilliyBro";

// String.prototype.upperCase = function () {
//   let res = "";
//   for (let char of this) {
//     let pos = char.codePointAt();
//     if (97 <= pos && pos <= 122) {
//       res += String.fromCharCode(pos - 32);
//     } else {
//       res += char;
//     }
//   }
//   return res;
// };

// console.log(str.upperCase());

/* ex3 */
// Array.prototype.has = function (callback) {
//    let res = [];
//    for (let i in this) {
//      let el = this[i];
//      let check = callback(el);
//      if (check) {
//        res.push(el);
//      }
//    }
//    return res;
//  };
 
//  let arr = [5, 4, 8, 9, 2, 7];
 
//  let evenArr = arr.has(2);
 
//  console.log(evenArr);


/* ex4 */

// let value = "MilliyBro";

// String.prototype.cut = function (start, end = this.length) {
//   let res = "";
//   for (let i = start; i < end; i++) {
//     res += this[i];
//   }
//   return res;
// }

// console.log(value.cut(0, 6));

// let value = "MilliyBro";

// String.prototype.rpt = function (n) {
//   for (let i = 1; i <= n; i++ ) {
//     console.log(`I am ${this.toString()}`);
//   }
// }

// value.rpt(5);


