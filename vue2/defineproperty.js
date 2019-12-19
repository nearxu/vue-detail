var obj = {}

Object.defineProperty(obj, 'a', {
  get: function(val) {
    console.log(val)
    return val
  },
  set: function(newVal) {
    val = newVal
    console.log('set val' + newVal)
  }
})

obj.a

obj.a = 2
