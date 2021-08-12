import { ADD_CITY, FETCH_CITIES, } from '../constants/cities.constant'
import { ActionI, } from "../../interfaces";
  const initialState = {
    cities: [],
    type: null,
  };
  
  const cities = (state = initialState, action: ActionI) => {
    switch (action.type) {
      case ADD_CITY:
        return { ...state, cities: [ ...state.cities, action.payload ], type: ADD_CITY }
        case FETCH_CITIES:
        return { ...state, type: FETCH_CITIES };
      default:
        return state;
    }
  };
  
  export default cities;
  