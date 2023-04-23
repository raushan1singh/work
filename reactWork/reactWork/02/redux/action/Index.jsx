
export const Increment = (num) =>{
    return{
        type : 'increment',
        payload : num
    }
}


export const Decrement = (num) =>{
    return{
        type : 'decrement',
        payload : num
    }
}