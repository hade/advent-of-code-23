import fs from 'fs'

const inputFile = 'day02/input.txt'

const fetchData = () => {
    const file = fs.readFileSync(inputFile, 'utf8')
    const lines = file.split('\n')

    // Game 6: 8 blue, 1 red, 17 green; 7 blue; 10 green, 6 blue; 5 blue, 1 red, 11 green
    const data = lines.reduce((games, line) => {
        const [_, gameInfo] = line.split(':')
        const sets = gameInfo.split(';')
        const setObj = sets.reduce((setArr, setStr) => {
            const objArr = setStr.split(',').map((str) => str.split(' '))
            const fixedMap = objArr.reduce((setObj, item) => {
                // item [ '', '3', 'green' ]
                return { ...setObj, ...{ [item[2]]: parseInt(item[1]) } }
            }, {})
            return [...setArr, fixedMap]
        }, [])
        return [...games, setObj]
    }, [])
    return data
}

const possibleGamesSum = (data, gameObj) => {
    const sum = data.reduce((sum, game, index) => {
        const notPossible = game.some((set) => {
            return (
                set.red > gameObj.red ||
                set.green > gameObj.green ||
                set.blue > gameObj.blue
            )
        })
        // console.log('notPossible', notPossible)
        return (sum += notPossible ? 0 : index + 1)
    }, 0)
    console.log(sum)
    return sum
}

const minimumObjProduct = (data) => {
    const productSum = data.reduce((productSum, game, index) => {
        const maxSet = game.reduce((maxSetObj, set) => {
            const maxGreen =
                (maxSetObj.green || 0) < (set.green || 0)
                    ? set.green
                    : maxSetObj.green
            const maxRed =
                (maxSetObj.red || 0) < (set.red || 0) ? set.red : maxSetObj.red
            const maxBlue =
                (maxSetObj.blue || 0) < (set.blue || 0)
                    ? set.blue
                    : maxSetObj.blue

            const newObj = {
                ...(maxGreen !== undefined && { green: maxGreen }),
                ...(maxRed !== undefined && { red: maxRed }),
                ...(maxBlue !== undefined && { blue: maxBlue }),
            }
            return newObj
        }, {})
        return (
            productSum +
            (maxSet.green || 1) * (maxSet.red || 1) * (maxSet.blue || 1)
        )
    }, 0)
		console.log('minimumObjProduct', productSum)
    return productSum
}

export { fetchData, possibleGamesSum, minimumObjProduct }
