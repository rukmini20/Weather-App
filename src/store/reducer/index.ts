import { combineReducers } from "redux";

import city from './city.reducer'
import cities from './cities.reducer'
const reducer = combineReducers({ city, cities, },);

export default reducer;
