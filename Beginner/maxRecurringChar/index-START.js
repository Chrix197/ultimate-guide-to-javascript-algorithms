/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// We'll solve this with a character map object!

function maxRecurringChar(text) {
    let charMap = {} // initialize an empty object.
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) { // for...of loop through text
        if (charMap.hasOwnProperty(char)) { // checks the charMap object to see if this character is a property yet
            charMap[char]++ // if that character exists already in the map object, increment the count
        } else {
            charMap[char] = 1 // otherwise, create that character as a property with a count of 1
        }
    }

    for (let char in charMap) { // iterate over the object
        if (charMap[char] > maxCharValue) { // if the count for a certain character is greater than the previous max,
            maxCharValue = charMap[char] // that count is the max count,
            maxChar = char // and that character is the max character.
        }
    }

    return maxChar
    // Code goes here
}



module.exports = maxRecurringChar;