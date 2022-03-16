// const person = {
//     name: 'Igor',
//     age: 26,
//     isProgrammer: true,
//     // 'complex key': 'Complex Value',
//     // ['key_' + (1 + 3)]: 'Computed Key', // key_4
//     languages: ['en', 'ru', 'jp'],
//     greet() {
//         console.log('greet from person')
//     },
//     info() {
//         // console.log('this:', this)
//         console.info('Info about:', this.name)
//     }
// }

// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])
// person.greet()
// person.age++
// console.log(person)
// person.languages.push('by')
// console.log(person)
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge, languages} = person
// console.log(name, personAge, languages)

// for (let key in person) {
//     if (person.hasOwnPropertykey) {
//         console.log('key:', key)
//         console.log('Value:', person[key])
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log('key:', key)
//     console.log('Value:', person[key]) 
// })

// Context
// person.info()

// const logger = {
//     keys() {
//         console.log('Object Keys:', Object.keys(this))
//     },
//     keysAndValues() {
//         Object.keys(this).forEach(key => {
//             console.log(`'${key}': ${this[key]}`)
//         })
//     },
//     withParams(top = false, between = false, bottom = false) {
//         if (top) {
//             console.log('------ Start ------')
//         }
//         Object.keys(this).forEach((key, index, array) => {
//             console.log(`'${key}': ${this[key]}`)
//             if (between && index !== array.length - 1) {
//                 console.log('------------')
//             }
//         })
//         if (bottom) {
//             console.log('------ End ------')
//         }
//     }
// }
// // const bound = logger.keys.bind(person)
// // bound()
// logger.withParams.call(person, true, true, true)

// function find(a,b,n){
//     if (a == 0 && b == 0) {return 0}
//     let c = [a, b], d, i = c.length
//     while (i<=n) {
//         d = (c[c.length - 1] + c[c.length - 2]).toString()
//         .split('').map(num => c[c.length] = parseInt(num))
//         console.log(c)
//         i++
//      }  
//      c = c.map(Number)
//      return (c[n])
//  }
  
// find(7, 8, 9)


// function find(a,b,n){
//     console.log(a, b, n)
//     let c = [a, b], d, original = [a, b]
//     if (n < 600) {
//       if (a == 0 && b == 0) {return 0} else if (n < 2) 
//       {
//         if (n == 1) {return b} else {return a}
//       }
//       for (let count = c.length-1; count <= n+1; ) {
//         d = (c[c.length - 1] + c[c.length - 2]).toString()
//           .split('').map(num => c[c.length] = parseInt(num))
//         c = c.slice(-2, c.length)
//         count += d.length
//         if (count >= n) {
//           if (count > n) {
//               return c[0]
//             } else {
//               return c[1]
//             }
//         }
//       }
//     } else {
//         for (let count = c.length; count <= 500; ) {
//             d = (c[c.length - 1] + c[c.length - 2]).toString()
//           .split('').map(num => c[c.length] = parseInt(num))
//           if (d == original) {console.log ('ORIGINAL!')}
//           count += d.length
//         } console.log(c)

//     } 
//     }
// find(0, 8, 602)

//_______________________________________________________________________

// Object.defineProperties(Array.prototype, {
//     count: {
//         value: function(value) {
//             return this.filter(x => x==value).length;
//         }
//     }
// })
// function findOdd(A) {
//   for (i = 0; i<= A.length; i++) {
//     if (A.count(A[i]) % 2 !== 0) {
//       console.log(A[i])
//       return A[i]
//     }
//   }
// }

// findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])


// fi
// arrayDiff([1,2,3], [1,2])