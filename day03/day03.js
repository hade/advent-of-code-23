import fs from 'fs'

const fetchData = (inputFile) => {
    const file = fs.readFileSync(inputFile, 'utf8')
    const lines = file.split('\n')
    const data = lines.reduce((rows, line) => {
        return [...rows, line.split('')]
    }, [])
    return data
}

const enginePartsSum = (data) => {
    const sum = data.reduce((sum, row, rowIndex) => {
        const rowObj = row.reduce(
            (rowObj, char, colIndex) => {
                if (isNumeric(char)) {
                    rowObj['partStr'] += char
                    if (!rowObj['isPart']) {
                        // If engine part is not found yet
                        rowObj['isPart'] = isEnginePart(
                            rowIndex,
                            colIndex,
                            data
                        )
                    }
                    // If the final item is char, push it to parts list
                    if (colIndex === row.length - 1 && rowObj['isPart']) {
                        rowObj['partList'].push(parseInt(rowObj['partStr']))
                    }
                } else {
                    if (rowObj['partStr'] !== '' && rowObj['isPart']) {
                        rowObj['partList'].push(parseInt(rowObj['partStr']))
                        rowObj['isPart'] = false
                    }
                    rowObj['partStr'] = ''
                }
                return rowObj
            },
            {
                partStr: '',
                isPart: false,
                partList: [],
            }
        )
        // console.log('Rowobj', rowObj)

        const rowPartsSum = rowObj['partList'].reduce(
            (sum, part) => sum + part,
            0
        )
        // const rowPartsSum = rowObj[]
        return sum + rowPartsSum
    }, 0)

    console.log(`*** SUM: ${sum} ***`)
    return sum
}

const isNumeric = (char) => {
    return /^\d$/.test(char)
}

const isSymbol = (char) => {
    return !isNumeric(char) && char !== '.'
}

const isEnginePart = (row, col, data) => {
    const maxRow = data.length - 1
    const maxCol = data[0].length - 1

    const validRows = [row - 1, row, row + 1].filter((val, index) => {
        return val >= 0 && val <= maxRow
    })

    const validCols = [col - 1, col, col + 1].filter((val, index) => {
        return val >= 0 && val <= maxCol
    })

    const isPart = validRows.some((rowIndex) => {
        const foundInCols = validCols.some((colIndex) => {
            const isSym = isSymbol(data[rowIndex][colIndex])
            // console.log('isPart check: ', rowIndex, colIndex, isSym, validRows, validCols )
            return isSym
        })
        return foundInCols
    })

    return isPart
}

export { fetchData, enginePartsSum, isEnginePart }
