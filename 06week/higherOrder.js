'use strict';

const assert = require('assert');


function forEach(arr, callback) {
    // loop through entire length of array
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]); // convert element value
    }
}

function map(arr, callback) {
    // new array with mapped elements
    let result = [];

    // loop through array and convert element
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let converted = callback(element); // convert element value
        result.push(converted);
    }

    // return new array with mapped elements
    return result;
}

function filter(arr, callback) {
    // new array with filtered elements
    let result = [];

    // loop through array and filter element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]); 
        }; 
    }

    // return new array with filtered elements
    return result;
}

function some(arr, callback) {
    // Your code here
}

function every(arr, callback) {
    // Your code here
}

if (typeof describe === 'function') {

    describe('#forEach()', () => {
        it('should call the callback the array.length number of times', () => {
            let count = 0;
            forEach([1, 2, 3], () => {
                count++;
            });
            assert.equal(count, 3);
        });
    });

    describe('#map()', () => {
        const arr = [1, 2, 3];
        const mapped = map(arr, (num) => {
            return num * num;
        });
        it('should return new array with mapped items', () => {
            assert.deepEqual(mapped, [1, 4, 9]);
        });
        it('should not affect the original array', () => {
            assert.deepEqual(arr, [1, 2, 3]);
        })
    });

    describe('#filter()', () => {
        it('should return an array of items that pass the predicate test', () => {
            const filtered = filter([1, 2, 3], (num) => {
                return num % 2 === 0;
            });
            assert.deepEqual(filtered, [2]);
        });
    });

    describe('#some()', () => {
        let count = 0;
        const somed = some([1, 2, 3, 4], (num) => {
            count++;
            return num % 2 === 0;
        });
        it('should return true if at least one item passes the predicate test', () => {
            assert.equal(somed, true);
        });
        it('should stop at the first item that passes the predicate test', () => {
            assert.equal(count, 2);
        });
        it('should return false if no items pass the predicate test', () => {
            const somed = some([1, 3, 5], (num) => {
                return num % 2 === 0;
            });
            assert.equal(somed, false);
        });
    });

    describe('#every()', () => {
        it('should return true if at all passes the predicate test', () => {
            const everied = every([2, 4, 6], (num) => {
                return num % 2 === 0;
            });
            assert.equal(everied, true);
        });
        let count = 0;
        const everied = every([2, 3, 4, 5], (num) => {
            count++;
            return num % 2 === 0;
        });
        it('should return false if any item fails the predicate test', () => {
            assert.equal(everied, false);
        });
        it('should stop at the first item that fails the predicate test', () => {
            assert.equal(count, 2);
        });
    });

} else {

    console.log('Only run the tests on this one!')

}