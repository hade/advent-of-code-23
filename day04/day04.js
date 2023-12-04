import fs from 'fs'

const fetchData = (inputFile, type = 'win') => {
    const file = fs.readFileSync(inputFile, 'utf8')
    const lines = file.split('\n')
    const data = lines.reduce((rows, line) => {
        const numbers =
            type === 'win'
                ? line.split(':')[1].split('|')[0].trim()
                : line.split(':')[1].split('|')[1].trim()
        return [...rows, numbers.split(' ')]
    }, [])
    return data
}

const winningPoints = (win, own) => {
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
            return rowWins === 1 ? 1 : 2 ** (rowWins - 1)
        })()

        // console.log('points', points)
        // console.log('rowWins', rowWins)
        return sum + points
    }, 0)

    return cardsSum
}

export { fetchData, winningPoints }
