const customSearch=(state={
    customNews:[]
    }, action)=>{
        if(action.type === "FETCH_CUSTOM_NEWS"){
            
            state= {...state, customNews: action.payload}
        }
    
        return state;
    };
    export default customSearch;