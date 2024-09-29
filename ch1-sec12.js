// const callbackFunc = () => console.log('処理が実行されました!')
// setTimeout(callbackFunc, 5000)

// const sampleCallbackFunc = () => {
//   console.log('123')
//   setTimeout(() => console.log('456'), 0)
//   console.log('789')
// }
// sampleCallbackFunc()

// const promise = new Promise((resolve, reject) => {
//   resolve()
// })
// const inCaseOfSuccess = () => {
//   console.log('非同期の処理が成功し、resolveが通知された!')
// }
// const inCaseOfFailure = () => {
//   console.log('非同期の処理が失敗し、rejectが通知された。。。')
// }

// promise.then(inCaseOfSuccess, inCaseOfFailure)
// promise.then(inCaseOfSuccess).catch(inCaseOfFailure)
// promise
//   .then(inCaseOfSuccess)
//   .catch(inCaseOfFailure)
//   .finally(() => console.log('処理が成功しても失敗しても実行されます!'))

// try {
//   console.log('Try成功!!')
// } catch (e) {
//   console.log('errorが発生しました!:', e)
// } finally {
//   console.log('処理は終了しました!')
// }
// const sampleTryCatchErrorFunc = num => {
//   try {
//     if (num < 3) {
//       throw new Error('エラーが発生しました!')
//     }
//   } catch (error) {
//     console.log(error)
//   } finally {
//     console.log('処理は終了しました!')
//   }
// }
// sampleTryCatchErrorFunc(2)
// sampleTryCatchErrorFunc(4)

const asyncFuncWaitingTest = async num => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`${num}番目のasyncFuncWaitingTest`)
      }, 1000 * num)
    }).then(num => console.log(num))
  }
  const asyncTestFunc = async () => {
    console.log('1番目の処理')
    await asyncFuncWaitingTest(1)
    console.log('2番目の処理')
    await asyncFuncWaitingTest(2)
    console.log('3番目の処理')
    await asyncFuncWaitingTest(10)
  }
  asyncTestFunc()
  