/* 
Given an array and a chunk size, divide the array into 
many sub-arrays where each sub-array has the specified length.
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

// There are a few approaches we can take here. 

function chunkArray(array, size) {
    // First, we'll iterate through the array and manually break it down into small groups.
/*

    let result = []
    for (value of array) {
        let lastArray = result[result.length -1 ] // 'lastArray' is the last available item in the array (also an array item)
        if (!lastArray || lastArray.length == size) {
            result.push([value]) // if the last array item inside result is empty or at the required size (meaning we need to 
                                    // start a new array), then push the current value into an array inside result.
        } else {
            lastArray.push(value) // otherwise, (meaning the last array item inside result is not empty, and is not yet at the 
                                    // required size), then push that value to the last array item.
        }
    }
    return result

*/
    // Next, we'll do one with .splice() - thsi one makes sense to me right away.
    /*
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
    */

    // This one uses .slice() to do pretty much the same thing, just without using a method that modifies the input.
        // so, no need to create an array copy. Again, makes sense. ----->>> this is the fastest method.
    /*
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
    */

    // Last one uses recursion.
    if (array.length <= size) { // this is the terminating condition, or 'base case'
        return [array]
    }
    return [array.slice(0, size), ...chunkArray(array.slice(size), size)] // this return is initializing the answer array
        // and calling the function again with updated parameters. the new 'array' parameter is the array minus the several
            // items taken off the front in the first item (so, the first chunk). this drills down and down until the 
            // remaining items are less than or equal to the 'size' parameter (which is always the same), at which point
            // that last chunk is returned into the return. Crazy!
}


module.exports = chunkArray