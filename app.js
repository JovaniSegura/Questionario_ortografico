const fs = require('node:fs')

console.clear();

const data = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf8' }))

const random = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50))

let contador = 0

// console.log(data[random[0]]);
const obtenerOpt = () => {
    const {correct,incorrect} = data[random[0]]
    const combinar = [correct,...incorrect]
    combinar.sort(()=>Math.random()-0.5)
    return combinar
} 

// await imprimirInquirer(data[random[0]]);
console.log(obtenerOpt());