// function bind(human, fn) {
//     return function (...args) {
//         fn.apply(human, args)
//     }
// }
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const Person1 = {name: 'Igor', age: 24, job: 'Seafarer'}
// const Person2 = {name: 'Igor', age: 25, job: 'Developer'}

// bind(Person1, logPerson)()
// bind(Person2, logPerson)()


// function assembleString(array){
//     if (array.length == 0) {return ''}
//     console.log(array.length)
//     if (array.length > 2) {
//     array = array.map(string => string.split(''))
//     let result = array[0]
//     console.log(result)
//     for (i = 0; i < result.length; i++) {
//       if (result[i] === '*') {
//         for (j = 1; j <= array.length; j++) {
//           if (array[j][i] !== '*') {
//             result[i] = array[j][i]
//           } else result[i] = '#'
//         }
//       }
//     }
//     result = result.join('')
//     console.log(result)
//     return result
//     }
//     return array.join('')
// }

