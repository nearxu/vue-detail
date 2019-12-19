// Reflect和Proxy的API一致。
const a = [1, 2, 3, 4, 5, 6]
const watch = (data, fun) => {
  let newArr = new Proxy(data, {
    get(target, key, receiver) {
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      if (key !== 'length') {
        fun(key, target, value)
      }
      return true
    }
  })
  return newArr
}
const newTarget = watch(a, (key, target, value) => {
  console.log(target, key, value, '监听发生变化')
})
newTarget.push(123)
newTarget.push(321)

newTarget.shift()
