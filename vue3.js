

let toProxy = new WeakMap()

let toRaw = new WeakMap()

function reactive(target){
    return createReactiveObject(target)
}

const isObject = obj => typeof obj === 'object' && obj !== null;

function createReactiveObject(target){
    let proxy = toProxy.get(target)
    if(proxy){
        return proxy
    }
    let baseHandler = {
        get(target,key,reactiver){
            console.log('get:' + key)
            let result = Reflect.get(target,key,value,reactiver)
            return isObject(result) ? reactive(result):result;
        },
        set(target,key,value,reactiver){
            console.log('set:'+key)
            let flag = Reflect.set(target,key,value,reactiver);
            return flag;
        },
        deleteProperty(target,key){
            let res = Reflect.deleteProperty(target,key)
            return res;
        }
    }
    let observed = new Proxy(target,baseHandler)
    toProxy.set(target,observed)
    toRaw.set(observed,target)
    return observed
}

let o = reactive({a:{b:1}})