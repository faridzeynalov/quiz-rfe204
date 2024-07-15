function setState(initialVal = "test"){
    var val = initialVal
    
    return [
        ()=>{return val},
        (newVal)=>{
            return val = newVal
        }
        ]
}

var [msg, setMsg] = setState('hello')

console.log(msg())
console.log(setMsg('world'))


function addToBasket(){
    var arr = []
    
    return (val)=>{
        arr.push(val)
        console.log(arr)
    }
}

var item = addToBasket();

item('html')
item('css')
item('javascript')
