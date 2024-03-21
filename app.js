// Identifiers - let, const & console.log

const myName = "Prem"

let num = 5

// console.log(myName) // Prem
// console.log(num) // 5

num = 10

// console.log(num) // 10



// Data types

let myNumber;
// console.log(myNumber) // undefined

let boolValue = true
let nullValue = null

// console.log(boolValue)
// console.log(nullValue)

//  Array

let arr = [1, 20, "John", "good"]
// console.log(arr)

let intergerArray = [2, 5, 7, 9, 11]

// console.log(intergerArray.length)
// console.log(intergerArray[0])
// console.log(intergerArray[1])
// console.log(intergerArray[intergerArray.length-1])


// Object

const person = {
  name: {
    firstName: "John",
    secondName: "Doe"
  },
  age: 25,
  place: "London"
}

// console.log(person)


const student = {
  name: "John",
  age: 25,
  courses: [
    {
      courseName: "JS",
      courseCredits: 3
    },
    {
      courseName: "MERN",
      courseCredits: 4
    }
  ]
}

// console.log(student.courses)
// console.log(student.courses[0])
// console.log(student.courses[1].courseName)


// Template strings

let myNameNew = "Prem"

myNameNew = "Gokul"

// console.log(`Hello, ${myNameNew}!`)

// Prompt & Alert

// const username = prompt('Enter your username: ')
// console.log(username)

// alert(`Hello, ${username}!`)

// Operators
let a = 7
let b = 3

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// a++
// console.log(a)
// b--
// console.log(b)

// Comparators
// console.log(3>4)
// console.log(3<4)
// console.log(3>=4)
// console.log(3>=3)
// console.log(3=='3')
// console.log(3==='3')

// Conditionals

let weatherCondition = "Windy"
let subCondition = "Too Hot"

if (weatherCondition === "Cloudy") {
  console.log("Take the umbrella")
} else if (weatherCondition === "Rainy") {
  console.log("Use the umbrella")
} else if (weatherCondition === "Sunny") {

  if (subCondition === "Too Hot") {
    console.log("Use the umbrella")
  } else {
    console.log("Don't use the umbrella")
  }

} else {
    // console.log("Don't take the umbrella")
}

// Ternary operator

let result = 9 < 15

// result ? console.log("Result is True") : console.log("Result is False")

// Task

// const age = prompt('Enter your age: ')

// if (age > 60) {
//   console.log('Senior Citizen')
// } else if (age < 18) {
//   console.log('Minor')
// } else {
//   console.log('Adult')
// }

// Js false values - false, 0, '', undefined, null, NaN
let bool = 0

if (bool) {
  console.log('Bool is True')
} else {
  console.log('Bool is False')
}





