// setTimeout(() => {
//   console.log('3秒後に呼ばれます')
// }, 3000)
// const callback = () => {
//   console.log('3秒後に呼ばれます')
// }
// setTimeout(callback, 3000)

const user = {
    name: 'Takeshi',
    message: 'I love JavaScript'
  }
  const SampleFunc = ({ name, message }) => console.log(message)
  SampleFunc(user)
  