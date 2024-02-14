// UNIT 1 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: .push returns the new length of an array and adds it to the end of the array and the const colors has 4 values already in "tangerine", "magenta", "lilac", "daffodil" it adds "indigo" as the 5th value.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length will count the the amount of letters in a string and the spaces also count. so when you count up all the letters and include the 1 space you get 10. 

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: since we are asking it to call on [4] index it will print o because when you are calling on the index the computer uses zero indexing. the first position in the string which is H = [0] e = [1] l = [2] l = [3] o = [4]

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: so in this case answer it Ruby because we have set a variable index = 1 and when you console.log the variable language and also pass through the variable index its telling the computer to find what ever the value of index is which is 1. and again like above computer uses zero index so ruby is at index 1 in the array

// --------------------4) What will this log?

//const weekendDays = ["saturday", "sunday"]
//const newString = (array) => {
    //let finalString = array.toString().toUpperCase()
    //return finalString
//}
//console.log(newString(weekendDays))//.toUpperCase())

// a) Your answer:["SATURDAY" "SUNDAY"]
// b) Verify and explain: "TypeError: weekendDays.toUpperCase is not a function" ohh looking this one up. before i do. my guess is because .toUpperCase cant work on an array. and will work on strings now looking haha! 
//ahh okay so by looking i was correct with my guess. it does give type error due to the fact that the .toUpperCase works on strings and not for arrays. so if you wants this to work. you would first need to convert the weekendDays array into a string. with a function and using toString(). then you should be able to console.log(weekendDays.toUpperCase()). i changed it above to just show it work sorry :) 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer:[6, 6, 7, 9] i think it will print the length of each word in the string. 
// b) Verify and explain: it prints number. so not what i thought above. im going to look it up. 
// so from what i see. the typeof opertor returns a string indicating the type of value. so that makes sense to me. if you do typeof 42 output is number. if you do typeof true output is boolean. i guess im still a little confused why it only comes out number. looking more... 
//teamed up with seth to understand more why it comes back as number. and it makes sense. it comes back as number because in the console.log when you do datatypes.length that gives a number. so when you do typeof combined with that since .length gives a number thats why number is printed. 
