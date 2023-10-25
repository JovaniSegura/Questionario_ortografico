const inquirer = require('inquirer')

imprimirInquirer = async (data = [], contador) => {
    const choices = []
    data.forEach((pal) => {
        choices.push({
            value: pal,
            name: pal
        })
    })

    const question = {
        type: 'list',
        message: `Palabra #${contador + 1} de 10 \n`,
        name: 'palabras',
        choices
    }

    const { palabras } = await inquirer.prompt(question)
    return palabras
}

const continuarInq = async() => {
    console.log('');
    const aceptar = [
        {
            type: 'list',
            name: 'enter',
            message: 'Seleccione una opción',
            choices: [
                {
                    value: '0',
                    name: '1. Deseo Continuar',
                },
                {
                    value: '1',
                    name: '2. Deseo Salir',
                }
            ]
        }
    ]
    const {enter}=await inquirer.prompt(aceptar)
    return enter
}

module.exports = {
    imprimirInquirer,
    continuarInq
}