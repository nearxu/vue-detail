// subs
function Dep() {
  this.subs = []
}

Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub)
  },
  notify: function() {
    this.subs.forEach(function(sub) {
      sub.update()
    })
  }
}

function Watcher(vm, node, name, type) {
  Dep.target = this
  this.name = name
  this.node = node
  this.vm = vm
  this.type = type
  this.update()
  Dep.target = null
}

Watcher.prototype = {
  update: function() {
    this.get()
    this.node[this.type] = this.value
  },
  get: function() {
    this.value = this.vm[this.name]
  }
}
