'use strict'

///////////////////////
//// FOR LOOP
///////////////////////

// Use a for loop to console.log each item in the array carsInReverse.
let carsInReverse = ['cadillac', 'bentley', 'accord'];
for (let i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
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
for (let name in persons) {
    
    if (name !== 'birthDate' ) {};
    
    if (name === 'birthDate' ) {
    console.log(persons['birthDate']);
    };
    
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

A for..loop is used if the number of loops is known. 
A while..loop is used if the number of loops is unknown. 

// How is the readability of the code affected?

A while loop only needs the complete condition, while 
the for..loop requires initialization, a step operation, 
and complete condition. 

// What is the difference between a for loop and a for...in loop?

For..in loops are used to iterate through the properties of 
objects, while for..loops are used for sequential arrays. 

// What is the difference between a while loop and a do...while loop?

A do..while loop tests the condition at the end of the loop, and will
run the code while the condition is true. 

************************************/