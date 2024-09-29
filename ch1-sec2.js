const global = 'global'
const SampleFunc = () => {
  const local = 'local'
  console.log(global)
  console.log(local)
}

SampleFunc()
console.log(global)
let hd = 10
hd = 100
console.log(hd)
