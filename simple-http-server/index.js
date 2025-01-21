import getPosts, { postsData } from './postController.js'
const { add, subtract } = require('./utils.js')

console.log(add(10, 5)) // 15
console.log(subtract(10, 5)) // 5

console.log(getPosts()) // Oczekujemy tablicy postów
console.log(postsData) // To samo, ale jako named export
