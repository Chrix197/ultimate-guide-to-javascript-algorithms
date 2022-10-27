/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // to clean up the string, we'll build a helper function to convert the whole string to lowercase, then remove all
        // non-letter characters.
/*

    const sanitizeString = function(str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    }
    return sanitizeString(stringA) == sanitizeString(stringB)

*/
    // Next, we'll try with a character map to compare both the letters and their frequency in the two strings.

    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }

}

// might be surprising, but the character map comparison is actually a good deal more efficient/faster than the
    // more direct/more concise comparison method.


module.exports = isAnagram