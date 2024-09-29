// const sampleArray = []
// const sampleObject = {}

// console.log(typeof sampleArray)
// console.log(typeof sampleObject)

// console.log(Array.isArray(sampleArray) ? '配列です' : '配列ではありません')
// console.log(Array.isArray(sampleObject) ? '配列です' : '配列ではありません')

// const sampleArrayIndexOf = ['red', 'yellow', 'green', 'red']
// console.log(sampleArrayIndexOf.toString())

// const sampleArray1 = ['a', 'b']
// const sampleArray2 = ['c', 'd']
// const sampleArray3 = ['e', 'f']
// console.log(sampleArray1.concat(sampleArray2).concat(sampleArray3))

// const newArray01 = [...sampleArray1, ...sampleArray2, ...sampleArray3]
// console.log(newArray01)

// const sampleArrayDate = ['2022', '2', '22']
// console.log(sampleArrayDate.join('/'))

// const sampleArrayStrSort = ['あ', 'う', 'い', 'え', 'お']
// console.log(sampleArrayStrSort.sort())

// function compareFunction (a, b) {
//   return a - b
// }
// const sampleArrayNumSort = [1, 400, 30, 50, 200]
// sampleArrayNumSort.sort(compareFunction)
// console.log(sampleArrayNumSort.reverse())

// const sampleArrayDestructuring = ['東京', '大阪', '名古屋', '横浜', '福岡']
// const [Tokyo, Osaka, Nagoya, ...cities] = sampleArrayDestructuring
// console.log(Tokyo)
// console.log(Osaka)
// console.log(Nagoya)

// console.log(...cities)
// console.log(cities)
// const sampleArrayForEach = [2, 4, 6]
// sampleArrayForEach.forEach((value, index, array) => {
//   console.log(`value:${value},index:${index},array:${array}`)
// })
// const sampleArrayForMap = [2, 4, 6, 8]
// const sampleArrayForMapResult = sampleArrayForMap.map(value => {
//   return value * value
// })
// console.log(sampleArrayForMapResult)
// console.log(sampleArrayForMap)

// const sampleArrayForFillter = [3, 5, 7, 9, 15]
// const sampleArrayForFillterResult = sampleArrayForFillter.filter(value => {
//   return value % 3 == 0
// })
// console.log(sampleArrayForFillterResult)
// console.log(sampleArrayForFillter)

// const sampleArrayForFind = [3, 5, 7, 9, 15]
// const sampleArrayForFindResult = sampleArrayForFind.find(value => {
//   return value % 3 == 0
// })
// console.log(sampleArrayForFindResult)
// console.log(sampleArrayForFind)

// const sampleArrayForEvery = [9, 12, 15, 18]
// const sampleArrayForEveryResult = sampleArrayForEvery.every(value => {
//   return value % 3 == 0
// })
// console.log(sampleArrayForEveryResult)
// console.log(sampleArrayForEvery)

const sampleArrayForReduce = [0, 1, 2, 3]
const initialvalue = 0
const sampleArrayForReduceResult = sampleArrayForReduce.reduce(
  (accumulator, currentValue) => {
    console.log('accumulator:', accumulator, 'currentValue:', currentValue)
    return accumulator + currentValue
  },
  initialvalue
)
console.log(sampleArrayForReduceResult)
