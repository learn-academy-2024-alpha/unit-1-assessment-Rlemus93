// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.

const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"


//input: 2 strings
//output: string that has the most characters
//create a function that takes in both strings
//conditional statement to tell me which string has more characters using .length method and > operator 
// return using string interpolation

const fruitEvaluator = (string1, string2,) => {
    if (string1.length > string2.length){
        return `${string1} has more characters than ${string2}` 
    } else if (string2.length > string1.length) {
        return `${string2} has more characters than ${string1}`
    } else ("entry is unknown")
}
    console.log(fruitEvaluator(fruit1, fruit2)) //output: banana has more characters than apple
    console.log(fruitEvaluator(fruit3, fruit4)) //output: cherry has more characters than kiwi

// Explain your code: The question states to compare two strings and evaluate which one has more characters. I did this within my function using a conditional statment. it tells the computer to return which string has more characters by using the > operator and string interpolation within the return. 

// --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// Expected output: 15
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 17

//input: array of numbers
//output: returns sum of the array of numbers
//create a function that takes the array and adds each element together ex. 2+5+2+2+4 = 15 
//iterate over the array with a for loop. 

const addedRuns =(array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i] //at first i just tried using + but it didnt work. remebered us using the += and then creating another variable of sum = 0
        //return sum // i tried to return here first but it the output was 2 and 6. moved it outside the function and it did the trick
    } return sum
}
    console.log(addedRuns(padres1984WorldSeriesRuns)) //output: 15
    console.log(addedRuns(padres1998WorldSeriesRuns)) //output: 17
// Explain your code: in the above example. I am creating a function that takes addedRuns. using a for loop to iterate through the array and adds the value of the current element of the array to sum. 

// --------------------2) Create a function that takes in a string and returns the string with all the characters in reversed order. Use the test variable provided below.

const lesMiserables = "Jean Valjean"
// Expected output: "naejlaV naeJ"

const lionKing = "Simba"
// Expected output: "abmiS"

// input: a string
// output: a string in reveresed order
// create a function that turns the string into an array using .split
// take in the new array string and use the method .reverse to reverse the words 
// join the string back together using .join
// return the new string

const reveresedString= (string1) => {
    let stringArr = string1.split("")// kept getting error because i had () with no "" in them
    let newString = stringArr.reverse().join("")
    return newString
}//.join tried the join here and remebered i could do method after another methor on like 79 
console.log(reveresedString(lesMiserables)) //output : naejlaV naeJ
console.log(reveresedString(lionKing)) //output : abmiS

// Explain your code: this one is fun! mark, seth and I came up with this one on thursday night! the code above takes the variable reveresedString and creates a function that turns the strings into an array. by doing this i created another variable that takes that array and reverses the order. then i joined them together to make a string again givin me the out out i wanted.

// --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: [42, 5, -5]

const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
// Expected output: ["Delta", "Echo", "Foxtrot"]

//input: array
//output: array that returns only the 3rd, 4th, and 5th index valus
//create a function that takes in the arrays
// use the .slice method that will grab the index of the elements needed into a new array
// return the values in a new array 

const newArr = (array) => {
    //let arr1 = [] // for some reason thought i needed this empty array but it wasnt after all
    let finalArr = array.slice(3, 6) //at first i did (2, 5) but that gave me -4, 42, 5
    return finalArr
}
    console.log(newArr(stockExchange)) // output [ 42, 5, -5 ]
    console.log(newArr(cohortList)) // output [ 'Delta', 'Echo', 'Foxtrot' ]

// Explain your code: the code above takes in the array. and by using .slice i was able to set that variable finalArr to only call on indexs 3-5. since i want it to stop at 5. youll see i had to put 3,6 as the arguments. once you return final Arr and console.log it gives the answer needed. i feel like this one it was the easiest way in my mind but i would love to try to use a HOF with it to map or fileter through. i just remembered the .slice from day 3 of javascript and it stuck in my mind as an easy method to use for this. 
