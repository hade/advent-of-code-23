import fs from 'fs'

const mapper = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
}

const findFirstNumber = (str, useNumericStrings = false) => {
    let nStr = ''
    for (const char of str) {
        if (isNumeric(char)) {
            return char
        } else {
            nStr += char
            const numericStrValue = hasNumericString(nStr)
            if (numericStrValue && useNumericStrings) {
                // console.log('numericStrValue (first)', numericStrValue)
                return numericStrValue
            }
        }
    }
}

const findLastNumber = (str, useNumericStrings = false) => {
    let nStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        if (isNumeric(str[i])) {
            return str[i]
        } else {
            nStr = str[i] + nStr
            // console.log('nStr', nStr)
            const numericStrValue = hasNumericString(nStr)

            if (numericStrValue && useNumericStrings) {
                // console.log('numericStrValue found (last)', numericStrValue)
                return numericStrValue
            }
        }
    }
}

const isNumeric = (char) => {
    return /^\d$/.test(char)
}

const hasNumericString = (str) => {
    for (const [key, value] of Object.entries(mapper)) {
        if (str.includes(key)) {
            return value
        }
    }
    return false
}

const fetchNumbers = (str, useNumericStrings) => {
    return parseInt(
        `${findFirstNumber(str, useNumericStrings)}${findLastNumber(
            str,
            useNumericStrings
        )}`
    )
}

const loopLines = (fileName, useNumericStrings = false) => {
    const file = fs.readFileSync(fileName, 'utf8')

    const lines = file.split('\n')
    let sum = 0
    let numberOfLines = 0
    let fetchedNumber = 0
    lines.forEach((line) => {
        fetchedNumber = fetchNumbers(line, useNumericStrings)
        sum += fetchedNumber
        numberOfLines += 1
    })
    console.log(`numberOfLines: ${numberOfLines}`)
    return sum
}

export { fetchNumbers, loopLines, findFirstNumber }
