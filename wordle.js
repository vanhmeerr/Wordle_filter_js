
// get list of all 5 letter words
const allWords = require('./words');
// has these letters
const hasLetters = ['u', 'y', 's', 'h'];
// must not has these letters
const mustNotHaveLetters = ['e', 'd', 'b', 'l', 'a', 'r', 'g', 'n', 'c', 'm'];
// must have selected letters in these positions
const mustHaveLettersInPosition = [, 'u', 's', 'h', 'y']
// not in these positions
const mustNotHaveLettersInPosition = ['s', , , ,]


const containsLetter = (word, letter) => {
  return word.includes(letter);
}

const doesNotContainLetter = (word, letter) => {
  return !word.includes(letter);
}

const hasLetterInPosition = (word, letter, position) => {
  if (letter === undefined) return true;

  return word[position] === letter;
}

const doesNotContainLetterInPositions = (word, letter, position) => {
  if (letter === undefined) return false;

  return word[position] !== letter;
}



const filteredWords = allWords.filter(word => {
  return hasLetters.every(letter => containsLetter(word, letter)) &&
    mustNotHaveLetters.every(letter => doesNotContainLetter(word, letter)) &&
    mustHaveLettersInPosition.every((letter, index) => hasLetterInPosition(word, letter, index)) &&
    mustNotHaveLettersInPosition.every((letter, index) => doesNotContainLetterInPositions(word, letter, index));
})

console.log(filteredWords);
console.log('possible words', filteredWords.length);