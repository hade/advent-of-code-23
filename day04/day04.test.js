import { fetchData, winningPoints, cardAmount } from './day04.js'

test('prod data sum', () => {
    const win = fetchData('day04/input.txt', 'win')
    const own = fetchData('day04/input.txt', 'own')
    console.table(win)
    console.table(own)
    const sum = winningPoints(win, own)
    expect(sum).toEqual(24542)
})

test('task2-prod-items', () => {
    const win = fetchData('day04/input.txt', 'win')
    const own = fetchData('day04/input.txt', 'own')
    const sum = cardAmount(win, own)
    expect(sum).toEqual(8736438)
})

