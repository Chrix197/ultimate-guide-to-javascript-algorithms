/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    let result = []
    for (value of array) {
        if (value) {
            result.push(value)
        }
    }
    return result

    // return array.filter((value) => {
    //     return Boolean(value) // kinda cool, didn't know this was a thing!
    // })
    // Code goes here
}


module.exports = falsyBouncer