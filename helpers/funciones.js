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

const impresionIncorrectas = (arrayIncorrectas = []) => {
    if (arrayIncorrectas) {
        console.log('');
        console.log('Sus Palabras incorrectas fueron:');
        arrayIncorrectas.forEach(e => {
            console.log(e);
        })
    }
}

const obtenerOpt = (data, random, contador) => {
    const { correct, incorrect } = data[random[contador]]
    const combinar = [correct, ...incorrect]
    combinar.sort(() => Math.random() - 0.5)
    return combinar
}

module.exports = {
    getRandomNonRepeatingNumbers,
    obtenerOpt,
    impresionIncorrectas
}