// 1 Переменные 

// let name = 'IgorFuck'
// const withNum5 = '5'
// const _ = 'Okay'
// const $ = 'Still Okay'
// const 5withNum = 'Ok' // err
// const if = 'Okay' // err

// 2 Мутирование 
// console.log('Name: ' + name + ', age: ' + age)
// alert('Name: ' + name + ', age: ' + age)
// const lastName = prompt('Enter your Last Name: ')
// console.log('Your Last Name: ' + lastName)

// 3 Операторы

// let currentYear = 2022
// const birthYear = 1998
// const age = currentYear - birthYear
// alert('Your Age is: ' + age)

// const a = 10
// const b = 5
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(--currentYear)

// let c = 32
// c = c + a
// c += a
// // c += a
// // c -= a
// // c *= a
// // c /= a более короткие аналоги операций
// console.log(c)

// 4 Типы данных в JS
// const isProgrammer = true
// const firstName = 'Igor'
// const age = 23
// let x
// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const age = 23
// const currentYear = 2022
// const birthYear = 1998
// const isFullage = (currentYear - birthYear) >= age
// console.log(isFullage)

// 6 Условные операторы
// const courseStatus = 'ready'

// if (courseStatus === 'ready') {
//     console.log('Course is ready')
// } else if (courseStatus === 'Pending') {
//     console.log('Course is pending')
// } else {
//     console.log('Course is failed')
// }
// const isReady = false
// if (isReady) {
//     console.log('Okay')
// } else {
//     console.log('Not Okay')
// }

// // Тернарное выражение
// isReady ? console.log('Okay') : console.log('Not Okay')

// 7 Булевая логика
// Вся информация на сайте 

// 8 Функции 

// function calculateAge(Year) {
//     return 2022 - Year
// }
// console.log(calculateAge(1998))

// function infoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('Name is: ' + name + ' and age is: ' + age)

//     } else {
//         console.log('Wrong Age')
//     }
// }

// infoAbout('Igor', 1998)

// 9 Массивы

// const cars = ['Audi', 'Mercedes', 'Ford']
// const cars = new Array('Audi', 'Mercedes', 'Ford')
// const cars = ['Audi', 'Mercedes', 'Ford']
// console.log(cars[1])
// console.log(cars.length)
// cars[0] = 'Porsche'
// console.log(cars)
// cars[3] = 'Mazda'
// console.log(cars)
// cars[cars.length] = 'BMW'
// console.log(cars)

// 10 Циклы

// const cars = ['Audi', 'Mercedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// Объекты

// const person = {
//     firstName: 'Igor',
//     lastName: 'Mazhitov',
//     year: 1998,
//     languages: ['Ru', 'En', 'Jp'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet')
//     }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.greet()
// person.hasWife = true 
// console.log(person)
// person.isDeveloper = true
// console.log(person)
// function repeatStr (n, s) {
//     let r = s
//     for (i = 1; i < n; i++) {
//         r += s
//     }
//     return console.log(r)
// }
// repeatStr(2, 's')
