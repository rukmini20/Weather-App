
import { CityI } from "../../interfaces"; 
import { SELECT_CITY, REMOVE_CITY } from "../constants";

const selectCity = (city: CityI) => async (dispatch: Function) => {

  dispatch({ payload: city, type: SELECT_CITY });
};
const removeCity = () => async (dispatch: Function) => {
  
    dispatch({ payload: null, type: REMOVE_CITY });
};
export { selectCity,removeCity, };
