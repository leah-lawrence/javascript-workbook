'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pigLatin(str) {

    let fullWord = str.toLowerCase().trim(); // clean up the input
    let vowel = ['a', 'e', 'i', 'o', 'u']; // vowel array
    let firstLetter = fullWord[0]; // assigns variable to the first letter of input

    if (vowel.includes(firstLetter)) {
        return fullWord + 'yay';
    } else {
        for(var i = 0; fullWord.length; i++) {
          if (vowel.includes(fullWord[i])) {
            return fullWord.slice(i) + fullWord.slice(0,i) + 'ay';
          }
        }
    }
}

/*
pigLatin('car'); // arcay
pigLatin('dog'); // ogday
pigLatin('create'); // eatecray
pigLatin('valley'); // alleyvay
pigLatin('egg'); // eggyay
pigLatin('emission'); // emissionyay
pigLatin('HeLlO '); // ellohay
pigLatin(' RoCkEt'); // ocketray
*/ 

function getPrompt() {
    rl.question('word ', (answer) => {
        console.log(pigLatin(answer));
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