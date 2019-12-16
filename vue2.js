function observe(target){
    if(typeof target !== 'object' && target === null){
        return target
    }
    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

function defineReactive(target,key,value){
    observe(value)
    Object.defineProperty(target,key,{
        get(){
            return value;
        },
        set(newVal){
            if(newVal !== value){
                observe(newVal)
                value = newVal
            }
        }
    })
}

let obj = {a:{b:{c:1}}}

observe(obj)
