
// 1) -------------------------------------------------------
let numbers = [0,1,2,3,4,5,6,7,8,9]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Q: What is the time complexity of the for loop?
// ANSWER: O(n)


// 1.2) You are challenged to find the 4th element of the array, and you came up with this solution:

var count = 1
var answer = 0

for (let i = 0; i < numbers.length; i++) {
    if (count === 4) {
        answer = numbers[i]
        return
    } else {
        count += 1
    }
}
// Q: What is the time complexity of of this solution?
// ANSWER: O(1)


// Q: Could you come up with a solution that has a better time complexity? If so, what is that time complexity?
// ANSWER: No, O(1) is the best time complexity available


// 2) -------------------------------------------------------
function printA() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// Q: What is the time complexity of the function?
// ANSWER: O(1)
// WHY: the for loop will run exactly 5 times, always


// 3) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
  }
}
// Q: What is the time complexity of the function?
// ANSWER: O(n)
// WHY: number is undefined, so the function will always be linear based on the n number.


// 4) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j)
    }
  }
}
// Q: What is the time complexity of the function?
// ANSWER: O(n^2
//WHY: Both the inner and aouter loops will run for 'N times, since they are nested
// it means that the fucntion's time complexity is O(n*n) > O(n^2)


// 5) -------------------------------------------------------
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(j)
  }
}
// Q: What is the time complexity of the nested for loop?
// ANSWER: O(n^2)
// WHY: Same justification as problem 4


// 6) -------------------------------------------------------
let newNumbersA = numbers.filter((num) => {
  return num < 5
})
// Q: What is the time complexity of the filter higher-order function?
// ANSWER: o(n)
// The filter function will test every element in the numbers array,
// meaning that it will run 'N' times


// 7) -------------------------------------------------------
let newNumbersB = numbers.map((num) => {
  return num * 3
})
// Q: What is the time complexity of the map higher-order function?
// ANSWER: O(n)
// WHY: the map function applies its funciton to every element on the numbers array.


// 8) -------------------------------------------------------
function removeNum() {
    numbers.splice(3,1)
}
// Q: What is the time complexity of the function?
// ANSWER: O(n)
// WHY: The following values from the 3rd index position will all be moved down an index position.


// 9) -------------------------------------------------------
function insertNum() {
    numbers.splice(3, 0, 19)
}
// Q: What is the time complexity of the function?
// ANSWER: O(n)
// Why: The splice function will need to shift all the elements of the array starting form the
// specified index when either deleting or adding a new element


// 10) -------------------------------------------------------
function pushNum() {
    numbers.push(25)
}
// Q: What is the time complexity of the function?
// ANSWER: O(1)



// 11) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
    console.log(array[0]) //O(1)
    console.log(array[1]) //O(1)
}

// Q: What is the time complexity of the function? Could we write this function differently to accomplish the goal of the function in a faster time complexity?
// ANSWER: 1 + 1 => O(1);


// Advanced Challenges
// Solve the following challenge. Once complete, determine the time complexity of your solution. Consider if there are ways to solve the challenge with a better time complexity.


// CHALLENGE - SQUARE EVERY NUMBER
//Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81, 1^2 is 1, 1^2 is 1, and 9^2 is 81. Together, we have 81, 1, 1, 81. Once combined we have 811181.


// Starting Code:
function squareEveryDigit(number) {

}

squareEveryDigit(946) // When running 946, you should see a result of 811636

// SOLUTION 2
function squareEveryDigit2(number) {
  let sn = ""; // o(1)
  number = number.toString(); // o(n)
  for (let i = 0; i < number.length; i++) {
      let digit = number[i]; // o(1)
      digit = Math.pow(digit,2); // o(1)
      sn += digit; // o(1)
  }// // o(n)
  console.log(parseInt(sn)); //o(n)
}
//TIME COMPLEXITY: O(n)
squareEveryDigit2(946)

