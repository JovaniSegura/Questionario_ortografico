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
        message: `Palabra #${contador+1} de 10 \n`,
        name: 'palabras',
        choices
    }

    const { palabras } = await inquirer.prompt(question)
    return palabras
}

module.exports = {
    imprimirInquirer
}