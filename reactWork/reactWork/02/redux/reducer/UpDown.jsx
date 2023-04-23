const initial = 0;
const ChangeNum = (state = initial, action) =>{
    
        switch(action.type){
                case "increment" : return state + action.payload;
                case "decrement" : return state - action.payload;
                default : return state;
        }
}

export default ChangeNum;