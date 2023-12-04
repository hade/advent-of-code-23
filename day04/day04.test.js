import { fetchData, winningPoints} from './day04.js'

test('test data sum', () => {
    const win = fetchData('day04/test-input.txt', 'win')
    const own = fetchData('day04/test-input.txt', 'own')
    console.table(win)
    console.table(own)
    const sum = winningPoints(win, own)
    expect(sum).toEqual(13)
})

test('prod data sum', () => {
    const win = fetchData('day04/input.txt', 'win')
    const own = fetchData('day04/input.txt', 'own')
    console.table(win)
    console.table(own)
    const sum = winningPoints(win, own)
    expect(sum).toEqual(13)
})


