import { fetchData, possibleGamesSum, minimumObjProduct } from './day02.js'

// 12 red cubes, 13 green cubes, and 14 blue cubes
test('possibleGames	', () => {
    const data = fetchData()
    const gameObj = { red: 12, green: 13, blue: 14 }
    expect(possibleGamesSum(data, gameObj)).toEqual(2207)
})

test('minimumObjectProduct	', () => {
    const data = fetchData()
    expect(minimumObjProduct(data)).toEqual(62241)
})
