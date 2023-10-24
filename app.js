const fs = require('node:fs');
const { imprimirInquirer } = require('./helpers/inquirer');

const data = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf8' }))

// const random = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50))
const random = getRandomNonRepeatingNumbers(50, 10);

let contador = 0
let correctas = 0

const main = async () => {
    const obtenerOpt = () => {
        const { correct, incorrect } = data[random[contador]]
        const combinar = [correct, ...incorrect]
        combinar.sort(() => Math.random() - 0.5)
        return combinar
    }

    const ejec = async () => {
        console.clear()
        console.log(`Escoga la palabra correcta \n`);
        const impresion = await imprimirInquirer(obtenerOpt(),contador);
        const palabraCorrecta = data[random[contador]].correct
        if (impresion == palabraCorrecta) {
            correctas++
        }
        contador++
    }

    while (contador < 10) {
        await ejec()
    }
    console.clear();
    console.log('Se acabo, usted tuvo ', correctas, ' Respuestas Correctas');
    console.log(`Y tuvo ${10-correctas} Palabras incorrectas`);
    console.log(`Su porcentaje de acierto fue: ${correctas/10*100}%`);
}

function getRandomNonRepeatingNumbers(range, count) {
    if (range < count) {
        throw new Error("No puedes generar más números únicos de los que hay en el rango.");
    }

    const randomNumbers = [];
    for (let i = 0; i < range; i++) {
        randomNumbers.push(i);
    }

    const result = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * randomNumbers.length);
        const randomNumber = randomNumbers.splice(randomIndex, 1)[0];
        result.push(randomNumber);
    }

    return result;
}

main()