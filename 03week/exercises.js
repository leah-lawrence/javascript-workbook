'use strict'

/*
1. length
Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
Console.log the length of the array.
*/

var cars = ['Ford', 'Toyota', 'Kia', 'Nissan'];
console.log(cars.length); // 4

/* 
2. concat
Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
*/

var moreCars = ['Mazda', 'Acura', 'Suzuki', 'Honda'];
var totalCars = cars.concat(moreCars); 
console.log(totalCars); // ['Ford', 'Toyota', 'Kia', 'Nissan', 'Mazda', 'Acura', 'Suzuki','Honda']

/*
3. indexOf and lastIndexOf
Use the indexOf method to console.log the index of Honda.
Use the lastIndexOf method to console.log the index of Ford.
*/

console.log(totalCars.indexOf('Honda')); // 7
console.log(totalCars.lastIndexOf('Ford')); // 0

/* 
4. join
Use the join method to covert the array totalCars into a string called stringOfCars.
*/

var stringOfCars = totalCars.join(', '); 
console.log(stringOfCars); // Ford, Toyota, Kia, Nissan, Mazda, Acura, Suzuki, Honda

/*
5. split
Use the split method to convert stringOfCars back intro an array called totalCars.
*/

var totalCars = stringOfCars.split(", ");
console.log(totalCars); // [ 'Ford', 'Toyota', 'Kia', 'Nissan', 'Mazda', 'Acura', 'Suzuki', 'Honda' ]

/*
reverse
Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
*/

var carsInReverse = totalCars.reverse();
console.log(carsInReverse); // [ 'Honda', 'Suzuki', 'Acura', 'Mazda', 'Nissan', 'Kia', 'Toyota', 'Ford' ]

/*
7. sort
Use the sort method to put the array carsInReverse into alphabetical order.
Based on the types of cars you used, predict which item in the array should be at index 0.
*/

var carsInReverse = totalCars.sort();
console.log(carsInReverse); // [ 'Acura', 'Ford', 'Honda', 'Kia', 'Mazda', 'Nissan', 'Suzuki', 'Toyota' ]
// alert(carsInReverse.indexOf('Acura'));

/*
8. slice
Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
*/

var removedCars = carsInReverse.slice(1,3);
console.log(removedCars); // [ 'Ford', 'Honda' ]

/*
9. splice
Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
*/

carsInReverse.splice(1, 2, 'Ford', 'Honda'); 

/* 
10. push
Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
*/

carsInReverse.push(removedCars[0]);
carsInReverse.push(removedCars[1]);

/*
11. pop
Use the pop method to remove and console.log the last item in the array carsInReverse.
*/

console.log(carsInReverse.pop());

/*
12. shift
Use the shift method to remove and console.log the first item in the array carsInReverse.
*/

console.log(carsInReverse.shift());

/*
13. unshift
Use the unshift method to add a new type of car to the array carsInReverse.
*/

carsInReverse.unshift('Acura');

/*
14. forEach
Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
*/

var numbers = [23, 45, 0, 2];           
numbers.forEach(function (element, index, arr) {
  arr[index] += 2;
});