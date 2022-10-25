/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const Vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {

    let count = 0

    for (let letter of text.toLowerCase()) {
        if (Vowels.includes(letter)) {
            count++
        }
    }

    return count
    /* Now for a regex solution:
        Search text with Regex and store all matching instances in variable;
    let matchingInstances = text.match(/[aeiou]/gi)
        Check if matching instances exist then calculate length;
    if (matchingInstances) {
        return matchingInstances.length
    } else {
        return 0
    } */
}

// Regex solution is a faster and more optimized solution, though the iterative approach is more beginner-friendly.

module.exports = vowelsCounter;
