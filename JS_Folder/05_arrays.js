const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const fib = [1, 1, 2, 3, 5, 8, 13]
// cars.push('Porsche')
// cars.unshift('Reno')
// const firstItem = cars.shift()
// console.log(firstItem)

// console.log(cars.reverse())
// cars[index] = 'Porsche'
// console.log(cars)

// const index = cars.indexOf('BMW')

// const index = people.findIndex(function(person) {
//     return person.budget === 4321
// })
// console.log(people[index])
// Task 1
// const text = 'Hello, we are learning JS'
// const reverseText = text.split('').reverse().join('')

// // let findeedPerson
// const people = [
//      {name: 'Igor', budget: 4200},
//      {name: 'Oleg', budget: 1200},
//      {name: 'Vlad', budget: 4321}
// ]
// // for (const person of people) {
// //     if (person.budget === 4321) {
// //         findeedPerson = person
// // } console.log(findeedPerson)}

// const person = people.find(person => person.budget === 4321})
// console.log(person)

// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)

// const sqrt = num => Math.sqrt(num)
// const pow2 = num => num ** 2
// const pow2fib = fib.map(pow2)
// const filteredNumber = pow2fib.filter(num => num > 20)
// console.log(pow2fib)
// console.log(filteredNumber)

const people = [
      {name: 'Igor', budget: 4200},
      {name: 'Oleg', budget: 1200},
      {name: 'Vlad', budget: 4321}
 ]

const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => acc += person.budget, 0)
console.log(allBudget)