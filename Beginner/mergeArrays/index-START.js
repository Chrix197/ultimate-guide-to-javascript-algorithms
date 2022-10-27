/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) { // notice here that we DO NOT know how many parameters we are accepting! That's new!
// Javascript lets us access the arguments passed from within the function using the array-like object 'arguments'. With ES6, 
    // we have a better way to achieve the same result - the "rest parameter" syntax. see the ... in the parameters above.
    // this will combine all the arguments passed into one array which we name 'arrays'.

// With our given array of arrays, we still need to spread all of the inputs into one beeeeg array.
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
// Now that we have all of the elements of all of the arrays combined into one big array with duplicates, we can start working
    // on the challenge.

    // we can take advantage of the Set object in JS, which is designed to only hold unique values.
    // return [...new Set([...jointArray])] // || return Array.from(new Set([...jointArray])) -- same, same.

    // const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index)
    // return uniqueArray

    const uniqueArray = jointArray.reduce((newArray, item) => { // it is important to remember with .reduce() that the return
            // value is the value used as the 'accumulator' value in the method. In other words here, the 'return' values 
            // from the if statement are the values used in each cycle to check 'item' against.
        if (newArray.includes(item)) {
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}

// filter solution is the fastest solution here. Set solution is next.

module.exports = mergeArrays