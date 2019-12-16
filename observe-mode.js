const quenedObserve = new Set()

const observe = fn => quenedObserve.add(fn)

const observeable = obj => new Proxy(obj,{set})

function set(target,key,value,receiver){
    const result = Reflect.set(target,key,value,receiver)
    quenedObserve.forEach(observe => observe())
}