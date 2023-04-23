const initial = 0;
const UpDown = (state = initial, action) =>{
    switch(action.type){
        case "incNum" : return state + 1;
        case "decNum" : return state - 1;
        default : return state;   
    }
}

export default UpDown;