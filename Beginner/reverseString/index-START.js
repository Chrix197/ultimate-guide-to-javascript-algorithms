/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // Code goes here
    // return text.split("").reverse().join("")
    // Equivalent solution:
    // return [...text].reverse().join("")

    // For loop solution:
    // let result = ""
    // for (let i = text.length-1; i >=0; i--) {
    //     result += text[i]
    // }
    // return result

    // Using .reduce:
    return text.split("").reduce((acc, char) => char + acc, '')
        // Don't forget here that .reduce wants an initial value, in this case it is an empty string.
}



module.exports = reverseString