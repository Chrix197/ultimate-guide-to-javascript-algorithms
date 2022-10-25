/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {

    // first, the 'intuitive' approach
    //    let reversedText = text.toLowerCase().split('').reverse().join('')
    //    return (text.toLowerCase() === reversedText)

    // another way to do it:
        // let charArray = text.toLowerCase().split('')

        // let result = charArray.every((letter, index) => {
        //     return letter === charArray[charArray.length - index - 1]
        // })

        // return result

    // this implementation would work, but it is redundant. It compares every element to the element that would be in its
        // place if the string were reversed, which means once it passes the middle of the string, it repeats all of the
        // previous comparisons. Maybe we can add a way to check if we're at the middle of the string?:

    let textLen = text.length
    for (let i = 0; i < textLen/2; i++) {
        if (text[i] !== text[textLen - 1 - i]) {
            return false
        }
    }
    return true
}



module.exports = palindromeChecker;