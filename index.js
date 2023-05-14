// Q1)
const numbers = [1, 2, 3, 4, 5];
// Given the array numbers = [1, 2, 3, 4, 5],
// write code to create a new array where each
// number is multiplied by 2 using the map method.
// ============== Your answer here:
console.log(numbers.map(multi => multi * 2));
// ==============

// Q2)
const names = ["Alice", "Bob", "Charlie"];
// Given the array names = ["Alice", "Bob", "Charlie"],
// write code to create a new array where each name is
// converted to uppercase using the map method.
// ============== Your answer here:
console.log(names.map(upper => upper.toUpperCase()));
// ==============

// Q3)
const numbers2 = [1, 4, 9, 16, 25];
// Given the array numbers = [1, 4, 9, 16, 25],
// write code to create a new array where each
//  number is squared using the map method.
// ============== Your answer here:
console.log(numbers2.map(squared => squared ** 2));
// ==============

// Q4)
const names2 = ["John", "Jane", "Tom"];
// Given the array names = ["John", "Jane", "Tom"],
// write code to create a new array where each name
// is appended with " Smith" using the map method.
// ============== Your answer here:
console.log(names2.map(surName => surName + " Smith"));
// ==============

// Q5)
const numbers3 = [2, 4, 6, 8, 10];
// Given the array numbers = [2, 4, 6, 8, 10],
//  write code to create a new array where each
// number is divided by 2 using the map method.
// ============== Your answer here:
console.log(numbers3.map(divide => divide / 2));
// ==============

// Q6)
const fruits = ["apple", "banana", "orange"];
// Given the array fruits = ["apple", "banana", "orange"],
//  write code to create a new array where each fruit
//  name is capitalized using the map method. Ex, Apple ...
// ============== Your answer here:
console.log(fruits.map(cap => cap[0].toUpperCase() + cap.slice(1)));
// ==============
