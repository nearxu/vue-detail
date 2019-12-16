let obj = {}

let proxy = new Proxy(obj,{
    get(target,key,receiver){
        console.log('get target',target,'key',key,'receiver',receiver)
    },
    set(target,key,value,receiver){
        console.log('set target',target,'key',key,'value',value)
        return Reflect.set(target,key,value,receiver)
    }
})

proxy.count = 1

++proxy.count