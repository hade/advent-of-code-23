import fs from 'fs'

const fetchData = (inputFile, type = 'win') => {
    const file = fs.readFileSync(inputFile, 'utf8')
    const lines = file.split('\n')
    const data = lines.reduce((rows, line) => {
        const numbers =
            type === 'win'
                ? line.split(':')[1].split('|')[0].trim()
                : line.split(':')[1].split('|')[1].trim()
        return [...rows, numbers.split(/\s+/)]
    }, [])
    return data
}

const writeToFile = (str) => {
    fs.appendFileSync('day04/output.txt', str + '\n', 'utf8')
}

const emptyFile = () => {
    fs.writeFileSync('day04/output.txt', '', 'utf8')
}

const winningPoints = (win, own, onlyCount = false) => {
    const cardsSum = win.reduce((sum, row, index) => {
        const rowWins = row.reduce((rowWins, winNum) => {
            own[index].forEach((ownNum) => {
                if (winNum === ownNum) {
                    rowWins += 1
                }
            })
            return rowWins
        }, 0)

        const points = (() => {
            if (rowWins === 0) {
                return 0
            }
            if (onlyCount) {
                return rowWins === 1 ? 1 : rowWins
            } else {
                return rowWins === 1 ? 1 : 2 ** (rowWins - 1)
            }
        })()

        const str = `${win[index].join(',')}`
        return sum + points
    }, 0)

    return cardsSum
}

let wins = []

const modifyWins = (arr) => {
    arr.forEach((val) => {
        wins[val + 1] =
            typeof wins[val + 1] === 'undefined' ? 1 : wins[val + 1] + 1
    })
}

const addOriginalCards = () => {
    wins = wins.map((item) => item + 1)
}

const calc = (win, own, count, index) => {
    const wins = winningPoints([win[index]], [own[index]], true)
    const array = Array.from(
        { length: index + wins - index },
        (_, ind) => index + ind + 1
    )

    if (wins === 0) {
        return count
    }

    modifyWins(array)
    const total = array.reduce((tot, val) => {
        return (tot += calc(win, own, count + 1, val))
    }, 0)

    return total
}

const cardAmount = (win, own) => {
    emptyFile()

    win.forEach((_, index) => {
        console.log(`Running the index: ${index}`)
        calc(win, own, 0, index)
    }, 0)

    modifyWins([...Array(win.length).keys()])
    return wins.reduce((sum, cur) => sum + cur, 0)
}

export { fetchData, winningPoints, cardAmount }
