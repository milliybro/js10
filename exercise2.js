`Number constructoriga quyidagi metodlarni qo’shing.
   toFixed → fixed
   round 4.567 → 5, 10.102 → 10
   isSquare 10 → false, 16 → true
   count → musbat butun sonning necha xonali ekanini ko’rsatsin
   sum → musbat butun sonning raqamlar yi’gindisini chiqarsin.`;

/* ex1 */ `!!!!!!!!!!!!`
// const num = 125.54555;
// const res = num.toFixed(2);

// console.log(res); 

/* ex2 */

// let n = 552.86;

// Number.prototype.round = function () {
//   let arr = n.toString().split(".");
//   let value = arr[0];
//   if (value[1] >= 5) {
//     value++;
//   } else {
//     value;
//   }

//   return value;
// }

// console.log(n.round());

/* ex3 */

// Number.prototype.isSquare = function() {
//    return Math.sqrt(this) % 1 === 0;
//  };
 
//  console.log((16).isSquare()); 


/* ex4 */

// Number.prototype.count = function() {
//    return Math.abs(this).toString().length;
//  };
 
//  console.log((12345).count()); 

/* ex5 */
// Number.prototype.sum = function() {
//    let num = Math.abs(this); 
//    let sum = 0;
   
//    while (num > 0) {
//      sum += num % 10; 
//      num = Math.floor(num / 10); 
//    }
   
//    return sum;
//  };
 
//  console.log((123).sum());