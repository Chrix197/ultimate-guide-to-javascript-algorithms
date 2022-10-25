/* CHALLENGE
Given a sentence, return the longest word in the string
longestWord('Top Shelf Web Development Training on Scotch') should return 'Development'
*/



function longestWord(text) {
    /*
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
    */
    // Ok, that works, let's try one with .reduce().
/*
    let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord  // both of these 'return' cases will 'return' the value to the accumulator (maxLengthWord here)
        } else {
            return maxLengthWord
        }
    }, "") // ---->> important to pass in an initial value (empty string) in this implementation of .reduce().
    return result
*/
    // Nice. Let's try one with .sort().

    let sortedArray = text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}

// in performance, sort runs slowest by a wide margin. the for-loop and reduce options are similar in performance.
module.exports = longestWord