// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    "use strict";
      let sumNum = 0;
      for (let i = 0; i < numbers.length; i++){
        if( numbers.length == 0){
          sumNum == 0
         }else (sumNum += numbers[i])
  }
        return sumNum
}
