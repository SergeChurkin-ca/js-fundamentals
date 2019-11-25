/*
Create a function to determine someone's age.

Define a function called ageCalculator. This function should take 3 parameters:

    name – a string representing someone's name
    yearOfBirth – a number representing their year of birth
    currentYear – a number representing the current year
*/

function ageCalculator(name, yearOfBirth, currentTear) {
  return name + ' is '  +(currentTear - yearOfBirth) + ' years old.';  
}

console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Jack", 2003, 2015));
console.log(ageCalculator("Ali", 2015, 2015));
