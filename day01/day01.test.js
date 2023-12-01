import { fetchNumbers, loopLines } from './day01.js'


test('1abc2', () => {
    expect(fetchNumbers('1abc2')).toEqual(12)
})

test('pqr3stu8vwx', () => {
    expect(fetchNumbers('pqr3stu8vwx')).toEqual(38)
})

test('a1b2c3d4e5f', () => {
    expect(fetchNumbers('a1b2c3d4e5f')).toEqual(15)
})

test('treb7uchet', () => {
    expect(fetchNumbers('treb7uchet')).toEqual(77)
})

test('test-lines', () => {
    expect(loopLines('day01/test-lines.txt')).toEqual(142)
})

test('prod-lines', () => {
    expect(loopLines('day01/prod-lines.txt')).toEqual(54338)
})

test('two1nine', () => {
    expect(fetchNumbers('two1nine', true)).toEqual(29)
})

test('eightwothree', () => {
    expect(fetchNumbers('eightwothree', true)).toEqual(83)
})

test('abcone2threexyz', () => {
    expect(fetchNumbers('abcone2threexyz', true)).toEqual(13)
})

test('xtwone3four', () => {
    expect(fetchNumbers('xtwone3four', true)).toEqual(24)
})

test('4nineeightseven2', () => {
    expect(fetchNumbers('4nineeightseven2', true)).toEqual(42)
})

test('zoneight234', () => {
    expect(fetchNumbers('zoneight234', true)).toEqual(14)
})

test('7pqrstsixteen', () => {
    expect(fetchNumbers('7pqrstsixteen', true)).toEqual(76)
})

test('2911threeninesdvxvheightwobm', () => {
  expect(fetchNumbers('2911threeninesdvxvheightwobm', true)).toEqual(22)
})

test('qpzcfbfsrxthreenine3ksbghzzffsevenfive9', () => {
  expect(fetchNumbers('qpzcfbfsrxthreenine3ksbghzzffsevenfive9', true)).toEqual(39)
})

test('j2', () => {
  expect(fetchNumbers('j2', true)).toEqual(22)
})

test('prod-lines-full', () => {
    expect(loopLines('day01/prod-lines.txt', true)).toEqual(53389)
})
