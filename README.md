# Advent of Code 2023

## Generic

Building the test framework, run `yarn` in the root. Use `yarn test day01/day01.test.js` to run the single day or single test with `yarn test day01/day01.test.js -t 7pqrstsixteen`.

## Day01 ⭐️ ⭐️

https://adventofcode.com/2023/day/1

Most time was spent setting up the testing framework for jest. First star was easy, for the second star I did first the simple replace, but it did not work with string like `eightwothree` where `eight` and `two` are sharing the same char. So the check need to start from the beginning and the end of the string. Not the most efficient, but will do the work. 

## Day02 ⭐️ ⭐️

https://adventofcode.com/2023/day/2

Second day was more clear than the first day. Not much room for interpretation. First creating the data model and then looping it through two different ways. Each game having it's own row. Game having the sets in objects. 

```json
[
	[{red: 10, blue: 2}, {...}, {...}],
	[{}, {}, {}],
]
```