// 1. returning prime numbers array from inputted array
console.log("1. returning primbe numbers array from inputted array");
function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function filterPrimes(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimes(numbers);
console.log(primeNumbers);

// 2. checking if the string is polindrome
console.log("2. checking if the string is polindrome");
function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
let str = "level";
console.log("palindrome of string: ", str);
console.log(palindrome(str));

//3. Array reversing

console.log("3. Array reversing");
function reverseArray(arr) {
  const len = arr.length;
  const reversedArray = [];

  for (let i = len - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log("Original Array: ", originalArray);
console.log("reversed array", reversedArray);

// 4.  Inplace Array reversing
console.log("4. Inplace Array reversing");
function reverseInPlace(array) {
  const len = array.length;

  for (let i = 0; i < len / 2; i++) {
    const temp = array[i];
    array[i] = array[len - 1 - i];
    array[len - 1 - i] = temp;
  }
}

const inputArray = [10, 20, 30, 40, 50];
console.log("Original Array: ", inputArray);
reverseInPlace(inputArray);
console.log("inplace reversed array", inputArray);

// 5. array and objects

const peopleArray = [
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21, male",
  "Alian Dwine, 22, male",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10, trans",
  "Patrick wyne, 40, non-binary",
];

function processPeopleData(peopleArray) {
  const result = {
    females: [],
    males: [],
    otherGenders: 0,
  };

  for (let person = 0; person < peopleArray.length; person++) {
    const [fullName, age, gender] = peopleArray[person]
      .split(",")
      .map((part) => part.trim());

    const [firstName, secondName] = fullName.split(" ");

    const personObject = { "second-name": secondName, age: parseInt(age) };

    if (gender.toLowerCase() === "female") {
      result.females.push({ [firstName]: personObject });
    } else if (gender.toLowerCase() === "male") {
      result.males.push({ [firstName]: personObject });
    } else {
      result.otherGenders++;
    }
  }

  return result;
}

let result1 = processPeopleData(peopleArray);
console.log(result1);
