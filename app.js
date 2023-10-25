// proximo:
// Mostrar las palabras incorrectas
// Agregarle colores al texto de salida

const fs = require('node:fs');
const { imprimirInquirer, continuarInq } = require('./helpers/inquirer');
const { getRandomNonRepeatingNumbers, obtenerOpt, impresionIncorrectas } = require('./helpers/funciones');

const data = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf8' }))

// const random = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50))

let continuar = '0'

const main = async () => {
    const subMain = async () => {

        const random = getRandomNonRepeatingNumbers(50, 10);
        let contador = 0
        let correctas = 0
        let arrayIncorrectas = []

        const ejec = async () => {
            console.clear()
            console.log(`Escoga la palabra correcta \n`);
            const impresion = await imprimirInquirer(obtenerOpt(data, random, contador), contador);
            const palabraCorrecta = data[random[contador]].correct
            if (impresion == palabraCorrecta) {
                correctas++
            } else {
                arrayIncorrectas.push(impresion)
            }
            contador++
        }

        while (contador < 10) {
            await ejec()
        }
        console.clear();
        console.log('Se acabo, usted tuvo ', correctas, ' Respuestas Correctas');
        console.log(`Y tuvo ${10 - correctas} Palabras incorrectas`);
        console.log(`Su porcentaje de acierto fue: ${correctas / 10 * 100}%`);

        impresionIncorrectas(arrayIncorrectas)
    }

    do {
        await subMain()
        continuar = await continuarInq()
    } while (continuar === '0')
}
main()