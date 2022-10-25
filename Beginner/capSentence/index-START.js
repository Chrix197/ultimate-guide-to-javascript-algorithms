/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

// There are a few ways to accomplish this task - using the forEach method,
  // using the .map and .splice methods,  ------> turns out to be the fastest solution
  // and using the .map and .replace methods.


function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1))
  })

  return capsArray.join(' ')

  // As you might imagine, using .map and .slice is a very similar operation. instead of .forEach with a push, capsArray simply
    // gets set to the output of the .map function.

  /* let wordsArray = text.toLowerCase().split(' ')

  let capsArray = wordsArray.map( word => {
    return word.replace(word[0], word[0].toUpperCase())
  })

  return capsArray.join(' ')
    */
   // Code goes here
}



module.exports = capSentence