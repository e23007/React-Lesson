// const user = {
//   name: 'Mai',
//   id: 78,
//   age: '18',
//   'my-name': 'JaveScript',
//   case: false
// }

// console.log(user['name'])
// console.log(user.id)
// console.log(user.age)
// console.log(user['my-name'])
// console.log(user.case)

// const capitalCity = {
//   japan: 'Tokyo',
//   england: 'London'
// }
// const birthplace = 'japan'
// console.log(capitalCity[birthplace])

// const points = {
//   x: 150,
//   y: 180
// }
// points.x = 170
// console.log(points.x)

// points.z = 200
// console.log(points)

// delete points.y
// console.log(points)

// const points01 = { a: 10, b: 20 }
// const points02 = { c: 10, d: 20 }

// const points03 = { ...points01, ...points02 }
// console.log(points03)

// const { a, b, ...rest } = points03
// console.log(a)
// console.log(b)
// console.log(rest)

// const points = { a: 10, b: 20, c: 30, d: 40 }
// console.log(Object.keys(points))
// console.log(Object.values(points))
// const entries = Object.entries(points)
// console.log(...entries)
// console.log(...Object.entries(points))

// const posts = [
//   {
//     id: 1,
//     content: 'JavaScriptは楽しい!',
//     likes: 2
//   },
//   {
//     id: 2,
//     content: 'プログラミング大好き!',
//     likes: 3
//   },
//   {
//     id: 3,
//     content: 'React勉強しよう!',
//     likes: 1
//   }
// ]

// for (let i = 0; i < posts.length; i++) {
//   console.log(`タイトル:${posts[i].content} ${posts[i].likes}いいね!`)
// }
// posts.forEach(post => {
//   return console.log(`タイトル:${post.content} ${post.likes}いいね!`)
// })

// const objMap = posts.map(post => {
//   return `タイトル:${post.content} ${post.likes}いいね!`
// })
// console.log(objMap)
