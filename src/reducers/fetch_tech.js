const fetchTech=(state={
    techNews:[]
    }, action)=>{
        if(action.type === "FETCH_TECH"){
            
            state= {...state, techNews: action.payload}
        }
    
        return state;
    };
    export default fetchTech;