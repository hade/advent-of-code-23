import { fetchData, enginePartsSum, isEnginePart } from './day03.js'

test('test data sum', () => {
    const data = fetchData('day03/test-input.txt')
    console.table(data)
    const sum = enginePartsSum(data)
    expect(sum).toEqual(4361)
})

test('real data sum', () => {
    const data = fetchData('day03/input.txt')
    const sum = enginePartsSum(data)
    expect(sum).toEqual(539637)
})

test('is engine part', () => {
    const data = fetchData('day03/test-input.txt')
    expect(isEnginePart(0, 0, data)).toEqual(false)
    expect(isEnginePart(0, 1, data)).toEqual(false)
    expect(isEnginePart(0, 2, data)).toEqual(true)
    expect(isEnginePart(2, 6, data)).toEqual(true)
    expect(isEnginePart(9, 5, data)).toEqual(true)
    expect(isEnginePart(9, 1, data)).toEqual(false)
    expect(isEnginePart(9, 9, data)).toEqual(false)
})
