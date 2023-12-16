import fs from 'fs'

const fetchData = (inputFile, type = 'win') => {
    const file = fs.readFileSync(inputFile, 'utf8')
    const lines = file.split('\n')
    const data = lines.reduce((rows, line) => {
        return [...rows, line.split(',')]
    }, [])
    return data
}

const main = () => {
    let curVal = 0

    const data = fetchData('test-input.txt')

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            const cellValue = data[i][j]
            for (let k = 0; k < cellValue.length; k++) {
                curVal = cellValue.charCodeAt(k)
                console.log('curVal', curVal)
            }
        }
    }
    console.table(data)
    return 0
}

console.log(main())