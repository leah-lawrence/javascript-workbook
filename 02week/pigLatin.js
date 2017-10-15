'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  let fullWord = word.toString().toLowerCase().trim(); // Clean up the input
  let firstHalf = fullWord.substring(0, 2); // Pull out first two letters of a string

}

pigLagin();


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

/*Consonants
car — > archer

Vowels
exam —> xamyay

let haystack = “Bob is a nice guy”;
let needle = ‘nice’;
console.log(haystack.indexOf(needle));
// returns 9

needle = 0;

let fullWord = “straw”;
let firstHalf = fullWord.substring(0, 3); // first half
let secondHold = fullWord.substring(3,5); // full word
let secondHold = fullWord.substring(3); // all the way to the end
let howLongIsTheWord = fullWord.length;
console.log(firstHalf);
console.log(secondHalf);
console.log(howLongIsTheWord);

let translated = secondHalf + firstHalf + “ay”;
console.log(translated);

Indexof
substring*/