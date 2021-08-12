import { SELECT_CITY, REMOVE_CITY, } from '../constants/city.constant'
import { ActionI, } from "../../interfaces";
  const initialState = {
    city: null,
    type: null,
  };
  
  const city = (state = initialState, action: ActionI) => {
    switch (action.type) {
      case SELECT_CITY:
        
        return { ...state, city: action.payload, type: SELECT_CITY };
      case REMOVE_CITY:
        return { ...state, city: action.payload, type: REMOVE_CITY };
      default:
        return state;
    }
  };
  
  export default city;
  