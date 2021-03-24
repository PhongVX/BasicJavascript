// let firstName = 'Asabeneh'      // string
// let lastName = 'Yetayeh'        // string
// let country = 'Finland'         // string
// let city = 'Helsinki'           // string
// let age = 250                   // number
// let job                         // undefined, because a value was not assigned

// console.log(typeof 'Asabeneh')  // string
// console.log(typeof firstName)   // string
// console.log(typeof 10)          // number
// console.log(typeof 3.14)        // number
// console.log(typeof true)        // boolean
// console.log(typeof false)       // boolean
// console.log(typeof NaN)         // number
// console.log(typeof job)         // undefined
// console.log(typeof undefined)   // undefined
// console.log(typeof null)        // object


let num1 = '10'
let numInt1 = parseInt(num1)
console.log(typeof numInt1)

let num2 = '10'
let numInt2 = Number(num2)
console.log(typeof numInt2) 

let num3 = '10'
let numInt3 = +num3

console.log(typeof numInt3)

let num4 = '9.81'
let numFloat = parseFloat(num4)

console.log(typeof numFloat)

let num5 = 12345
let num5String = num5.toString()
console.log(typeof num5String)

let array = [1, 2, 3, 4]
console.log(array.toString())
console.log(array.join('-'))

let testString = 'xin-chao-ban'
console.log(testString.split('-'))