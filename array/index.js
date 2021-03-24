const arrayA = [1, 2, 3, 4, 5];
const arrayObject = [{id: 1, name:'ReactJS'}, {id: 2, name: 'NodeJS' }]

console.log('Length of arrayA: ',arrayA.length); // number of element in array
console.log('arrayA at index 0:', arrayA[0]); // Access by index

console.log('forEach print element of arrayA:');
arrayA.forEach((v) => {
    console.log(v);
})

console.log('==================map==================');

const x2EachElementArray = arrayA.map(v => v*2);
console.log('x2EachElementArray: ', x2EachElementArray);
const mapArrayObject = arrayObject.map(o => o.name);
console.log('mapArrayObject: ', mapArrayObject);


console.log('==============reduce===================');
const sumValueOfArrayA = arrayA.reduce((total, value) => total + value, 0);
console.log('sumValueOfArrayA: ', sumValueOfArrayA);

const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 34 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
]
// We want to change players array 
// const playersModified = {
//     11: {id: 11, name: "Messi", age: 33}
//     12: {id: 12, name: "Ronaldo", age: 34}
//     13: {id: 13, name: "Young", age: 35}
//     14: {id: 14, name: "Mane", age: 21}
//     15: {id: 15, name: "Salah", age: 24}
// }
const playersModified = players.reduce((previousObj, currentObj) => {
    return {
        ...previousObj,
        [currentObj.id]: currentObj
    }
}, {});
console.log('playersModified:', playersModified);

console.log('==============filter===================');
const players34Age = players.filter((p) => p.age === 34);
console.log('players34Age: ', players34Age);

console.log('==============find===================');
const ronando = players.find((p) => p.name === 'Ronaldo');
console.log('Ronando: ', ronando);

console.log('==============findIndex===================');
const ronandoIndex = players.findIndex((p) => p.name === 'Ronaldo');
console.log('Ronando index: ', ronandoIndex);

console.log('==============findIndex==================='); //return true false
const haveSomePerson34Age = players.some((p) => p.age === 34);
console.log('haveSomePerson34Age: ', haveSomePerson34Age);

console.log('==============every==================='); //return true false
const haveEveryPerson34Age = players.every((p) => p.age === 34);
console.log('haveEveryPerson34Age: ', haveEveryPerson34Age);

//Break, Continue

