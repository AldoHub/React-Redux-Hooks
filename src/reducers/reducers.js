import {combineReducers} from "redux";
import fetchTech from "../reducers/fetch_tech";
import customSearch from "../reducers/custom_search";


//combine reducers
//remember you need to export the reducers to use them
const reducers= combineReducers({
    FetchTech: fetchTech,
    CustomSearch: customSearch
});

export default reducers;