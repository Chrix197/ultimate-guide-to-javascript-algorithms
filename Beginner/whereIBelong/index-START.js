/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelong(arr, num) {
/*
   arr.sort((a, b) => { // sort the array
      return a - b
   })
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) { // just look at each number individually and compare it to the given num. At the first larger
            // value, return that index.
         return i
      }
   }
   return arr.length
*/

/*
   let counter = 0 // here, we loop through and count how many values in the array are smaller than the given
      // number. when sorted, that number is the index of the num. ----->>> fastest by a wide margin
   for (let i = 0; i < arr.length; i++) {
      if (num > arr[i]) {
         counter++
      }
   }
   return counter
*/


   // Last, just put the number into the array, sort it and find the index of

   arr.push(num)
   arr.sort((a, b) => a - b)
   return arr.indexOf(num)
}



module.exports = whereIBelong