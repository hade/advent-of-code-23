import fs from 'fs'

const fetchData = (inputFile) => {
    const file = fs.readFileSync(inputFile, 'utf8')
    const lines = file.split('\n')
    const data = lines.reduce((rows, line) => {
        return [...rows, line.split('')]
    }, [])
    return data
}

const isNumeric = (char) => {
    return /^\d$/.test(char)
}

const isGearSymbol = (char) => {
    return char === '*'
}

const isGearPart = (row, col, data) => {
    let ret = false
    const maxRow = data.length - 1
    const maxCol = data[0].length - 1

    const validRows = [row - 1, row, row + 1].filter((val, index) => {
        return val >= 0 && val <= maxRow
    })

    const validCols = [col - 1, col, col + 1].filter((val, index) => {
        return val >= 0 && val <= maxCol
    })

    validRows.some((rowIndex) => {
        validCols.some((colIndex) => {
            const isSym = isGearSymbol(data[rowIndex][colIndex])

            if (isSym) {
                // console.log('gearPartFound: ', rowIndex, colIndex)
                ret = {
                    x: rowIndex,
                    y: colIndex,
                }
                return true
            }
        })
    })

    return ret
}

const possibleGearParts = (data) => {
    const parts = {}

    for (let x = 0; x < data.length; x++) {
        let partStr = ''
        let partList = []
        let gearPartFound = false

        const partPush = (str, coord) => {
            partList.push(parseInt(str))
            const coordStr = `${coord['x']},${coord['y']}`
            if (!parts[coordStr]) {
                parts[coordStr] = []
            }
            parts[coordStr].push(parseInt(str))
            // console.log('setting coord: ', parts)
        }

        for (let y = 0; y < data[x].length; y++) {
            if (isNumeric(data[x][y])) {
                // console.log('numeric:', x, y)
                partStr += data[x][y]
                if (!gearPartFound) {
                    gearPartFound = isGearPart(x, y, data)
                    // console.log('Gear part found!', gearPartFound, 'x:', x, 'y:', y)
                }

                // If the last item of the row is numeric and it's part of gear part, add it to part str
                if (y === data[x].length - 1 && gearPartFound) {
                    // partList.push(parseInt(partStr))
                    partPush(partStr, gearPartFound)
                    // gearPartFound = false
                }
            } else {
                // console.log('else - x,y', x, y)
                if (partStr !== '' && gearPartFound) {
                    partPush(partStr, gearPartFound)
                }
                partStr = ''
                gearPartFound = false
            }
        }
    }

    return parts
}

const main = () => {
    // 467835
    // const data = fetchData('day03/test-input.txt')

    // 82818007
    const data = fetchData('day03/input.txt')

    const gearParts = possibleGearParts(data)

    console.log(gearParts)

    let sum = 0
    for (const [key, value] of Object.entries(gearParts)) {
        if (value.length == 2) {
            sum += value[0] * value[1]
        }
    }

    return sum
}

console.log(main())
