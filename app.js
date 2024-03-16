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

const username = prompt('Enter your username: ')
// console.log(username)

alert(`Hello, ${username}!`)
