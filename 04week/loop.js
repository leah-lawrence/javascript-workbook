'use strict'

///////////////////////
//// FOR LOOP
///////////////////////

// Use a for loop to console.log each item in the array carsInReverse.
let carsInReverse = ['cadillac', 'bentley', 'accord'];
for (let index in carsInReverse) {
    console.log(carsInReverse[index]);
}

///////////////////////
//// FOR...IN LOOP
///////////////////////

// Create an object (an array with keys and values) called persons with the following data: firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"
let persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
}

// use a for...in loop to console.log each property/key
for (let index in persons) {
    console.log(persons[index]);
}

// then use a for...in loop and if state to console.log the value associated with the key birthDate.
// ????
for (let index in persons) {
	console.log(persons[index]);
    if (index == persons["birthDate"]) {
        console.log(persons["birthDate"]);
    }
}

for (let index in persons) {
	let stopCondition = persons["birthDate"];
    if (index === stopCondition) {
        console.log(stopCondition);
    }
}

///////////////////////
//// WHILE LOOP
///////////////////////

// Use a [while] loop to console.log the numbers 1 to 1000.
let count = 1;
while (count < 1000) {
    count += 1;
    console.log(count);
}

///////////////////////
//// DO...WHILE LOOP
///////////////////////

// Use a do...while loop to console.log the numbers from 1 to 1000.
let num = 0;
do {
    num += 1;
    console.log(num);
} while (num < 1000);

/************************************

// When is a for loop better than a while loop?

// How is the readability of the code affected?

// What is the difference between a for loop and a for...in loop?

// What is the difference between a while loop and a do...while loop?

************************************/