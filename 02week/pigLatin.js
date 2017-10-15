'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pigLatin(str) {

    let fullWord = str.toLowerCase().trim(); // clean up the input

    var vowel = ['a', 'e', 'i', 'o', 'u']; // new arrays vowels
    let firstLetter = fullWord[0]; // identifies first letter of word

    if (vowel.includes(firstLetter)) {
        // run vowel conditions  
        return fullWord + 'yay';
    } else {
        // run consonant conditions
        //for(var i = 1; fullWord.length; i++){

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